import React, { useContext } from "react";
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
    setOptions(false);
    navigate('/login')
  }

  return (
    <>
      <div        className="options"
        style={{
          width: "370px",
          height: "767px",
          background: "grey",
          opacity: "0.8",
          position: "absolute",
          zIndex: "0",
          borderBottomLeftRadius:'45px'
        }}
      >
        <div
          className="Options"
          style={{
            width: "250px",
            height: "770px",
            background: "black",
            position: "absolute",
            display: 'flex',
            flexDirection:'column',
            justifyContent:'space-around',
            right: 0,
            zIndex: "1",
          }}
        >
          <h1>Options</h1>
          <button onClick={() => optionsOff()} style={{width:'50px', position:'absolute', top:'20px', right:'10px'}}><img
            className="photoCategories"
            src={require("../assets/arrowIcon.png")}
            style={{transform: 'rotate(180deg)', width:'40px'}}
            alt="set categories"
          /></button>
          <button>
          <img
            className="photoCategories"
            src={require("../assets/categoriesIcon.png")}
            alt="set categories"
          /> <p> Customize categories</p>

          </button>
          <button>
          <img
            className="photoCategories"
            src={require("../assets/accountIcon.png")}
            alt="profile parametres"
          /><p> Account</p>

          </button>
          <button>
          <img
            className="photoCategories"
            src={require("../assets/parametreIcon.png")}
            alt="parametres"
          /><p> Settings</p>

          </button>
          <button onClick={() => handleLogOut()}><img
            style={{width:'20px'}}
            src={require("../assets/logoutIcon.png")}
            alt="parametres"
          />LogOut</button>
        </div>
      </div>
    </>
  );
};

export default Options;
