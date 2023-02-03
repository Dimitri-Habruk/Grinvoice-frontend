import React, { useContext, useState } from "react";

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
          width: "350px",
          height: "700px",
          background: "grey",
          opacity: "0.5",
          position: "absolute",
          zIndex: "0",
        }}
      >
        <div
          className="Filter"
          style={{
            width: "250px",
            height: "770px",
            background: "black",
            position: "absolute",
            zIndex: "1",
          }}
        >
          <h1>FILTER</h1>
          {/* <button onClick={() => filterOff()}>viré filter</button> */}
          <button onClick={() => filterOff()} style={{width:'50px', position:'absolute', top:'20px', left:'10px'}}><img
            className="photoCategories"
            src={require("../assets/arrowIcon.png")}
            style={{ width:'40px'}}
            alt="set categories"
          /></button>
        </div>
      </div>
    </>
  );
};

export default Filter;
