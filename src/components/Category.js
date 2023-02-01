import React from "react";
import '../css/navBar.css'
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="Category">
      
       <button> <img  className='iconNavBar' src={require("../assets/filterIcon.png")} alt="photoIcon" /> </button>
        <Link to='/home'> <h1 className="navbarTitle">Grinvoice</h1></Link>
       <button> <img className='iconNavBar' src={require("../assets/searchIcon.png")} alt="photoIcon" /> </button>
       <button> <img className='iconNavBar' src={require("../assets/moreIcon.png")} alt="photoIcon" /> </button>


      </div>
    </>
  );
};

export default Category;
