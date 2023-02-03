import '../css/ticketForm.css'
import {GrinvoiceContext} from '../context/GrinvoiceContext'
import React, { useContext, useState } from "react";

const TicketForm = ({data, src}) => {
    const {value4} = useContext(GrinvoiceContext);
    const [ticketForm, setTicketForm] = value4
    const dataFormat = new Date(data.date)
    const [price, setPrice] = useState(0)
    console.log(data.date)
    console.log(data.date)
    console.log(dataFormat)

    const ticketFormOff = () => {
        setTicketForm(false);
        //add delete photo from database if cancel upload
    };

  return (
    <div className="ticketForm">
    <button onClick={() => ticketFormOff()} style={{width:'50px', position:'absolute', top:'20px', left:'10px'}}><img
            className="photoCategories"
            src={require("../assets/cancelIcon.png")}
            style={{ width:'40px'}}
            alt="set categories"
    /> <span> cancel</span> </button>


{dataFormat.toLocaleDateString("en-US")}
    <div className='priceTicket'>
      {price}
    </div>
{//.toLocaleDateString("en-US")
}

    <h1>{data.name}</h1>
    <img width={"100px"} src={src} />

    </div>
  );
};

export default TicketForm;
