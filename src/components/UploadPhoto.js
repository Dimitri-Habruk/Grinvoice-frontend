import axios from "axios";
import React, { useContext, useState } from "react";
import {GrinvoiceContext} from '../context/GrinvoiceContext'
import TicketForm from "./TicketForm";

const UploadPhoto = () => {
    const {value3} = useContext(GrinvoiceContext);
    const [base_url, setBase_url] = value3
    const [title, setTitle] = useState ('')
    const [image, setImage] = useState(null)
    const [data, setData] = useState(null)
    const {value4} = useContext(GrinvoiceContext);
    const [ticketForm, setTicketForm] = value4
    const [ticket, setTicket] = useState()
    

    const postImage = (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append('title', title)
      formData.append('image', image)
  
  
      axios.post(`${base_url}/tickets/admin`, formData, {
        headers : {
          'content-type' : 'multipart/form-data'
        }
      })
      .then(response => {
        // console.log(response.data)      
        setData(response.data) 
      })
      .catch(err => console.log(err))
    }

 
  return (
    <>
      {/* <button>
        <img className="photoImg" src={require("../assets/uploadIcon.png")}alt="photoIcon"/>
        <input type="file" /> Upload from PC/TEL
      </button> 
      
       onChange={postImage}   */}
 
      <form onSubmit={postImage}>
      <label for="ticket"><img src={require("../assets/uploadIcon.png")} width="100" /></label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="file" id="ticket" style={{display:'none'}} onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit" onClick={() => (setTicketForm(true))}>Submit</button>
      </form>

      
      {data && ticketForm && <TicketForm ticket={ticket} data={data} src={`${base_url}${data.image}`} />}
    </>
  ); 
};

export default UploadPhoto;
