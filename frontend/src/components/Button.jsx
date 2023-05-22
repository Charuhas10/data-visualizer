import React from "react";
import form from "../assets/images/form.svg";
import excel from "../assets/images/excel.svg";
// import form from "assets/images/form.svg";
// import './assets/styles/Button.css'

function Button() {

  const excelClick = () => {
    console.log("Excel button clicked");

  }

  return (
    <div>
      <button>
        <img src={form} className="form-img" alt="form" height={200} width={200} />
      </button>
      <button onClick={excelClick}>
        <img src={excel} className="excel-img" alt="excel-image" height={200} width={200} />
      </button>
    </div>
  );
}

export default Button;

{
  /* <img
          src="./assets/images/form.svg"
          alt="Form"
          width="50px"
          height="60px"
        /> */
}