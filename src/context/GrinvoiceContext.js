import {createContext, useState} from "react";

export const GrinvoiceContext = createContext();

export const GrinvoiceController = (props) => {

    const [filter, setFilter] = useState(false)


  return (
    <GrinvoiceContext.Provider
      value={{value1 : [filter, setFilter]}}>
      
        {/*value2: [isLoading, setIsLoading],
        value3: [isActive, setActive],*/}
        {props.children}
      
    </GrinvoiceContext.Provider>
  );
};
