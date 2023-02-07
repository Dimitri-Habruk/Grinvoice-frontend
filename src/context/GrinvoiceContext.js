import {createContext, useState} from "react";

export const GrinvoiceContext = createContext();

export const GrinvoiceController = (props) => {

    const [filter, setFilter] = useState(false)
    const [options, setOptions] = useState(false)
    const [base_url, setBase_url] = useState('http://localhost:5000')
    const [ticketForm, setTicketForm] = useState(true)
    const [price, setPrice] = useState("0");


  return (
    <GrinvoiceContext.Provider
      value={{
        value1 : [filter, setFilter],
        value2 : [options, setOptions],
        value3 : [base_url, setBase_url],
        value4 : [ticketForm, setTicketForm],
        value5 : [price, setPrice],

        }}>
      
        {props.children}
      
    </GrinvoiceContext.Provider>
  );
};
