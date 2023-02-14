import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {GrinvoiceContext} from '../context/GrinvoiceContext'
import TicketForm from "./TicketForm";
import jwt_decode from "jwt-decode";


const CreateNewTicket = () => {
    const {value3} = useContext(GrinvoiceContext);
    const [base_url, setBase_url] = value3
    const [title, setTitle] = useState ('')
    const [image, setImage] = useState(null)
    const [newTicketInfo, setNewTicketInfo] = useState(null)
    const {value4} = useContext(GrinvoiceContext);
    const [ticketForm, setTicketForm] = value4
    const [ticket, setTicket] = useState()
        
    //decoder user TOKEN
    const [details, setDetails] = useState({
      id : "",      name: "",      email: "",
    });
  
    useEffect(() => {
      //i will create a component with useContext for Profile,
      //so don't need to repeat the code each time (token)

      getProfil();
      
    }, []);
  
    const getProfil = async  () => {
      const token = await localStorage.usertoken;
      const decoded = await jwt_decode(token);
      setDetails({
        id : decoded.user._id,
        name: decoded.user.name,
        email: decoded.user.email,
      })
  
    };
    
    const postImageAndTitle = (e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append('title', title)
      formData.append('image', image)
      formData.append('ticketHolder', details.id)
      
      const token = localStorage.getItem('usertoken')

  
      axios.post(`${base_url}/tickets`, formData, {
        headers : { 
          'auth-token': token,
          'content-type' : 'multipart/form-data'                   
        }
      })
      .then(response => {
         
        setNewTicketInfo(response.data) 
      })
      .catch(err => console.log(err))
    }

 
  return (
    <>
       
      <form onSubmit={postImageAndTitle} style={{display: 'flex', alignItems:'center'}}>

        <label htmlFor="ticket"><img src={require("../assets/uploadIcon.png")} width="100" /></label>

        <div style={{display: 'flex', flexDirection:'column',height:'100%'}}>

          <span><b> Ticket name :</b></span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input type="file" id="ticket" style={{display:'none'}} onChange={(e) => setImage(e.target.files[0])} />
          <button type="submit" onClick={() => (setTicketForm(true))}>Submit</button>
        </div>

      </form>
   
      {newTicketInfo && ticketForm && <TicketForm newTicketInfo={newTicketInfo} imageUploadedUrl={`${base_url}${newTicketInfo.image}`}/>}
    </>
  ); 
};

export default CreateNewTicket;
