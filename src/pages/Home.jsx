import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/action/productAction";
import Card from "../components/Card";
import Category from "../components/Category";
import Carousel from "../components/Carousel";
import categoryImg1 from "../assets/images/Category T-Shirt.png";
import categoryImg2 from "../assets/images/Category Shorts.png";
import categoryImg3 from "../assets/images/Category Jacket.png";
import categoryImg4 from "../assets/images/Category Pants.png";
import categoryImg5 from "../assets/images/Category Shoes.png";
import categoryImg6 from "../assets/images/Category Glasses.png";
import Carousel1 from "../assets/images/Carrousel 1.png";
import Carousel2 from "../assets/images/Carrousel 2.png";
// import homeCSS from "../assets/css/style.module.css";

import cardImage from "../assets/images/Product Dummy.png";

const cardData2 = [
  {
    photo_path: cardImage,
    product_name: "Boy's suit - Black - White",
    product_price: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    photo_path: cardImage,
    product_name: "Boy's suit - Black - White",
    product_price: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    photo_path: cardImage,
    product_name: "Boy's suit - Black - White",
    product_price: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    photo_path: cardImage,
    product_name: "Boy's suit - Black - White",
    product_price: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    photo_path: cardImage,
    product_name: "Boy's suit - Black - White",
    product_price: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    photo_path: cardImage,
    product_name: "Boy's suit - Black - White",
    product_price: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    photo_path: cardImage,
    product_name: "Boy's suit - Black - White",
    product_price: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    photo_path: cardImage,
    product_name: "Boy's suit - Black - White",
    product_price: 40.0,
    cardStore: "Zalora Cloth",
  },
];

const categoryData = [
  {
    categoryName: "T-Shirt",
    categoryImg: categoryImg1,
    categoryColor: "#CC0B04",
  },

  {
    categoryName: "Shorts",
    categoryImg: categoryImg2,
    categoryColor: "#1c3391",
  },

  {
    categoryName: "Jacket",
    categoryImg: categoryImg3,
    categoryColor: "#f67b02",
  },

  {
    categoryName: "Pants",
    categoryImg: categoryImg4,
    categoryColor: "#e31f51",
  },
  {
    categoryName: "Shoes",
    categoryImg: categoryImg5,
    categoryColor: "#57cd9e",
  },

  {
    categoryName: "Glasses",
    categoryImg: categoryImg6,
    categoryColor: "#5086d8",
  },
];

const dataCarousel = [
  {
    carouselImg: Carousel1,
  },
  {
    carouselImg: Carousel1,
  },
  {
    carouselImg: Carousel1,
  },
  {
    carouselImg: Carousel2,
  },
];

function Home() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <main className="container pt-5 mt-5">
        <section className="row justify-content-center align-items-center mt-4">
          <div className="col-lg-8">
            <Carousel dataCarousel={dataCarousel} />
          </div>
        </section>
        <section className="mt-5">
          <h2 className="metropolis-b">Category</h2>
          <span>What are you looking for</span>
          <Category categoryData={categoryData} />
        </section>
        <section className="mt-5">
          <h2 className="metropolis-b">New</h2>
          <span>You've never seen it before</span>
          <Card cardData={product} />
        </section>
        <section className="mt-5">
          <h2 className="metropolis-b">Popular</h2>
          <span>Find clothes that are trending recently</span>
          <div className="row g-4 align-items-center">
            <Card cardData={cardData2} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
