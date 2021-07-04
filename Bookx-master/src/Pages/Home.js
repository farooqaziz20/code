import React from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import Services from "../Components/Services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Books from "../Categories/Books";
const Index = () => {
  return (
          <div>
      <Header />
      {/* <Categories /> */}
      <Products />
      <Services />
    </div>


  );
};

export default Index;
