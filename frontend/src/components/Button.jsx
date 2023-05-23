import React from "react";
import form from "../assets/images/form.svg";
import excel from "../assets/images/excel.svg";
import { useNavigate } from "react-router-dom";

function Button() {
  let navigate = useNavigate();
  return (
    <div className="btn-group">
      <button
        onClick={() => {
          navigate("/form");
        }}
      >
        <img
          src={form}
          className="form-img"
          alt="form"
          height="250"
          width="250"
        />
      </button>
      <button
        onClick={() => {
          navigate("/excel");
        }}
      >
        <img
          src={excel}
          className="excel-img"
          alt="excel-image"
          height="250"
          width="250"
        />
      </button>
    </div>
  );
}

export default Button;
