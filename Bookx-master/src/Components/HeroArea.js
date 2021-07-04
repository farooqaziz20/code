import React from 'react'

const HeroArea = () => {
    return (
        <div id="hero-area">
<div className="overlay"></div>
<div className="container">
<div className="row">
<div className="col-md-12 col-lg-12 col-xs-12 text-center">
<div className="contents">
<h1 className="head-title">Welcome to <span className="year">ClassiXER</span></h1>
<p>Buy And Sell Everything From Used Cars To Mobile Phones And Computers, <br/> Or Search For Property, Jobs And More</p>
<div className="search-bar">
<div className="search-inner">
<form className="search-form">
<div className="form-group inputwithicon">
<i className="lni-tag"></i>
<input type="text" name="customword" className="form-control" placeholder="Enter Product Keyword" />
</div>
<div className="form-group inputwithicon">
<i className="lni-map-marker"></i>
<div className="select">
<select>
<option value="none">Locations</option>
<option value="none">New York</option>
<option value="none">California</option>
<option value="none">Washington</option>
<option value="none">Birmingham</option>
<option value="none">Chicago</option>
<option value="none">Phoenix</option>
</select>
</div>
</div>
<div className="form-group inputwithicon">
<i className="lni-menu"></i>
<div className="select">
<select>
<option value="none">Categories</option>
<option value="none">Jobs</option>
<option value="none">Electronics</option>
<option value="none">Mobile</option>
<option value="none">Training</option>
<option value="none">Pets</option>
<option value="none">Real Estate</option>
<option value="none">Services</option>
<option value="none">Training</option>
<option value="none">Vehicles</option>
</select>
</div>
</div>
<button className="btn btn-common" type="button"><i className="lni-search"></i> Search Now</button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
 </div>
    )
}

export default HeroArea
