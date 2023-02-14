import "../css/ticketForm.css";
import { GrinvoiceContext } from "../context/GrinvoiceContext";
import React, { useContext, useState } from "react";
import Calculator from "./Calculator";
import Category from "./Category";

const TicketForm = ({ newTicketInfo, imageUploadedUrl }) => {
  const { value5 } = useContext(GrinvoiceContext);
  const [price, setPrice] = value5;
  const [category, setCategory] = useState(false)
  const { value4 } = useContext(GrinvoiceContext);
  const [ticketForm, setTicketForm] = value4;
  const dataFormat = new Date(newTicketInfo.date);



  const deleteLastOne = () => {
    setPrice(price.slice(0, -1) || "0");
  };

  const ticketFormOff = () => {
    setTicketForm(false);
  };

  const priceOkChooseCategory = () =>{
    setCategory(true)   

  }


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

      <h1>{newTicketInfo.name}</h1>

      <div className="priceTicket">
        <img width={"auto"} height={"100%"} src={imageUploadedUrl} />
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
      
      {category && <Category newTicketInfo={newTicketInfo}/>}
    </div>
  );
};

export default TicketForm;
