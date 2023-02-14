import axios from "axios";
import { useContext, useState } from "react";
import { GrinvoiceContext } from "../context/GrinvoiceContext";

const ViewAllTickets = (props) => {
  const [tickets, setTickets] = useState([]);
  const { value3 } = useContext(GrinvoiceContext);
  const [updateTime, setUpdateTime] = useState(1);
  const [base_url, setBase_url] = value3;
  const token = localStorage.getItem("usertoken");

  const getTickets = async () => {
    axios
      .get(`${base_url}/tickets/alltickets/user`, {
        headers: {
          "auth-token": token,
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        setTickets(res.data);
      });
  };

  const deleteTicket = (id) => {
    axios
      .delete(`${base_url}/tickets/${id}`, {
        headers: {
          "auth-token": token,
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        getTickets();
      });
  };

  const editTicket = (id) => {
    setUpdateTime(updateTime + 1);
    
    const newTitle = {
        title: `title was UPDATE ${updateTime} times`,
    };

    var config = {
        method: "put",
        url: `${base_url}/tickets/${id}`,
        headers: {
          "auth-token": token,
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: newTitle,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
        
    });
    getTickets();
}

  return (
    <div style={{height:'540px', overflowY: 'scroll', borderBottomRightRadius:'45px',borderBottomLeftRadius:'45px'}}>
      <button onClick={getTickets}>
        {tickets.length > 1 ? `YOU have : ${tickets.length} tickets` : "Show tickets"}

      </button>


      {tickets.map((elem, index) => {
        return (
          <div style={{display:'flex'}} key={index}>
            <img src={`${base_url}${elem.image}`} width="60" />
            <h5>Title :''{elem.title}'' </h5>
            <button onClick={() => editTicket(elem._id)}>
              change Title
            </button>
            <h4>amount is :{elem.amount} </h4>
            <button onClick={() => deleteTicket(elem._id)}>
              Detele this ticket
            </button>
          </div>
        )
      })}
    </div>
  );
};
export default ViewAllTickets;
