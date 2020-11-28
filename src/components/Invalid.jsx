import React from "react";
import { useHistory } from "react-router-dom";

const Invalid = () => {
  let history = useHistory();

  const handleGoBack = () => {
    history.push("/");
  };

  return (
    <div>
      <div className="goBackBtnDiv">
        <button onClick={handleGoBack} className="goBackBtn">
          Go Back
        </button>
      </div>

      <div className="invalidContainer">
        <h1>Invalid Input</h1>
      </div>
    </div>
  );
};

export default Invalid;
