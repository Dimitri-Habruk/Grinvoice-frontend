import React from "react";
import NavBar from "../components/NavBar";
import '../css/Home.css'
import CreateNewTicket from "../components/CreateNewTicket";
import { Link } from "react-router-dom";


const Home = () => {

  return (
    <div className="Home">

      <div className="workContain">
        <NavBar/>
        <div className="categories">
            <div className="categoryWrap"><img className='photoCategories' src={require("../assets/marketCategory.png")} alt="food categories" /></div>
            <div className="categoryWrap"><img className='photoCategories' src={require("../assets/animalsCategory.png")} alt="food categories" /></div>
            <div className="categoryWrap"><img className='photoCategories' src={require("../assets/restaurentCategory.png")} alt="food categories" /></div>
            <div className="categoryWrap"> <img className='photoCategories' src={require("../assets/carCategory.png")} alt="food categories" /></div>
            <div className="categoryWrap">  <img className='photoCategories' src={require("../assets/sportCategory.png")} alt="food categories" /></div>
            <div className="categoryWrap"> <img className='photoCategories' src={require("../assets/healthCategory.png")} alt="food categories" /></div>
            <div className="categoryWrap"> <img className='photoCategories' src={require("../assets/clothesCategory.png")} alt="food categories" /></div>
            <div className="categoryWrap"> <img className='photoCategories' src={require("../assets/homeCategory.png")} alt="food categories" /></div>
            <div className="categoryWrap">  <img className='photoCategories' src={require("../assets/transportCategory.png")} alt="food categories" /></div>
        </div>
      
        <div className="showTickets">
          <Link to='/allmytickets'><button  className="buttonDepence">
          <img  className='detailsButton' src={require("../assets/threeLinesIcon.png")} alt="details" />
          <span className='detailsButtonText' > Show my tickets</span>
          <img  className='detailsButton' src={require("../assets/threeLinesIcon.png")} alt="details" /> 
          </button> </Link>

          </div>
            <div className="photoScanUpload">
            <button className="photoButton"> <img className='photoImg' src={require("../assets/photoIcon.png")} alt="photoIcon" /> 
            </button>
            <button className="scanButton"> <img className='scanImg' src={require("../assets/scanIcon.png")} alt="scanIcon" /> 
            </button>
            <CreateNewTicket />
          </div>

        </div>
      </div>
    
  );
};

export default Home;
