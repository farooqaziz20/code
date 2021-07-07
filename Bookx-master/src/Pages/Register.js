import React, { useState } from "react";
import background from "../Assets/images/banner1.jpg";
import axios from "axios";
import { useHistory } from "react-router";
import Navbar from "../Components/Navbar";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const history = useHistory();

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // const submitData=async (e)=>{
  //     e.preventDefault();
  //     const res=await axios.post('/api/signup',name,email,password,cpassword)
  //     console.log("the respone of the api is"+res)
  //     alert("the respone of the api is"+res)
  // }

  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = user;
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, cpassword }),
      });

      const data = await res.json();
      if (data.status === 409 || !data) {
        window.alert(data.message);
        console.log(data.message);
      } else if (data.status === 400) {
        window.alert(data.errors[0].msg);
      } else {
        window.alert("Registeration Successfull");
        console.log("Registeration Successfull");
        history.push("/login");
      }
    } catch (error) {
      console.log("Something Went Wrong");
    }
  };

  return (
    <div>
      <Navbar />
      <div
        class="page-header"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="breadcrumb-wrapper">
                <h2 class="product-title">Register</h2>
                <ol class="breadcrumb">
                  <li>
                    <a href="#">Home /</a>
                  </li>
                  <li class="current">Register</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="register section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12 col-xs-12">
              <div className="register-form login-area">
                <h3>Register</h3>
                <form className="login-form" onSubmit={submitData}>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-user"></i>
                      <input
                        type="text"
                        id="Name"
                        className="form-control"
                        name="name"
                        value={user.name}
                        onChange={handleInputs}
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-envelope"></i>
                      <input
                        type="email"
                        id="sender-email"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={handleInputs}
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-lock"></i>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={user.password}
                        onChange={handleInputs}
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-lock"></i>
                      <input
                        type="password"
                        className="form-control"
                        name="cpassword"
                        value={user.cpassword}
                        placeholder="Retype Password"
                        onChange={handleInputs}
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
                      <label>
                        By registering, you accept our Terms &amp; Conditions
                      </label>
                    </div>
                  </div> */}
                  <div className="text-center">
                    <button className="btn btn-common log-btn" type="submit">
                      Register
                    </button>
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

export default Register;
