import React from "react";
import categoryCSS from "../assets/css/category.module.css";

function Category({ categoryData }) {
  return (
    <>
      <div className="row g-3">
        {categoryData.map((data, index) => {
          return (
            <div key={index.toString()} className="col-lg-3 col-xxl-2 col-6">
              <div
                className={`${categoryCSS.categoryItem} d-flex justify-content-center align-items-center rounded-3`}
                style={{ backgroundColor: `${data.categoryColor}` }}
              >
                <img src={data.categoryImg} alt="" />
                <span className="position-absolute">{data.categoryName}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Category;
