import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/navBar.css";
import { GrinvoiceContext } from "../context/GrinvoiceContext";

const Options = () => {
  const { value2 } = useContext(GrinvoiceContext);
  let navigate = useNavigate();

  const [options, setOptions] = value2;

  const optionsOff = () => {
    setOptions(false);
  };

  const handleLogOut =() =>{
    localStorage.clear()
    navigate('/login')
  }

  return (
    <>
      <div        className="options"
        style={{
          width: "370px",
          height: "700px",
          background: "grey",
          opacity: "0.8",
          position: "absolute",
          zIndex: "0",
        }}
      >
        <div
          className="Options"
          style={{
            width: "250px",
            height: "770px",
            background: "black",
            position: "absolute",
            right: 0,
            zIndex: "1",
          }}
        >
          <h1>Options</h1>
          <button onClick={() => optionsOff()}>close Options</button>
          <button onClick={() => handleLogOut()}>LogOut</button>

          {/* <img
            className="ch"
            src={require("../assets/logoPageLogin.png")}
            alt="logoPageLogin"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Options;
