import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart, LinearScale, BarElement } from "chart.js";

function Visuals() {
  const [data, setData] = useState(null);

  Chart.register(CategoryScale, LinearScale, BarElement);

  useEffect(() => {
    // Make a GET request to retrieve the reservation data from the database
    axios
      .get("http://localhost:5000/api/getData")
      .then((response) => {
        const reservationData = response.data;

        // Extract reservation IDs and ratings from the data
        const reservationIds = reservationData.map(
          (entry) => entry.Reservation_ID
        );
        const ratings = reservationData.map((entry) => entry.rating);

        // Calculate the minimum, maximum, and average ratings
        const minRating = Math.min(...ratings);
        const maxRating = Math.max(...ratings);
        const averageRating =
          ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;

        // Create the chart data for individual ratings
        const individualRatingsData = {
          labels: [...reservationIds],
          datasets: [
            {
              label: "Ratings",
              data: [...ratings],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        };

        // Create the chart data for average rating, min rating, and max rating
        const summaryData = {
          labels: ["Average Rating", "Min Rating", "Max Rating"],
          datasets: [
            {
              label: "Ratings",
              data: [averageRating, minRating, maxRating],
              backgroundColor: [
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: [
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(255, 99, 132, 1)",
              ],
              borderWidth: 1,
            },
          ],
        };

        console.log("minRating", minRating);
        console.log("maxRating", maxRating);
        console.log("averageRating", averageRating);
        console.log("individualRatingsData", individualRatingsData);
        console.log("summaryData", summaryData);

        setData({ individualRatingsData, summaryData });
      })
      .catch((error) => {
        console.error("Error retrieving reservation data:", error.message);
      });
  }, []);

  return (
    <div>
      <h2>Individual Ratings</h2>
      {data && <Bar data={data.individualRatingsData} />}
      <h2>Summary</h2>
      {data && <Bar data={data.summaryData} />}
    </div>
  );
}

export default Visuals;
