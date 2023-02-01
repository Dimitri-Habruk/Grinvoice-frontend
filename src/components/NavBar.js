import React, { useContext, useState } from "react";
import '../css/navBar.css'
import { Link } from "react-router-dom";
import Filter from "./Filter";
import {GrinvoiceContext} from '../context/GrinvoiceContext'

const NavBar = () => {
  const {value1} = useContext(GrinvoiceContext);
    
    const [filter, setFilter] = value1


    const showFilter =()=>{
        setFilter(!filter)
    console.log(filter)
    }
  return (
    <>
    {filter&& <Filter/>}
      <div className="navBar">
      
       <button onClick={()=>showFilter()}> <img  className='iconNavBar' src={require("../assets/filterIcon.png")} alt="photoIcon" /> </button>
        <Link to='/home'> <h1 className="navbarTitle">Grinvoice</h1></Link>
       <button> <img className='iconNavBar' src={require("../assets/searchIcon.png")} alt="photoIcon" /> </button>
       <button> <img className='iconNavBar' src={require("../assets/moreIcon.png")} alt="photoIcon" /> </button>


      </div>
    </>
  );
};

export default NavBar;
