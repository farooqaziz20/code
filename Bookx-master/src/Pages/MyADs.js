import React from 'react'
import ArtImg1 from '../Assets/images/art-img1.jpg';
import ArtImg2 from '../Assets/images/art-img2.jpg';
import ArtImg3 from '../Assets/images/art-img3.jpg';
import ArtImg4 from '../Assets/images/art-img4.jpg';
import ArtImg5 from '../Assets/images/art-img5.jpg';
import ArtImg6 from '../Assets/images/art-img6.jpg';
import ArtImg7 from '../Assets/images/art-img7.jpg';
import ArtImg8 from '../Assets/images/art-img8.jpg';
import ArtImg9 from '../Assets/images/art-img9.jpg';
import ArtImg10 from '../Assets/images/art-img10.jpg';
const MyADs = () => {
    return (
        <div id="content" className="section-padding">
<div className="container">
<div className="row">
<div className="col-sm-12 col-md-4 col-lg-3 page-sidebar">
<aside>
<div className="sidebar-box">
<div className="user">
<figure>
<a href="#"><img src="images/author-img1.jpg" alt="" /></a>
</figure>
<div className="usercontent">
<h3>User</h3>
<h4>Administrator</h4>
</div>
</div>
<nav className="navdashboard">
<ul>
<li>
<a href="dashboard.html">
<i className="lni-dashboard"></i>
<span>Dashboard</span>
</a>
</li>
<li>
<a href="account-profile-setting.html">
<i className="lni-cog"></i>
<span>Profile Settings</span>
</a>
</li>
<li>
<a className="active" href="account-myads.html">
<i className="lni-layers"></i>
<span>My Ads</span>
</a>
</li>
<li>
<a href="offermessages.html">
<i className="lni-envelope"></i>
<span>Offers/Messages</span>
</a>
</li>
<li>
<a href="payments.html">
<i className="lni-wallet"></i>
<span>Payments</span>
</a>
</li>
<li>
<a href="account-favourite-ads.html">
<i className="lni-heart"></i>
 <span>My Favourites</span>
</a>
</li>
<li>
<a href="privacy-setting.html">
<i className="lni-star"></i>
<span>Privacy Settings</span>
</a>
</li>
<li>
<a href="#">
<i className="lni-enter"></i>
<span>Logout</span>
</a>
</li>
</ul>
</nav>
</div>
<div className="widget">
<h4 className="widget-title">Advertisement</h4>
<div className="add-box">
<img className="img-fluid" src={ArtImg1} alt="" />
</div>
</div>
</aside>
</div>
<div className="col-sm-12 col-md-8 col-lg-9">
<div className="page-content">
<div className="inner-box">
<div className="dashboard-box">
<h2 className="dashbord-title">My Ads</h2>
</div>
<div className="dashboard-wrapper">
<nav className="nav-table">
<ul>
<li className="active"><a href="#">All Ads (42)</a></li>
<li><a href="#">Published (88)</a></li>
<li><a href="#">Featured (12)</a></li>
<li><a href="#">Sold (02)</a></li>
<li><a href="#">Active (42)</a></li>
<li><a href="#">Expired (01)</a></li>
</ul>
</nav>
<table className="table table-responsive dashboardtable tablemyads">
<thead>
<tr>
<th>
<div className="custom-control custom-checkbox">
<input type="checkbox" className="custom-control-input" id="checkedall" />
<label className="custom-control-label" for="checkedall"></label>
</div>
</th>
<th>Photo</th>
<th>Title</th>
<th>Category</th>
<th>Price</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr data-category="active">
<td>
<div className="custom-control custom-checkbox">
<input type="checkbox" className="custom-control-input" id="adone" />
<label className="custom-control-label" for="adone"></label>
</div>
</td>
<td className="photo"><img className="img-fluid" src={ArtImg1} alt="" /></td>
<td data-title="Title">
<h3>HP Laptop 6560b core i3 3nd generation</h3>
<span>Ad ID: ng3D5hAMHPajQrM</span>
</td>
<td data-title="Category"><span className="adcategories">Laptops &amp; PCs</span></td>
<td data-title="Ad Status"><span className="adstatus adstatusactive">active</span></td>
<td data-title="Price">
<h3>139$</h3>
</td>
<td data-title="Action">
<div className="btns-actions">
<a className="btn-action btn-view" href="#"><i className="lni-eye"></i></a>
<a className="btn-action btn-edit" href="#"><i className="lni-pencil"></i></a>
<a className="btn-action btn-delete" href="#"><i className="lni-trash"></i></a>
</div>
</td>
</tr>
<tr data-category="active">
<td>
<div className="custom-control custom-checkbox">
<input type="checkbox" className="custom-control-input" id="adtwo" />
<label className="custom-control-label" for="adtwo"></label>
</div>
</td>
<td className="photo"><img className="img-fluid" src={ArtImg2} alt="" /></td>
<td data-title="Title">
<h3>Jvc Haebr80b In-ear Sports Headphones</h3>
<span>Ad ID: ng3D5hAMHPajQrM</span>
</td>
<td data-title="Category">Electronics</td>
<td data-title="Ad Status"><span className="adstatus adstatusactive">Active</span></td>
<td data-title="Price">
<h3>$189</h3>
</td>
<td data-title="Action">
<div className="btns-actions">
<a className="btn-action btn-view" href="#"><i className="lni-eye"></i></a>
<a className="btn-action btn-edit" href="#"><i className="lni-pencil"></i></a>
<a className="btn-action btn-delete" href="#"><i className="lni-trash"></i></a>
</div>
</td>
</tr>
<tr data-category="inactive">
<td>
<div className="custom-control custom-checkbox">
<input type="checkbox" className="custom-control-input" id="adthree" />
<label className="custom-control-label" for="adthree"></label>
</div>
</td>
<td className="photo"><img className="img-fluid" src={ArtImg3} alt="" /></td>
<td data-title="Title">
<h3>Furniture Straps 4-Pack, TV Anti-Tip Metal Wall </h3>
<span>Ad ID: ng3D5hAMHPajQrM</span>
</td>
<td data-title="Category">Real Estate</td>
<td>
<span className="adstatus adstatusinactive">Inactive</span>
</td>
<td data-title="Price">
<h3>$69</h3>
</td>
<td data-title="Action">
<div className="btns-actions">
<a className="btn-action btn-view" href="#"><i className="lni-eye"></i></a>
<a className="btn-action btn-edit" href="#"><i className="lni-pencil"></i></a>
<a className="btn-action btn-delete" href="#"><i className="lni-trash"></i></a>
</div>
</td>
</tr>
<tr data-category="sold">
<td>
<div className="custom-control custom-checkbox">
<input type="checkbox" className="custom-control-input" id="adfour" />
<label className="custom-control-label" for="adfour"></label>
</div>
</td>
<td className="photo"><img className="img-fluid" src={ArtImg4} alt="" /></td>
<td data-title="Title">
<h3>Apple iPhone X, Fully Unlocked 5.8", 64 GB - Black</h3>
<span>Ad ID: ng3D5hAMHPajQrM</span>
</td>
<td data-title="Category">Mobile</td>
<td data-title="Ad Status"><span className="adstatus adstatussold">Sold</span></td>
<td data-title="Price">
<h3>$89</h3>
</td>
<td data-title="Action">
<div className="btns-actions">
<a className="btn-action btn-view" href="#"><i className="lni-eye"></i></a>
<a className="btn-action btn-delete" href="#"><i className="lni-trash"></i></a>
</div>
</td>
</tr>
<tr data-category="active">
<td>
<div className="custom-control custom-checkbox">
<input type="checkbox" className="custom-control-input" id="adfive" />
<label className="custom-control-label" for="adfive"></label>
</div>
</td>
<td className="photo"><img className="img-fluid" src={ArtImg5} alt="" /></td>
<td data-title="Title">
<h3>Apple Macbook Pro 13 Inch with/without Touch Bar</h3>
<span>Ad ID: ng3D5hAMHPajQrM</span>
</td>
<td data-title="Category">Apple</td>
<td data-title="Ad Status"><span className="adstatus adstatusactive">Active</span></td>
<td data-title="Price">
<h3>$289</h3>
</td>
<td data-title="Action">
<div className="btns-actions">
<a className="btn-action btn-view" href="#"><i className="lni-eye"></i></a>
<a className="btn-action btn-edit" href="#"><i className="lni-pencil"></i></a>
<a className="btn-action btn-delete" href="#"><i className="lni-trash"></i></a>
</div>
</td>
</tr>
<tr data-category="sold">
<td>
<div className="custom-control custom-checkbox">
<input type="checkbox" className="custom-control-input" id="adsix" />
<label className="custom-control-label" for="adsix"></label>
</div>
</td>
<td className="photo"><img className="img-fluid" src={ArtImg6} alt="" /></td>
<td data-title="Title">
<h3>Apple MQDT2CL/A 10.5-Inch 64GB Wi-Fi iPad Pro</h3>
<span>Ad ID: ng3D5hAMHPajQrM</span>
</td>
<td data-title="Category">Apple iPad</td>
<td data-title="Ad Status"><span className="adstatus adstatussold">Sold</span></td>
<td data-title="Price">
<h3>$159</h3>
</td>
<td data-title="Action">
<div className="btns-actions">
<a className="btn-action btn-view" href="#"><i className="lni-eye"></i></a>
<a className="btn-action btn-delete" href="#"><i className="lni-trash"></i></a>
</div>
</td>
</tr>
<tr data-category="expired">
<td>
<div className="custom-control custom-checkbox">
<input type="checkbox" className="custom-control-input" id="adseven" />
<label className="custom-control-label" for="adseven"></label>
</div>
</td>
<td className="photo"><img className="img-fluid" src={ArtImg7} alt="" /></td>
<td data-title="Title">
<h3>Essential Phone 8GB Unlocked with Dual Camera</h3>
<span>Ad ID: ng3D5hAMHPajQrM</span>
</td>
<td data-title="Category">Mobile</td>
<td data-title="Ad Status"><span className="adstatus adstatusexpired">Expired</span></td>
<td data-title="Price">
<h3>$89</h3>
</td>
<td data-title="Action">
<div className="btns-actions">
<a className="btn-action btn-view" href="#"><i className="lni-eye"></i></a>
<a className="btn-action btn-edit" href="#"><i className="lni-pencil"></i></a>
<a className="btn-action btn-delete" href="#"><i className="lni-trash"></i></a>
</div>
</td>
</tr>
<tr data-category="inactive">
<td>
<div className="custom-control custom-checkbox">
<input type="checkbox" className="custom-control-input" id="adeight" />
<label className="custom-control-label" for="adeight"></label>
</div>
</td>
<td className="photo"><img className="img-fluid" src={ArtImg8} alt="" /></td>
<td data-title="Title">
<h3>LG Nexus 5x LG-H791 32GB GSM Smartphone</h3>
<span>Ad ID: ng3D5hAMHPajQrM</span>
</td>
<td data-title="Category">Mobile</td>
<td>
<span className="adstatus adstatusinactive">Inactive</span>
</td>
<td data-title="Price">
<h3>$59</h3>
</td>
<td data-title="Action">
<div className="btns-actions">
<a className="btn-action btn-view" href="#"><i className="lni-eye"></i></a>
<a className="btn-action btn-edit" href="#"><i className="lni-pencil"></i></a>
<a className="btn-action btn-delete" href="#"><i className="lni-trash"></i></a>
</div>
</td>
</tr>
<tr data-category="expired">
<td>
<div className="custom-control custom-checkbox">
<input type="checkbox" className="custom-control-input" id="adnine" />
<label className="custom-control-label" for="adnine"></label>
</div>
</td>
<td className="photo"><img className="img-fluid" src={ArtImg9} alt="" /></td>
<td data-title="Title">
<h3>Samsung Galaxy G550T On5 GSM Unlocked Smartphone</h3>
<span>Ad ID: ng3D5hAMHPajQrM</span>
</td>
<td data-title="Category">Mobile</td>
<td data-title="Ad Status"><span className="adstatus adstatusexpired">Expired</span></td>
<td data-title="Price">
<h3>$129</h3>
</td>
<td data-title="Action">
<div className="btns-actions">
<a className="btn-action btn-view" href="#"><i className="lni-eye"></i></a>
<a className="btn-action btn-edit" href="#"><i className="lni-pencil"></i></a>
<a className="btn-action btn-delete" href="#"><i className="lni-trash"></i></a>
</div>
</td>
</tr>
<tr data-category="deleted">
<td>
<div className="custom-control custom-checkbox">
<input type="checkbox" className="custom-control-input" id="adten" />
<label className="custom-control-label" for="adten"></label>
</div>
</td>
<td className="photo"><img className="img-fluid" src={ArtImg10} alt="" /></td>
<td data-title="Title">
<h3>Apple iMac Pro 27" All-in-One Desktop, Space Gray</h3>
<span>Ad ID: ng3D5hAMHPajQrM</span>
</td>
<td data-title="Category">Apple iMac</td>
<td data-title="Ad Status"><span className="adstatus adstatusdeleted">Deleted</span></td>
<td data-title="Price">
<h3>$389</h3>
</td>
<td data-title="Action">
<div className="btns-actions">
<a className="btn-action btn-view" href="#"><i className="lni-eye"></i></a>
<a className="btn-action btn-edit" href="#"><i className="lni-pencil"></i></a>
<a className="btn-action btn-delete" href="#"><i className="lni-trash"></i></a>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    )
}

export default MyADs
