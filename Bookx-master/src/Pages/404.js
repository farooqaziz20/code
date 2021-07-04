import React from 'react'
import background from '../Assets/images/banner1.jpg';

const ErroPage = () => {
    return (
<div>
<div className="page-header" style={{backgroundImage: `url(${background})`}}>
<div className="container">
<div className="row">
<div className="col-md-12">
<div className="breadcrumb-wrapper">
<h2 className="product-title">Page Not Found</h2>
<ol className="breadcrumb">
<li><a href="#">Home /</a></li>
<li className="current">Error 404</li>
</ol>
</div>
</div>
</div>
</div>
</div>

<div className="error section-padding">
<div className="container">
<div className="row justify-content-center">
<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
<div className="error-content">
<div className="error-message">
<h2>404</h2>
<h3><span>Ooooops!</span> Something Went Wrong...</h3>
</div>
{/* <form className="form-error-search">
<input type="search" name="search" className="form-control" placeholder="Search Here">
<button className="btn btn-common btn-search" type="button">Search Now</button>
</form>
<div className="description">
<span>Or Goto <a href="#">Homepage</a></span>
</div> */}
</div>
</div>
</div>
</div>
</div>

</div>
    )
}

export default ErroPage
