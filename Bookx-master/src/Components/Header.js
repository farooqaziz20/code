import React,{useState} from 'react';
import background from '../Assets/images/banner1.jpg';
import {useDispatch,useSelector} from 'react-redux';
import {filterByInput} from '.././store/actions/useAction';


const Header = () => {
    const [getCategory,setGetCateg]=useState("");
    // const [location,setLocation]=useState("");
    // const [category,setCategory]=useState("");
    const [location,setLocation]=useState('');
    const dispatch=useDispatch();
    




    const handleInputs=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
         setGetCateg({...getCategory,[name]:value});
       }


       const tryWorking=()=>{
        console.log(getCategory.title+getCategory.category+getCategory.location)
       }


    return (
<header id="header-wrap">

<div id="hero-area"  style={{backgroundImage: `url(${background})`}}>
<div className="overlay"></div>
<div className="container">
<div className="row">
<div className="col-md-12 col-lg-12 col-xs-12 text-center">
<div className="contents">
<h1 className="head-title">Welcome to <span className="year">BookX</span></h1>
<p>Buy, Sell, Lend and Donate <br/> Textbooks | Novels | Magazines | Lecture Notes</p>
<div className="search-bar">
<div className="search-inner">
<form className="search-form">
<div className="form-group inputwithicon">
<i className="lni-tag"></i>
<input type="text" name="title" onChange={handleInputs} className="form-control" placeholder="Enter Product Keyword" />
</div>
<div className="form-group inputwithicon">
<i className="lni-map-marker"></i>
<div className="select">
<select onChange={handleInputs} name="location">
<option>Locations</option>
<option> Faislabad</option>
<option>Lahore</option>
<option>Multan</option>
<option>Islamabad</option>
<option>Karachi</option>
</select>
</div>
</div>
<div className="form-group inputwithicon">
<i className="lni-menu"></i>
<div className="select">
<select onChange={handleInputs} name="category">
<option>Categories</option>
<option>TextBook</option>
<option>Novel</option>
<option>Magazine</option>
<option>Lecture</option>
</select>
</div>
</div>
<button className="btn btn-common" type="button" onClick={()=>dispatch(filterByInput(getCategory))}><i className="lni-search"></i> Search Now</button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
 </div>

</header>
    )
}

export default Header
