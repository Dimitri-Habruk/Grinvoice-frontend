import {createContext, useState} from "react";

export const GrinvoiceContext = createContext();

export const GrinvoiceController = (props) => {

    const [filter, setFilter] = useState(false)
    const [options, setOptions] = useState(false)
    const [base_url, setBase_url] = useState('http://localhost:5000')


  return (
    <GrinvoiceContext.Provider
      value={{
        value1 : [filter, setFilter],
        value2 : [options, setOptions],
        value3 : [base_url, setBase_url]
        }}>
      
        {/*value2: [isLoading, setIsLoading],
        value3: [isActive, setActive],*/}
        {props.children}
      
    </GrinvoiceContext.Provider>
  );
};
