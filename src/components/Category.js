import React, { useContext, useState } from "react";
import '../css/categories.css'
import { GrinvoiceContext } from "../context/GrinvoiceContext";
import axios from "axios";


const Category = ({data}) => {
  const { value4,value3, value5 } = useContext(GrinvoiceContext);
  const [base_url, setBase_url] = value3
  const [price, setPrice] = value5;
  const [cancel, setCancel] = value4;
  const [categories, setCategories] = useState([
    {
      categoryName: "market",
      image: require("../assets/sportCategory.png"),
      // tickets :
    },
    {
      categoryName: "sport",
      image: require("../assets/marketCategory.png"),
      // tickets :
    },
    {
      categoryName: "animals",
      image: require("../assets/animalsCategory.png"),
      // tickets :
    },
    {
      categoryName: "restaurent",
      image: require("../assets/restaurentCategory.png"),
      // tickets :
    },
    {
      categoryName: "car",
      image: require("../assets/carCategory.png"),
      // tickets :
    },
    {
      categoryName: "health",
      image: require("../assets/healthCategory.png"),
      // tickets :
    },
    {
      categoryName: "clothes",
      image: require("../assets/clothesCategory.png"),
      // tickets :
    },
    {
      categoryName: "home",
      image: require("../assets/homeCategory.png"),
      // tickets :
    },
    {
      categoryName: "transport",
      image: require("../assets/transportCategory.png"),
      // tickets :
    },    
  ]);

const postFullTicket =(categoryName) =>{
  console.log(`${base_url}/tickets/admin/${data._id}`)
    // setTicketForm(false);
    //add delete photo from database if cancel upload
    //add delete amount (prérempli)from price in Category.js
  axios.put(`${base_url}/tickets/admin/${data._id}`, {
  category: categoryName,
  amount: price
  })
  .catch(err => console.log(err))
  setCancel(false)
}

  return (
    <>
      <div className="allCategories">
        {/* <button> <img  className='iconNavBar' src={require("../assets/filterIcon.png")} alt="photoIcon" /> </button>
       <button> <img className='iconNavBar' src={require("../assets/searchIcon.png")} alt="photoIcon" /> </button>
       <button> <img className='iconNavBar' src={require("../assets/moreIcon.png")} alt="photoIcon" /> </button> */}
        {categories.map((elem) => {
          return <div className="eachCategory"> 
          <button onClick={()=> {
            // setCategoyName(elem.categoryName)
            postFullTicket(elem.categoryName)
            }} >
            <img className="imageCategory" src={elem.image} alt="photoIcon" />
            <h3 style={{color:'black'}}>{elem.categoryName}</h3>
            {console.log(elem.image)}
          
          </button>

          </div>;
        })}
        
      </div>
    </>
  );
};

export default Category;
