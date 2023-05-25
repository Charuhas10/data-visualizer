import React, { useState } from "react";
import axios from "axios";

const Excel = () => {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      return;
    }

    const data = new FormData();
    data.append("file", file);

    axios
      .post("http://localhost:5000/api/excel", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("File uploaded successfully:", response.data);
        setUploaded(true); // Set uploaded state to true
      })
      .catch((error) => {
        console.error("Error uploading file:", error.message);
      });

    setFile(null);
  };

  const handleAnalyse = () => {
    axios
      .get("http://localhost:5000/api/analytics")
      .then((response) => {
        console.log("Analytics executed successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error executing analytics:", error.message);
      });
  };

  return (
    <React.Fragment>
      <div className="cta">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          style={{ border: "none" }}
        />
        <button className="form-button" onClick={handleUpload} disabled={!file}>
          Upload
        </button>
        <button
          className="form-button"
          onClick={handleAnalyse}
          disabled={!uploaded}
        >
          Analyse
        </button>
      </div>
    </React.Fragment>
  );
};

export default Excel;

// import React, { useState } from "react";
// import axios from "axios";

// const Excel = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     console.log(e.target.value);
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleUpload = () => {
//     if (!file) {
//       return;
//     }

//     // Create a data object to send in the request
//     const data = new FormData();
//     data.append("file", file);

//     console.log(data);

//     axios
//       .post("http://localhost:5000/api/excel", data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => {
//         // Handle the response data
//         const responseData = response.data;
//         // Perform any actions based on the response, e.g., show a success message
//         console.log("File uploaded successfully:", responseData);
//       })
//       .catch((error) => {
//         // Handle any errors that occur during the API call
//         console.error("Error uploading file:", error.message);
//       });

//     // Clear the file input after uploading
//     setFile(null);
//   };

//   // const handleUpload = async () => {
//   //   if (!file) {
//   //     return;
//   //   }

//   //   const formData = new FormData();
//   //   formData.append("file", file);

//   //   try {
//   //     await axios.post("http://localhost:5000/api/excel", formData, {
//   //       headers: {
//   //         "Content-Type": "multipart/form-data",
//   //       },
//   //     });
//   //     // Display a success message or perform any additional actions
//   //     console.log("File uploaded successfully");
//   //   } catch (error) {
//   //     // Handle any errors that occur during the API call
//   //     console.error("Error uploading file:", error.message);
//   //   }

//   //   // Clear the file input after uploading
//   //   setFile(null);
//   // };

//   return (
//     <React.Fragment>
//       <div className="cta">
//         <input
//           type="file"
//           accept=".xlsx, .xls"
//           onChange={handleFileChange}
//           style={{ border: "none" }}
//         />
//         <button className="form-button" onClick={handleUpload} disabled={!file}>
//           Upload
//         </button>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Excel;
