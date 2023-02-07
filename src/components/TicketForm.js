import "../css/ticketForm.css";
import { GrinvoiceContext } from "../context/GrinvoiceContext";
import React, { useContext, useEffect, useState } from "react";
import Calculator from "./Calculator";
import Category from "./Category";
import axios from "axios";

const TicketForm = ({ data, src }) => {
  const { value5, value3 } = useContext(GrinvoiceContext);
  const [price, setPrice] = value5;
  const [category, setCategory] = useState(false)
  const { value4 } = useContext(GrinvoiceContext);
  const [ticketForm, setTicketForm] = value4;
  const dataFormat = new Date(data.date);
  const [base_url, setBase_url] = value3
  // const [amount, setAmount] = useState(0)



  const deleteLastOne = () => {
    setPrice(price.slice(0, -1) || "0");
  };

  const ticketFormOff = () => {
    setTicketForm(false);
    //add delete photo from database if cancel upload
    //add delete amount (prérempli)from price in Category.js
  };

  const navigateToCattegory =() => {
    price.length >1 &&  <Category/>
  }  
  
  const priceOkChooseCategory = () =>{
    setCategory(true)
    
  }


  useEffect(() => {
    console.log(price);
    console.log(data)
  }, [price]);

  return (
    <div className="ticketForm">
      <button
        onClick={() => ticketFormOff()}
        style={{
          width: "50px",
          position: "absolute",
          top: "20px",
          left: "10px",
        }}
      >
        <img
          className="photoCategories"
          src={require("../assets/cancelIcon.png")}
          style={{ width: "40px" }}
          alt="set categories"
        />{" "}
        <span> cancel</span>{" "}
      </button>

      {dataFormat.toLocaleDateString("en-US")}

      <h1>{data.name}</h1>

      <div className="priceTicket">
        <img width={"auto"} height={"100%"} src={src} />
        <span className="price">{price}</span>
        <button onClick={deleteLastOne}  style={{ border:'0', backgroundColor:'transparent'}} > <img
          className="photoCategories"
          src={require("../assets/deleteIcon.png")}
          style={{ width: "40px" }}
          alt="set categories"
        /></button>
      </div>
      <Calculator />

      {price.length >1 && 
      <button onClick={priceOkChooseCategory}> CHOOSE A CATTEGORY</button>}
      {category && <Category data={data}/>}
    </div>
  );
};

export default TicketForm;
