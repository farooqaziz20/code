import React from "react";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import Services from "../Components/Services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Books from "../Categories/Books";
import Navbar from "../Components/Navbar";
import LogoutNavbar from "../Components/LogoutNavbar";
const Index = () => {
  var loggedUser=JSON.parse( localStorage.getItem('signin')??[]);
  var logedrusernmae=(!(loggedUser.name==null||loggedUser.name==""))?loggedUser.name:"My Account";
  var flag=(loggedUser.name==null||loggedUser.name=="")?false:true;
  let navbar;

  if (!flag) {
    navbar =<Navbar/>;
  } else {
    navbar = <LogoutNavbar/>;
  }
  return (
          <div>
          
          {navbar}

      <Header />
      {/* <Categories /> */}
      <Products />
      <Services />
    </div>


  );
};

export default Index;
