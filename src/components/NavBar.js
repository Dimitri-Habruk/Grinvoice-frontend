import React, { useContext, useState } from "react";
import '../css/navBar.css'
import { Link } from "react-router-dom";
import Filter from "./Filter";
import {GrinvoiceContext} from '../context/GrinvoiceContext'
import Options from "./Options";

const NavBar = () => {
  const {value1, value2} = useContext(GrinvoiceContext);
    
    const [filter, setFilter] = value1
    const [options, setOptions] = value2



    const showFilter =()=>{
        setFilter(!filter)
    }
    const showMore =()=>{
        setOptions(!options)
    }


  return (
    <>
    {filter&& <Filter/>}
    {options && <Options />}
      <div className="navBar">
      
       <button onClick={()=>showFilter()}> <img  className='iconNavBar' src={require("../assets/filterIcon.png")} alt="photoIcon" /> </button>
        <Link to='/home'> <h1 className="navbarTitle">Grinvoice</h1></Link>
       <button> <img className='iconNavBar' src={require("../assets/searchIcon.png")} alt="photoIcon" /> </button>
       <button onClick={()=>showMore()}> <img className='iconNavBar' src={require("../assets/moreIcon.png")} alt="photoIcon" /> </button>


      </div>
    </>
  );
};

export default NavBar;
