import React,{useState} from "react";
import background from '../Assets/images/banner1.jpg';
import {useHistory} from 'react-router-dom';
import Navbar from "../Components/Navbar";
import {db} from '../../src/config/firebase';

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const history=useHistory();



  const handleLogin=async (e)=>{
    e.preventDefault();

    var isfind=false;
    let accounts = await  db.collection("accounts").where("email","==", email ).where("password","==", password ).get();

    accounts.forEach((doc) => {
      isfind=true;
      
// var docTemp=JSON.parse(doc.data())
console.log(doc.data().name);
    localStorage.setItem('signin', JSON.stringify({name:doc.data().name,email:doc.data().email, user_id:doc.id}))
        window.alert("Login Successfull");
        // console.log("Login Successfull");
        history.push('/my-ads')
    });
    if(!isfind){
      window.alert("Incorrect username or password");
    }
   
  }
  return (
    <div>
      <Navbar/>
<div class="page-header" style={{backgroundImage: `url(${background})`}}>
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="breadcrumb-wrapper">
<h2 class="product-title">Login</h2>
<ol class="breadcrumb">
<li><a href="#">Home /</a></li>
<li class="current">Login</li>
</ol>
</div>
</div>
</div>
</div>
</div>

    <section className="login section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-12 col-xs-12">
            <div className="login-form login-area">
              <h3>Login Now</h3>
              <form role="form" className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                  <div className="input-icon">
                    <i className="lni-user"></i>
                    <input
                      type="email"
                      id="sender-email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-icon">
                    <i className="lni-lock"></i>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {/* <div className="form-group mb-3">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      name="rememberme"
                      value="rememberme"
                    />
                    <label>Keep me logged in</label>
                  </div>
                  <a className="forgetpassword" href="forgot-password.html">
                    Forgot Password?
                  </a>
                </div> */}
                <div className="text-center">
                  <button className="btn btn-common log-btn" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Login;
