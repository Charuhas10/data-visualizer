import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [reservationId, setReservationId] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();

    // Create a data object to send in the request
    const data = {
      reservationId,
      rating,
    };

    console.log(data);
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
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error("Error submitting form:", error.message);
      });

    // Clear the form inputs after submitting
    setReservationId("");
    setRating("");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Create a data object to send in the request
  //   const data = {
  //     reservationId,
  //     rating,
  //   };

  //   console.log(data);
  //   try {
  //     // Make a POST request to the backend API to ingest the form data
  //     await axios.post("/api/form", data, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     // Display a success message or perform any additional actions
  //     console.log("Data ingested successfully");
  //   } catch (error) {
  //     // Handle any errors that occur during the API call
  //     console.error("Error ingesting data:", error.message);
  //   }

  //   // Clear the form inputs after submitting
  //   setReservationId("");
  //   setRating("");
  // };

  return (
    <React.Fragment>
      <div className="cta">
        <form className="form-inputs" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="reservationId">Reservation ID: </label>
            <label htmlFor="rating">Rating: </label>
          </div>
          <div>
            <input
              type="text"
              id="reservationId"
              value={reservationId}
              onChange={(e) => setReservationId(e.target.value)}
              required
            />
            <input
              type="number"
              id="rating"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;

//OLD CODE
// import React, { useState } from "react";

// const Form = () => {
//   const [reservationId, setReservationId] = useState("");
//   const [date, setDate] = useState("");
//   const [rating, setRating] = useState(0);
//   const [foodQuality, setFoodQuality] = useState(0);
//   const [service, setService] = useState(0);
//   const [ambience, setAmbience] = useState(0);
//   const [comments, setComments] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Construct the feedback object
//     const feedbackData = {
//       reservationId,
//       date,
//       rating,
//       foodQuality,
//       service,
//       ambience,
//       comments,
//     };

//     // Perform API call to store the feedback data or perform any other required action
//     // Example:
//     // fetch('/api/feedback', {
//     //   method: 'POST',
//     //   body: JSON.stringify(feedbackData),
//     //   headers: {
//     //     'Content-Type': 'application/json'
//     //   }
//     // })
//     // .then(response => response.json())
//     // .then(data => {
//     //   // Handle the response
//     // })
//     // .catch(error => {
//     //   // Handle the error
//     // });

//     // Clear the form after submitting
//     setReservationId("");
//     setDate("");
//     setRating(0);
//     setFoodQuality(0);
//     setService(0);
//     setAmbience(0);
//     setComments("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="reservationId">Reservation ID:</label>
//       <input
//         type="text"
//         id="reservationId"
//         value={reservationId}
//         onChange={(e) => setReservationId(e.target.value)}
//         required
//       />

//       <label htmlFor="date">Date:</label>
//       <input
//         type="date"
//         id="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         required
//       />

//       <label htmlFor="rating">Rating:</label>
//       <input
//         type="number"
//         id="rating"
//         value={rating}
//         onChange={(e) => setRating(e.target.value)}
//         required
//       />

//       <label htmlFor="foodQuality">Food Quality:</label>
//       <input
//         type="number"
//         id="foodQuality"
//         value={foodQuality}
//         onChange={(e) => setFoodQuality(e.target.value)}
//         required
//       />

//       <label htmlFor="service">Service:</label>
//       <input
//         type="number"
//         id="service"
//         value={service}
//         onChange={(e) => setService(e.target.value)}
//         required
//       />

//       <label htmlFor="ambience">Ambience:</label>
//       <input
//         type="number"
//         id="ambience"
//         value={ambience}
//         onChange={(e) => setAmbience(e.target.value)}
//         required
//       />

//       <label htmlFor="comments">Comments:</label>
//       <textarea
//         id="comments"
//         value={comments}
//         onChange={(e) => setComments(e.target.value)}
//         required
//       ></textarea>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;
