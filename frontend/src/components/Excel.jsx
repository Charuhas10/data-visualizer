import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Excel = () => {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const navigate = useNavigate();

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

        // Navigate to the Visuals page
        navigate("/visuals");
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
