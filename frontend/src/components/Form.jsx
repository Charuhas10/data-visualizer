import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [Reservation_ID, setReservationId] = useState("");
  const [rating, setRating] = useState("");
  const [showAnalysisButton, setShowAnalysisButton] = useState(false);

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
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error("Error performing analysis:", error.message);
      });
  };

  return (
    <React.Fragment>
      <div className="cta">
        <form className="form-inputs" onSubmit={handleSubmit}>
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
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      {showAnalysisButton && (
        <button className="analysis-button" onClick={handleAnalysis}>
          Analyse
        </button>
      )}
    </React.Fragment>
  );
};

export default Form;

// import React, { useState } from "react";
// import axios from "axios";

// const Form = () => {
//   const [Reservation_ID, setReservationId] = useState("");
//   const [rating, setRating] = useState("");

//   const handleSubmit = (e) => {
//     console.log(e.target.value);
//     e.preventDefault();

//     // Create a data object to send in the request
//     const data = {
//       Reservation_ID,
//       rating,
//     };

//     console.log(data);
//     // Make a POST request to the backend API to ingest the form data
//     axios
//       .post("http://localhost:5000/api/form", data, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         // Handle the response data
//         const responseData = response.data;
//         // Perform any actions based on the response, e.g., show a success message
//         console.log("Data ingested successfully:", responseData);
//       })
//       .catch((error) => {
//         // Handle any errors that occur during the API call
//         console.error("Error submitting form:", error.message);
//       });

//     // Clear the form inputs after submitting
//     setReservationId("");
//     setRating("");
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   // Create a data object to send in the request
//   //   const data = {
//   //     reservationId,
//   //     rating,
//   //   };

//   //   console.log(data);
//   //   try {
//   //     // Make a POST request to the backend API to ingest the form data
//   //     await axios.post("/api/form", data, {
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //     });
//   //     // Display a success message or perform any additional actions
//   //     console.log("Data ingested successfully");
//   //   } catch (error) {
//   //     // Handle any errors that occur during the API call
//   //     console.error("Error ingesting data:", error.message);
//   //   }

//   //   // Clear the form inputs after submitting
//   //   setReservationId("");
//   //   setRating("");
//   // };

//   return (
//     <React.Fragment>
//       <div className="cta">
//         <form className="form-inputs" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="Reservation_ID">Reservation ID: </label>
//             <label htmlFor="rating">Rating: </label>
//           </div>
//           <div>
//             <input
//               type="text"
//               id="Reservation_ID"
//               value={Reservation_ID}
//               onChange={(e) => setReservationId(e.target.value)}
//               required
//             />
//             <input
//               type="number"
//               id="rating"
//               min="1"
//               max="5"
//               value={rating}
//               onChange={(e) => parseInt(setRating(e.target.value))}
//               required
//             />
//           </div>
//           <button className="form-button" type="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Form;
