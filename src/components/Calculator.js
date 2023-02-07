import React, { useState, useContext } from "react";
import "../css/calculator.css";
import { GrinvoiceContext } from "../context/GrinvoiceContext";

const Calculator = () => {
  const { value5 } = useContext(GrinvoiceContext);
  const [price, setPrice] = value5;

  const addOne = () => {
    price.length <= 7 && setPrice(price == 0 ? "1" : `${price}1`);
  };

  const addTwo = () => {
    price.length <= 7 && setPrice(price == 0 ? "2" : `${price}2`);
  };
  const addThree = () => {
    price.length <= 7 && setPrice(price == 0 ? "3" : `${price}3`);
  };
  const addFour = () => {
    price.length <= 7 &&   setPrice(price == 0 ? "4" : `${price}4`);
  };
  const addFive = () => {
    price.length <= 7 &&  setPrice(price == 0 ? "5" : `${price}5`);
  };
  const addSix = () => {
    price.length <= 7 &&   setPrice(price == 0 ? "6" : `${price}6`);
  };
  const addSeven = () => {
    price.length <= 7 && setPrice(price == 0 ? "7" : `${price}7`);
  };
  const addEight = () => {
    price.length <= 7 &&  setPrice(price == 0 ? "8" : `${price}8`);
  };

  const addNine = () => {
    price.length <= 7 &&  setPrice(price == 0 ? "9" : `${price}9`);
  };
  const deleteLastOne = () => {
    price.length <= 7 &&  setPrice(price.slice(0, -1) || "0");
  };
  const addZero = () => {
    price.length <= 7 &&   setPrice(price == 0 ? "0" : `${price}0`);
  };
  const add2Zero = () => {
    price.length <= 7 &&  setPrice(price == 0 ? "0" : `${price}00`);
  };
  const addDot = () => {
    if (price.includes('.')) { 
        console.log('dot exist already')
    } else {
      price.length <= 7 &&  setPrice(price == 0 || price.includes('.') ? "0" : `${price}.`)
    }      
  };
  
  return (
    <>
      <div className="Calculator">
        <button onClick={addOne}> 1</button>
        <button onClick={addTwo}> 2</button>
        <button onClick={addThree}> 3</button>
        <button onClick={addFour}> 4</button>
        <button onClick={addFive}> 5</button>
        <button onClick={addSix}> 6</button>
        <button onClick={addSeven}> 7</button>
        <button onClick={addEight}> 8</button>
        <button onClick={addNine}> 9</button>
        <button onClick={addDot}> . </button>
        <button onClick={addZero}> 0</button>

        <button onClick={add2Zero}>00</button>
      </div>
    </>
  );
};

export default Calculator;
