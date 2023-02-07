import { useState } from "react";
import arrowDown from '../assets/arrowDownIcon.png'

const AllCategories = () => {

    const [categories, setCategories] = useState ([
        {
          categoryName: "market",
          image: require("../assets/sportCategory.png"),
          // tickets :
        },
        {
          categoryName: "sport",
          image: require("../assets/marketCategory.png"),
          // tickets :
        }])
  return (
    <div style={{background:'pink', width: '50%', height: '200px'}}>
      <h1 >azeazezeaezaezazezae</h1>


    {categories.map(elem => {
        return <div style={{width: '100%', border:'black solid 1px', display:'flex', justifyContent:'space-around'}}>
            <button style={{width: '15%'}}><img src={arrowDown} style={{width: '100%'}} alt="" /> </button>
            <img src={elem.image} style={{width: '15%'}} alt="" />
            <h3>{elem.categoryName}</h3>
            <h3 style={{color:'brown'}}> 123 dollars</h3>
        </div>


    })}

    </div>
  );
};

export default AllCategories;
