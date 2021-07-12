import React from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import Services from "../Components/Services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Books from "../Categories/Books";
import Navbar from "../Components/Navbar";
import ProductDetails from "../Components/ProductDetails";
const ProductDetailsPage = () => {
  return (
          <div>
                    <Navbar/>

   
      {/* <Categories /> */}
      <ProductDetails />
     
    </div>


  );
};

export default ProductDetailsPage;
