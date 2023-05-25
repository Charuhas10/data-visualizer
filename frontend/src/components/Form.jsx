import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [Reservation_ID, setReservationId] = useState("");
  const [rating, setRating] = useState("");
  const [showAnalysisButton, setShowAnalysisButton] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a data object to send in the request
    const data = {
      Reservation_ID,
      rating,
    };

    // Make a POST request to the backend API to ingest the form data
    axios
      .post("http://localhost:5000/api/form", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Handle the response data
        const responseData = response.data;
        // Perform any actions based on the response, e.g., show a success message
        console.log("Data ingested successfully:", responseData);
        // Set the showAnalysisButton state to true
        setShowAnalysisButton(true);
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error("Error submitting form:", error.message);
      });

    // Clear the form inputs after submitting
    setReservationId("");
    setRating("");
  };

  const handleAnalysis = () => {
    // Make a GET request to the backend API to perform analysis
    axios
      .get("http://localhost:5000/api/analytics")
      .then((response) => {
        // Handle the response data
        const responseData = response.data;
        // Perform any actions based on the response, e.g., display analysis results
        console.log("Analysis performed successfully:", responseData);
        // Navigate to the Visuals page
        navigate("/visuals");
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error("Error performing analysis:", error.message);
      });
  };

  // let navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="cta">
        <form className="form-inputs" onSubmit={handleSubmit}>
          <div className="inner-form">
            <div>
              <label htmlFor="Reservation_ID">Reservation ID: </label>
              <label htmlFor="rating">Rating: </label>
            </div>
            <div>
              <input
                type="text"
                id="Reservation_ID"
                value={Reservation_ID}
                onChange={(e) => setReservationId(e.target.value)}
                required
              />
              <input
                type="number"
                id="rating"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}
                required
              />
            </div>
          </div>
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
        {showAnalysisButton && (
        <button className="form-button" onClick={handleAnalysis}>
          Analyse
        </button>
      )}
      </div>
      
    </React.Fragment>
  );
};

export default Form;
