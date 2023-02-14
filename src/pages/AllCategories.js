import { useState } from "react";
import arrowDown from "../assets/arrowDownIcon.png";
import NavBar from "../components/NavBar";
import ViewAllTickets from "../components/ViewAllTickets";
import "../css/allcategories.css";

const AllCategories = () => {
  const [showThisCategory, setShowThisCategory] = useState(false);

  const [categories, setCategories] = useState([
    {
      categoryName: "Sport",
      image: require("../assets/sportCategory.png"),
    }
  ]);

  const allTicketsOfThisCategory = () => {
    setShowThisCategory(!showThisCategory);
  };


  return (
      <div className="backgroundIphone">
    <div className="allCategoriesContainer">
        <NavBar />
        <h1>Your tickets</h1>

        {categories.map((elem) => {
          return (
            <div >
              <div
                style={{
                  width: "100%",
                  border: "black solid 1px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <button
                  style={{
                    width: "15%",
                    transform: showThisCategory ? "rotate(180deg)" : "",
                  }}
                >
                  <img
                    src={arrowDown}
                    style={{ width: "100%" }}
                    alt=""
                    onClick={allTicketsOfThisCategory}
                  />                  
                </button>
                <img src={elem.image} style={{ width: "15%" }} alt="" />
                <h3>{elem.categoryName}</h3>
              </div>
              {showThisCategory && <ViewAllTickets props={categories} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCategories;
