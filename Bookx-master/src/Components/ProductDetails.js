import React from "react";
import background from "../Assets/images/banner1.jpg";
import  { useEffect, useState } from "react";
import Img1 from "../Assets/images/product-img1.jpg";
import Img2 from "../Assets/images/product-img2.jpg";
import Img3 from "../Assets/images/product-img3.jpg";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useHistory } from "react-router-dom";
import { app } from ".././config/firebase";
import LogoutNavbar from "../Components/LogoutNavbar";
const db = app.firestore();
const ProductDetails = () => {
  var loggedUser=JSON.parse( localStorage.getItem('signin')??[]);
  var logedrusernmae=(!(loggedUser.name==null||loggedUser.name==""))?loggedUser.name:"My Account";
  var flag=(loggedUser.name==null||loggedUser.name=="")?false:true;
  let navbar;

  if (!flag) {
    navbar =<Navbar/>;
  } else {
    navbar = <LogoutNavbar/>;
  }
  const { id } = useParams();
  const [getData, setData] = useState({});
  const history = useHistory();

  const [fileUrls, setFileUrls] = useState(null);
  const [titles, setTitles] = useState("");
  const [categorys, setCategorys] = useState("");
  const [types, setTypes] = useState("");
  const [prices, setPrices] = useState("");
  const [fullNames, setFullNames] = useState("");
  const [phones, setPhones] = useState("");
  const [descs, setDescs] = useState("");
  const [provinces, setProvinces] = useState("");
  const [locations, setLocations] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await db.collection("ads").doc(id).get();
      console.log(res.data());
      setData(res.data());
      console.log(res.data());
      setFileUrls(res.data().avatar);
      setTitles(res.data().title);
      setCategorys(res.data().category);
      setTypes(res.data().type);
      setPrices(res.data().price);
      setFullNames(res.data().fullName);
      setPhones(res.data().phone);
      setDescs(res.data().desc);
      setProvinces(res.data().province);
      setLocations(res.data().location);
    };
    fetchData();
  }, []);
  return (
    <div>
    
   {navbar}
          <div className="page-header" style={{ backgroundImage: `url(${background})` }} >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-wrapper">
                <h2 className="product-title">AD Details</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="#">Home /</a>
                  </li>
                  <li className="current">AD-Details</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="section-padding">
      <div className="container">
        <div className="product-info row">
        <div className="col-lg-7 col-md-12 col-xs-12">
            <div className="details-box">
              <div className="ads-details-info">
              <img
                    className="img-responsive"
                    src={fileUrls}
                    alt=""
                    width="400px"
                 
                  />
               
               </div>
            </div>
          </div>
       
          <div className="col-lg-5 col-md-12 col-xs-12">
            <div className="details-box">
              <div className="ads-details-info">
            
                <h3>{titles}</h3>
                <h2>Price: {prices} PKR</h2>
                {/* <p className="mb-2">
                  Fetch AD Description Here:  <br></br>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum saepe suscipit debitis neque, laborum! Magni
                  ducimus suscipit modi.
                </p> */}
                <div className="details-meta">
                  {/* <span>
                    <a href="#">
                      <i className="lni-alarm-clock"></i> 7 Jan, 10:10 pm
                    </a>
                  </span> 
                  <span>
                    <a href="#">
                      <i className="lni-map-marker"></i> Fetch City Here
                    </a>
                  </span>
                   <span>
                    <a href="#">
                      <i className="lni-eye"></i> 299 View
                    </a>
                  </span> */}
                </div>
                {/* <h4 className="title-small mb-3">Specification:</h4>
                <ul className="list-specification">
                  <li>
                    <i className="lni-check-mark-circle"></i> 256GB PCIe flash
                    storage
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> 2.7 GHz dual-core
                    Intel Core i5
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> Turbo Boost up to
                    3.1GHz
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> Intel Iris
                    Graphics 6100
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> 8GB memory
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> 10 hour battery
                    life
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> 13.3" Retina
                    Display
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> 1 Year
                    international warranty
                  </li>
                </ul> */}
              </div>
              <ul className="advertisement mb-4">
                <li><br /><br />
                  <p>
                    <strong>
                      <i className="lni-folder"></i> Category : 
                    </strong>
                    <span className="pl-2">{categorys}</span>
                  </p>
                </li><br /><br />
                <li>
                  <p>
                    <strong>
                      <i className="lni-archive"></i> Type : 
                    </strong>
                   <span className="pl-2">{types}</span>
                  </p>
                </li>
                {/* <li>
                  <p>
                    <strong>
                      <i className="lni-package"></i> Brand:
                    </strong>{" "}
                    <a href="#">Apple</a>
                  </p>
                </li> */}
              </ul>
              <div className="ads-btn mb-4">
                <a href="#" className="btn btn-common">
                  <i className="lni-envelope"></i> Text 
                </a>
                <a href={"tel:"+phones} className="btn btn-common">
                  <i className="lni-phone-handset"></i> Call
                </a>
                <a href="#" className="btn btn-common">
                  <i className="lni-phone-handset"></i> Request
                </a>
              </div>
              {/* <div className="share">
                <span>Share: </span>
                <div className="social-link">
                  <a className="facebook" href="#">
                    <i className="lni-facebook-filled"></i>
                  </a>
                  <a className="twitter" href="#">
                    <i className="lni-twitter-filled"></i>
                  </a>
                  <a className="linkedin" href="#">
                    <i className="lni-linkedin-fill"></i>
                  </a>
                  <a className="google" href="#">
                    <i className="lni-google-plus"></i>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
       
        </div>

        <div className="description-info">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-xs-12">
              <div className="description">
                <h4>Description</h4>
                <p>
                {descs}
                </p>
               
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="short-info">
                <h4>Owner Info</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="lni-users"></i> {fullNames}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-printer"></i>  {phones}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-reply"></i>  {provinces}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-warning"></i> {locations}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;