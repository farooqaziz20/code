import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Img1 from '../Assets/images/featured-img1.jpg';
import { app } from ".././config/firebase";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  filterProduct,
  allProducts,
} from "../store/actions/useAction";

const db = app.firestore();

const Products = () => {
  const [product, setProduct] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const { data } = useSelector((state) => state.userReducer);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(setLoading));
  }, []);

  // useEffect(()=>{
  //   const ctaFetchHandler=async ()=>{
  //     try{
  //       let data=await db.collection("noman").get();
  //       let students=[];
  //       data.forEach((doc)=>{
  //         console.log("id",doc.id)
  //         students.push({...doc.data(),docId:doc.id});
  //       })
  //       console.log("data",students);
  //       setProduct(students)
  //     }
  //     catch(err){
  //       console.log(err)
  //     }
  //   }
  //   ctaFetchHandler();
  // },[setProduct])

  //   const filterItem = (categItem) => {
  //      const updatedItems = product.filter((curElem) => {
  //             return curElem.category === categItem;
  //         });

  //         setProduct(updatedItems);

  // }

  return (
    <div>
      <section className="categories-icon section-padding bg-drack">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="section-title">Categories</h1>
            </div>

            <div className="col-lg-1"></div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
              <div
                className="icon-box"
                onClick={() => dispatch(filterProduct("TextBook"))}
              >
                <div className="icon">
                  <i class="lni lni-graduation"></i>
                </div>
                <h4>Textbooks</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
              <div
                className="icon-box"
                onClick={() => dispatch(filterProduct("Novel"))}
              >
                <div className="icon">
                  <i class="lni lni-pencil"></i>
                </div>
                <h4>Novels</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
              <div
                className="icon-box"
                onClick={() => dispatch(filterProduct("Magazine"))}
              >
                <div className="icon">
                  <i className="lni-book"></i>
                </div>
                <h4>Magazines</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
              <div
                className="icon-box"
                onClick={() => dispatch(filterProduct("Lectures"))}
              >
                <div className="icon">
                  <i class="lni lni-pencil-alt"></i>
                </div>
                <h4>Lecture Notes</h4>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
              <div
                className="icon-box"
                onClick={() => dispatch(allProducts(setLoading))}
              >
                <div className="icon">
                  <i className="lni-layers"></i>
                </div>
                <h4>All ADs</h4>
              </div>
            </div>

            <div className="col-lg-1"></div>
          </div>
        </div>
      </section>

      {/* <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="icon-box">
                    <div className="icon">
                      <i class="lni lni-graduation"></i>
                    </div>
                    <button className="btn btn-warning" onClick={()=>dispatch(filterProduct('TextBook'))}>Textbooks</button>
                  </div>
              </div>
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="icon-box">
                    <div className="icon">
                      <i class="lni lni-heart"></i>
                    </div>
                    <button className="btn btn-warning" onClick={()=>dispatch(filterProduct('Novel'))}>Novels</button>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="lni-book"></i>
                    </div>
                    <button className="btn btn-warning" onClick={()=>dispatch(filterProduct('Magazine'))}>Magazines</button>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="lni-video"></i>
                    </div>
                    <button className="btn btn-warning" onClick={()=>dispatch(filterProduct('Lectures'))}>Lectures</button>
                  </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="lni-video"></i>
                    </div>
                    <button className="btn btn-warning" onClick={()=>dispatch(allProducts(setLoading))}>All</button>
                  </div>
              </div>
              
            </div>
          </div> */}

      <div className="container section-padding">
        <h1 className="section-title">Latest Products</h1>
        <div className="row">
          {data.map((products) => (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
              <div className="featured-box">
                <figure>
                  {/* <a href="/product-details"> */}
                  <img
                    className="img-responsive mx-auto d-block"
                    src={products.avatar}
                    alt=""
                    height="200px"
                    width="200px"
                  />
                  {/* </a> */}
                </figure>
                <div className="feature-content">
                  <div className="product">
                    <i className="lni-folder"></i> {products.category}
                  </div>
                  <h4>{products.title}</h4>

                  <ul className="address">
                    <li>
                      <i className="lni-map-marker"></i> {products.location}
                    </li>
                    <li>
                      <i className="lni-mobile"></i> {products.phone}
                    </li>
                    <li>
                      <i className="lni-package"></i> {products.province}
                    </li>
                    <li>
                      <i className="lni-user"></i> {products.fullName}
                    </li>
                  </ul>
                  <div className="listing-bottom">
                    <h3 className="price float-left">Rs. {products.price}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Products;
