import React from 'react'

export const CategoryButton = ({cat, func}) => {

    
  return (
    <div className="eachCategory">
              <button
                onClick={() => {
                  func(cat.categoryName);
                }}
              >
                <img
                  className="imageCategory"
                  src={cat.image}
                  alt="photoIcon"
                />
                <h3 style={{ color: "black" }}>{cat.categoryName}</h3>
              </button>
            </div>
  )
}
