from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/")
db = client["dataAnalyticsDB"]
collection = db["dataEntries"]
output_collection = db["analyticsOutput"]

print(client)


@app.route("/api/form", methods=["POST"])
def ingest_form_data():
    data = request.get_json()  # Retrieve form data

    # Convert rating to a number before storing it
    data["rating"] = int(data["rating"])

    collection.insert_one(data)  # Store data in the database
    return jsonify({"message": "Data ingested successfully"})


@app.route("/api/excel", methods=["POST"])
def ingest_excel_data():
    file = request.files["file"]  # Retrieve uploaded Excel sheet

    # Process the Excel sheet and extract data
    df = pd.read_excel(file)
    extracted_data = df.to_dict(orient="records")

    # Store the extracted data in the database
    collection.insert_many(extracted_data)

    return jsonify({"message": "Data ingested successfully"})


@app.route("/api/analytics", methods=["GET"])
def run_analytics():
    # Retrieve data from the database
    data = list(collection.find({}, {"_id": 0}))

    # Perform analytics
    analytics_output = {}
    total_records = len(data)

    # Calculate average, minimum, and maximum rating for the restaurant
    ratings = [entry["rating"] for entry in data]
    average_rating = sum(ratings) / total_records
    min_rating = min(ratings)
    max_rating = max(ratings)

    analytics_output["average_rating"] = average_rating
    analytics_output["min_rating"] = min_rating
    analytics_output["max_rating"] = max_rating

    # Store the output in the database
    output_collection.replace_one({}, analytics_output, upsert=True)

    return jsonify({"message": "Analytics executed successfully"})


@app.route("/api/getData", methods=["GET"])
def get_data():
    data = list(collection.find({}, {"_id": 0}))  # Retrieve all data from the database
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
