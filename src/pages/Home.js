import React, { useContext, useRef, useState } from "react";
import Category from "../components/Category";
import NavBar from "../components/NavBar";
import '../css/Home.css'
import uploadPhoto from '../assets/uploadIcon.png'
import {GrinvoiceContext} from '../context/GrinvoiceContext'
import UploadPhoto from "../components/UploadPhoto";
import { Link } from "react-router-dom";


const Home = () => {

    const {value3} = useContext(GrinvoiceContext);
    const [base_url, setBase_url] = value3
    const [category, setCategory] = useState('')




  return (
    <>
        
      <div className="Home">
        <div className="workContain">
      <NavBar/>

          {/*
          ici je fais map chaque categorie qui contient qq chose, et j'affiche quand meme les categorie de base,
          meme si ils sont vides.
           {category.map(elem => {
            <Category />
          })}
          */}
          <div className="categories">
            <Link to='/allcategories'> <div className="categoryWrap"><img className='photoCategories' src={require("../assets/marketCategory.png")} alt="food categories" /></div></Link>
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
       <button  className="buttonDepence"> 
       <img  className='detailsButton' src={require("../assets/threeLinesIcon.png")} alt="details" />
        <span className='detailsButtonText' >   Dépence en 'mois choisi'</span>
       <img  className='detailsButton' src={require("../assets/threeLinesIcon.png")} alt="details" /> 
       </button>


        </div>
        


          <div className="photoScanUpload">
          {/* <button className="photoButton"> <img className='photoImg' src={require("../assets/photoIcon.png")} alt="photoIcon" /> </button> */}
            {/* <button className="scanButton"> <img className='scanImg' src={require("../assets/scanIcon.png")} alt="scanIcon" /> </button> */}
            {/* <button className="uploadButton"> <img  className='uploadImg' src={require("../assets/uploadIcon.png")} alt="uploadIcon" /> </button> */}
          
          <UploadPhoto />
          {/* <button>
          <img className='photoImg' src={require("../assets/uploadIcon.png")} alt="photoIcon" />
          <input type="file"/> Upload from PC/TEL
          </button> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
