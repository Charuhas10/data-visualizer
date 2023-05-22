import React from "react";
import { useState } from "react";
import * as XLSX from "xlsx";

import "./assets/styles/Excel.css";

function Excel() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    // e is the event object
    const reader = new FileReader(); // FileReader is a built-in object of JS which allows us to read the contents of a file
    reader.readAsBinaryString(e.target.files[0]); // readAsBinaryString() is a built-in method of FileReader object which reads the contents of a file and returns it in the form of a string
    reader.onload = (e) => {
      // onload is an event handler which is triggered when the file is loaded
      const data = e.target.result; // e.target.result is the contents of the file
      const workbook = XLSX.read(data, { type: "binary" }); // XLSX.read() is a built-in method of XLSX object which reads the contents of a file and returns it in the form of an object
      const sheetName = workbook.SheetNames[0]; // workbook.SheetNames is an array of all the sheet names in the file and workbook.Sheets is an object of all the sheets in the file
      const sheet = workbook.Sheets[sheetName]; // workbook.Sheets is an object of all the sheets in the file and workbook.Sheets[sheetName] is the sheet object of the sheet with name sheetName
      const parsedData = XLSX.utils.sheet_to_json(sheet); // XLSX.utils.sheet_to_json() is a built-in method of XLSX object which converts sheet object to JSON object
      setData(parsedData); // setData() is a function which sets the state of data to parsedData i.e. JSON object
    };
  };

  return (
    <div>
      <input type="file" accept=".xlsx,.xls" onChange={handleFileUpload} />
      {data.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Excel;