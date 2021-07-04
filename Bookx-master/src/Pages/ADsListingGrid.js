import React from 'react'
import Img1 from '../Assets/images/featured-img1.jpg';
const ADsListingGrid = () => {
    return (
        <div className="main-container section-padding">
<div className="container">
<div className="row">
<div className="col-lg-3 col-md-12 col-xs-12 page-sidebar">
<aside>

<div className="widget_search">
<form role="search" id="search-form">
<input type="search" className="form-control" autoComplete="off" name="s" placeholder="Search..." id="search-input" value="" />
<button type="submit" id="search-submit" className="search-btn"><i className="lni-search"></i></button>
</form>
</div>

<div className="widget categories">
<h4 className="widget-title">All Categories</h4>
<ul className="categories-list">
<li>
<a href="#">
<i className="lni-dinner"></i>
Hotel &amp; Travels <span className="category-counter">(5)</span>
</a>
</li>
<li>
<a href="#">
<i className="lni-control-panel"></i>
Services <span className="category-counter">(8)</span>
</a>
</li>
<li>
<a href="#">
<i className="lni-github"></i>
Pets <span className="category-counter">(2)</span>
</a>
</li>
<li>
<a href="#">
<i className="lni-coffee-cup"></i>
Restaurants <span className="category-counter">(3)</span>
</a>
</li>
<li>
<a href="#">
<i className="lni-home"></i>
Real Estate <span className="category-counter">(4)</span>
</a>
</li>
<li>
<a href="#">
<i className="lni-pencil"></i>
Jobs <span className="category-counter">(5)</span>
</a>
</li>
 <li>
<a href="#">
<i className="lni-display"></i>
Electronics <span className="category-counter">(9)</span>
</a>
</li>
</ul>
</div>
<div className="widget">
<h4 className="widget-title">Advertisement</h4>
<div className="add-box">
<img className="img-fluid" src={Img1} alt="" />
</div>
</div>
</aside>
</div>
<div className="col-lg-9 col-md-12 col-xs-12 page-content">

<div className="product-filter">
<div className="short-name">
<span>Showing (1 - 12 products of 7371 products)</span>
</div>
<div className="Show-item">
<span>Show Items</span>
<form className="woocommerce-ordering" method="post">
<label>
<select name="order" className="orderby">
<option selected value="menu-order">49 items</option>
<option value="popularity">popularity</option>
<option value="popularity">Average ration</option>
<option value="popularity">newness</option>
<option value="popularity">price</option>
</select>
</label>
</form>
</div>
<ul className="nav nav-tabs">
<li className="nav-item">
<a className="nav-link active" data-toggle="tab" href="#grid-view"><i className="lni-grid"></i></a>
</li>
<li className="nav-item">
<a className="nav-link" data-toggle="tab" href="#list-view"><i className="lni-list"></i></a>
</li>
</ul>
</div>


<div className="adds-wrapper">
<div className="tab-content">
<div id="grid-view" className="tab-pane fade active show">
<div className="row">
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
<div className="featured-box">
<figure>
<div className="icon">
<i className="lni-heart"></i>
</div>
<a href="#"><img className="img-fluid"  src={Img1} alt="" /></a>
</figure>
<div className="feature-content">
<div className="product">
<a href="#"><i className="lni-folder"></i> Mobile Phones</a>
</div>
<h4><a href="ads-details.html">Apple iPhone X</a></h4>
<span>Last Updated: 3 hours ago</span>
<ul className="address">
<li>
<a href="#"><i className="lni-map-marker"></i> Avenue C, US</a>
</li>
<li>
<a href="#"><i className="lni-alarm-clock"></i> Feb 18, 2018</a>
</li>
<li>
<a href="#"><i className="lni-user"></i> Maria Barlow</a>
</li>
<li>
<a href="#"><i className="lni-package"></i> Used</a>
</li>
</ul>
<div className="listing-bottom">
<h3 className="price float-left">$200.00</h3>
<a href="account-myads.html" className="btn-verified float-right"><i className="lni-check-box"></i> Verified Ad</a>
</div>
</div>
</div>
</div>
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
<div className="featured-box">
<figure>
<div className="icon">
<i className="lni-heart"></i>
</div>
<a href="#"><img className="img-fluid"  src={Img1} alt="" /></a>
</figure>
<div className="feature-content">
<div className="product">
<a href="#"><i className="lni-folder"></i> Real Estate</a>
</div>
<h4><a href="ads-details.html">Amazing Room for Rent</a></h4>
<span>Last Updated: 4 hours ago</span>
<ul className="address">
<li>
<a href="#"><i className="lni-map-marker"></i> Dallas, Washington</a>
</li>
<li>
<a href="#"><i className="lni-alarm-clock"></i> Jan 7, 2018</a>
</li>
<li>
<a href="#"><i className="lni-user"></i> John Smith</a>
</li>
<li>
<a href="#"><i className="lni-package"></i> Used</a>
</li>
</ul>
<div className="listing-bottom">
<h3 className="price float-left">$450.00</h3>
</div>
</div>
</div>
</div>
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
<div className="featured-box">
<figure>
<div className="icon">
<i className="lni-heart"></i>
</div>
<a href="#"><img className="img-fluid"  src={Img1} alt="" /></a>
</figure>
<div className="feature-content">
<div className="product">
<a href="#"><i className="lni-folder"></i> Electronics</a>
</div>
<h4><a href="ads-details.html">Canon SX Powershot D-SLR</a></h4>
<span>Last Updated: 4 hours ago</span>
<ul className="address">
<li>
<a href="#"><i className="lni-map-marker"></i> Dallas, Washington</a>
</li>
<li>
<a href="#"><i className="lni-alarm-clock"></i> Mar 18, 2018</a>
</li>
<li>
<a href="#"><i className="lni-user"></i> David Givens</a>
</li>
<li>
<a href="#"><i className="lni-package"></i> Used</a>
</li>
</ul>
<div className="listing-bottom">
<h3 className="price float-left">$700.00</h3>
</div>
</div>
</div>
</div>
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
<div className="featured-box">
<figure>
<div className="icon">
<i className="lni-heart"></i>
</div>
<a href="#"><img className="img-fluid"  src={Img1} alt="" /></a>
</figure>
<div className="feature-content">
<div className="product">
<a href="#"><i className="lni-folder"></i> Vehicles</a>
</div>
 <h4><a href="ads-details.html">BMW 5 Series GT Car</a></h4>
<span>Last Updated: 5 hours ago</span>
<ul className="address">
<li>
<a href="#"><i className="lni-map-marker"></i> Dallas, Washington</a>
</li>
<li>
<a href="#"><i className="lni-alarm-clock"></i> Dec 18, 2018</a>
</li>
<li>
<a href="#"><i className="lni-user"></i> Elon Musk</a>
</li>
<li>
<a href="#"><i className="lni-package"></i> N/A</a>
</li>
</ul>
<div className="listing-bottom">
<h3 className="price float-left">$300.00</h3>
<a href="account-myads.html" className="btn-verified float-right"><i className="lni-check-box"></i> Verified Ad</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="list-view" className="tab-pane fade">
<div className="row">
<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
<div className="featured-box">
<figure>
<div className="icon">
<i className="lni-heart"></i>
</div>
<a href="#"><img className="img-fluid"  src={Img1} alt="" /></a>
</figure>
<div className="feature-content">
<div className="product">
<a href="#"><i className="lni-folder"></i> Apple</a>
</div>
<h4><a href="ads-details.html">Apple Macbook Pro 13 Inch</a></h4>
<span>Last Updated: 4 hours ago</span>
<ul className="address">
<li>
<a href="#"><i className="lni-map-marker"></i>Louis, Missouri, US</a>
</li>
<li>
<a href="#"><i className="lni-alarm-clock"></i> May 18, 2018</a>
</li>
<li>
<a href="#"><i className="lni-user"></i> Will Ernest</a>
</li>
<li>
<a href="#"><i className="lni-package"></i> Brand New</a>
</li>
</ul>
<div className="listing-bottom">
<h3 className="price float-left">$450.00</h3>
<a href="account-myads.html" className="btn-verified float-right"><i className="lni-check-box"></i> Verified Ad</a>
</div>
</div>
</div>
</div>
<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
<div className="featured-box">
<figure>
<div className="icon">
<i className="lni-heart"></i>
</div>
<a href="#"><img className="img-fluid"  src={Img1} alt="" /></a>
</figure>
<div className="feature-content">
<div className="product">
<a href="#"><i className="lni-folder"></i> Restaurant</a>
</div>
<h4><a href="ads-details.html">Cream Restaurant</a></h4>
<span>Last Updated: 4 hours ago</span>
<ul className="address">
 <li>
<a href="#"><i className="lni-map-marker"></i> Dallas, Washington</a>
</li>
<li>
<a href="#"><i className="lni-alarm-clock"></i> Feb 18, 2018</a>
</li>
<li>
<a href="#"><i className="lni-user"></i> Samuel Palmer</a>
</li>
<li>
<a href="#"><i className="lni-package"></i> Brand New</a>
</li>
</ul>
<div className="listing-bottom">
<h3 className="price float-left">$250.00</h3>
<a href="account-myads.html" className="btn-verified float-right"><i className="lni-check-box"></i> Verified Ad</a>
</div>
</div>
</div>
</div>
<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
<div className="featured-box">
<figure>
<div className="icon">
<i className="lni-heart"></i>
</div>
<a href="#"><img className="img-fluid"  src={Img1} alt="" /></a>
</figure>
<div className="feature-content">
<div className="product">
<a href="#"><i className="lni-folder"></i> Electronics</a>
</div>
<h4><a href="ads-details.html">Canon SX Powershot D-SLR</a></h4>
<span>Last Updated: 4 hours ago</span>
<ul className="address">
<li>
<a href="#"><i className="lni-map-marker"></i> Dallas, Washington</a>
</li>
<li>
<a href="#"><i className="lni-alarm-clock"></i> Mar 18, 2018</a>
</li>
<li>
<a href="#"><i className="lni-user"></i> David Givens</a>
</li>
<li>
<a href="#"><i className="lni-package"></i> Used</a>
</li>
</ul>
<div className="listing-bottom">
<h3 className="price float-left">$700.00</h3>
</div>
</div>
</div>
</div>
<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
<div className="featured-box">
<figure>
<div className="icon">
<i className="lni-heart"></i>
</div>
<a href="#"><img className="img-fluid"  src={Img1} alt="" /></a>
</figure>
<div className="feature-content">
<div className="product">
<a href="#"><i className="lni-folder"></i> Real Estate</a>
</div>
<h4><a href="ads-details.html">Amazing Room for Rent</a></h4>
<span>Last Updated: 4 hours ago</span>
<ul className="address">
<li>
<a href="#"><i className="lni-map-marker"></i> Dallas, Washington</a>
</li>
<li>
<a href="#"><i className="lni-alarm-clock"></i> Jan 7, 2018</a>
</li>
<li>
<a href="#"><i className="lni-user"></i> John Smith</a>
</li>
 <li>
<a href="#"><i className="lni-package"></i> Used</a>
</li>
</ul>
<div className="listing-bottom">
<h3 className="price float-left">$450.00</h3>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<div className="pagination-bar">
<nav>
<ul className="pagination justify-content-center">
<li className="page-item"><a className="page-link active" href="#">1</a></li>
<li className="page-item"><a className="page-link" href="#">2</a></li>
<li className="page-item"><a className="page-link" href="#">3</a></li>
<li className="page-item"><a className="page-link" href="#">Next</a></li>
</ul>
</nav>
</div>

</div>
</div>
</div>
</div>

    )
}

export default ADsListingGrid
