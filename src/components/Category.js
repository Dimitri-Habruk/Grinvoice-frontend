import React, { useContext, useState } from "react";
import "../css/categories.css";
import { GrinvoiceContext } from "../context/GrinvoiceContext";
import axios from "axios";
import { CategoryButton } from "./CategoryButton";

const Category = ({ newTicketInfo }) => {
  const { value4, value3, value5 } = useContext(GrinvoiceContext);
  const [base_url, setBase_url] = value3;
  const [price, setPrice] = value5;
  const [cancel, setCancel] = value4;
  const [categories, setCategories] = useState([
    {
      categoryName: "market",
      image: require("../assets/sportCategory.png"),
    },
    {
      categoryName: "sport",
      image: require("../assets/marketCategory.png"),
    },
    {
      categoryName: "animals",
      image: require("../assets/animalsCategory.png"),
    },
    {
      categoryName: "restaurent",
      image: require("../assets/restaurentCategory.png"),
    },
    {
      categoryName: "car",
      image: require("../assets/carCategory.png"),
    },
    {
      categoryName: "health",
      image: require("../assets/healthCategory.png"),
    },
    {
      categoryName: "clothes",
      image: require("../assets/clothesCategory.png"),
    },
    {
      categoryName: "home",
      image: require("../assets/homeCategory.png"),
    },
    {
      categoryName: "transport",
      image: require("../assets/transportCategory.png"),
    },
  ]);

  const addAmountAndCategory = (categoryName) => {
    const token = localStorage.getItem("usertoken");

    const form = {
      amount: price,
      category: categoryName,
    };
    var config = {
      method: "put",
      url: `${base_url}/tickets/${newTicketInfo._id}`,
      headers: {
        "auth-token": token,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: form,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    setCancel(false);
    setPrice("0");
  };

  return (
    <>
      <div className="selecteCategoryForTicket">
      
       {categories.map((elem) => {
          return (
            <CategoryButton cat={elem} func={addAmountAndCategory} />
          );
        })}
      </div>
    </>
  );
};

export default Category;
