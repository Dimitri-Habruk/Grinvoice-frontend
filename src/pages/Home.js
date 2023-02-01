import React, { useState } from "react";
import Category from "../components/Category";
import NavBar from "../components/NavBar";
import '../css/Home.css'
import uploadPhoto from '../assets/uploadIcon.png'

const Home = () => {
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
       <button> <img  className='detailsButton' src={require("../assets/threeLinesIcon.png")} alt="details" /> </button>
       <button> <p   className='detailsButtonText' >   Dépence en 'mois choisi'</p></button>
       <button> <img  className='detailsButton' src={require("../assets/threeLinesIcon.png")} alt="details" /> </button>


        </div>
        


          <div className="photoScanUpload">
          
          <input type="file" className="uploadInput" value=''/>
          <input type="submit" className="uploadInput2"/>

           {/* <img className='photoImg' src={require("../assets/photoIcon.png")} alt="photoIcon" /> */}

            {/* <button className="photoButton"> <img className='photoImg' src={require("../assets/photoIcon.png")} alt="photoIcon" /> </button>
            <button className="scanButton"> <img className='scanImg' src={require("../assets/scanIcon.png")} alt="scanIcon" /> </button>
            <button className="uploadButton"> <img  className='uploadImg' src={require("../assets/uploadIcon.png")} alt="uploadIcon" /> </button> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
