import React, { useContext } from "react";

import "../css/navBar.css";
import { GrinvoiceContext } from "../context/GrinvoiceContext";

const Filter = () => {
  const { value1 } = useContext(GrinvoiceContext);

  const [filter, setFilter] = value1;

  const filterOff = () => {
    setFilter(false);
  };
  return (
    <>
      <div
        className="FilterAll"
        style={{
          width: "370px",
          height: "767px",
          background: "grey",
          opacity: "0.8",
          position: "absolute",
          zIndex: "0",
          borderBottomRightRadius:'45px',
          borderBottomLeftRadius:'45px'

        }}
      >
        <div
          className="Filter"
          style={{
            width: "250px",
            height: "767px",
            background: "white",
            position: "absolute",
            zIndex: "1",
            borderBottomLeftRadius:'45px'
          }}
        >
          <h1>FILTER</h1>
          <button onClick={() => filterOff()} style={{width:'50px', position:'absolute', top:'20px', left:'10px'}}><img
            className="photoCategories"
            src={require("../assets/arrowIcon.png")}
            style={{ width:'40px'}}
            alt="set categories"
          /></button>
        <button> <p>month</p> </button> <br />
        <button> <p>year</p> </button> <br />
        <button> <p>week</p> </button> <br />
        <button> <p>choose period</p> </button> <br />

        
        </div>
      </div>
    </>
  );
};

export default Filter;
