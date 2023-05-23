from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb://localhost:27017/")
db = client["dataAnalyticsDB"]
collection = db["dataEntries"]

print(client)


@app.route("/api/ingest/form", methods=["POST"])
def ingest_form_data():
    data = request.get_json()  # Retrieve form data
    collection.insert_one(data)  # Store data in the database
    return jsonify({"message": "Data ingested successfully"})


@app.route("/api/ingest/excel", methods=["POST"])
def ingest_excel_data():
    file = request.files["file"]  # Retrieve uploaded Excel sheet
    # Process the Excel sheet and extract data
    # Store the extracted data in the database
    return jsonify({"message": "Data ingested successfully"})


@app.route("/api/analytics", methods=["GET"])
def run_analytics():
    # Retrieve data from the database
    # Perform analytics using a Python script
    # Store the output in the database
    return jsonify({"message": "Analytics executed successfully"})


@app.route("/api/data", methods=["GET"])
def get_data():
    data = list(collection.find({}, {"_id": 0}))  # Retrieve all data from the database
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)


# from flask import Flask, request, jsonify
# from pymongo import MongoClient

# app = Flask(__name__)

# # Step 3: Set up MongoDB connection
# client = MongoClient("mongodb://localhost:27017/")
# db = client["dataAnalyticsDB"]
# collection = db["dataEntries"]


# # Step 4: Define API endpoints
# @app.route("/api/ingest/form", methods=["POST"])
# def ingest_form_data():
#     try:
#         data = request.get_json()  # Retrieve form data

#         # Validate and sanitize user input
#         # ...

#         collection.insert_one(data)  # Store data in the database

#         return jsonify({"message": "Data ingested successfully"})

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500


# @app.route("/api/ingest/excel", methods=["POST"])
# def ingest_excel_data():
#     try:
#         file = request.files["file"]  # Retrieve uploaded Excel sheet

#         # Validate file format
#         if file and file.filename.endswith((".xls", ".xlsx")):
#             # Process the Excel sheet and extract data
#             # Store the extracted data in the database

#             return jsonify({"message": "Data ingested successfully"})

#         else:
#             return jsonify({"error": "Invalid file format. Only Excel files are allowed."}), 400

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500


# @app.route("/api/analytics", methods=["GET"])
# def run_analytics():
#     try:
#         # Retrieve data from the database
#         # Perform analytics using a Python script
#         # Store the output in the database

#         return jsonify({"message": "Analytics executed successfully"})

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500


# @app.route("/api/data", methods=["GET"])
# def get_data():
#     try:
#         data = list(collection.find({}, {"_id": 0}))  # Retrieve all data from the database
#         return jsonify(data)

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500


# if __name__ == "__main__":
#     app.run(debug=True)
