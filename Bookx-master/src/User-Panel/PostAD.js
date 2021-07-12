import React, { useState, useEffect } from "react";
import background from "../Assets/images/banner1.jpg";
import { useHistory } from "react-router-dom";
import { app } from ".././config/firebase";
import LogoutNavbar from "../Components/LogoutNavbar";

const db = app.firestore();

const PostAD = () => {
  const history = useHistory();
  const [fileUrl, setFileUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const [province, setProvince] = useState("");
  const [location, setLocation] = useState("");

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    const firebaseData = {
      
      title: title,
      avatar: fileUrl,
      category: category,
      type:type,
      price: price,
      fullName: fullName,
      phone: phone,
      desc: desc,
      province: province,
      location: location,
    };

    try {
      if (
        !title ||
        !fileUrl ||
        !category ||        
        !type ||
        !price ||
        !fullName ||
        !phone ||
        !desc ||
        !province ||
        !location
      ) {
        return;
      } else {
        
        const res = await db.collection("ads").add(firebaseData);
        console.log("res", res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    var loggedUser=JSON.parse( localStorage.getItem('signin'));

    const firebaseData = {
      userId:loggedUser.user_id,
      title: title,
      avatar: fileUrl,
      category: category,
      type: type,
      price: price,
      fullName: fullName,
      phone: phone,
      desc: desc,
      province: province,
      location: location,
    };

    console.log(
      title,
      category,
      type,
      price,
      fullName,
      phone,
      desc,
      price,
      fileUrl,
      location,
      province
    );

    try {
      if (
        !title ||
        !fileUrl ||
        !category ||
        !type ||
        !price ||
        !fullName ||
        !phone ||
        !desc ||
        !province ||
        !location
      ) {
        window.alert("Error");
        return;
      } else {
        const res = await db.collection("ads").add(firebaseData);
        console.log("res", res);
        history.push("/my-ads");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
              <LogoutNavbar/>

      <div
        className="page-header"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-wrapper">
                <h2 className="product-title">Post an AD</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="#">Home /</a>
                  </li>
                  <li className="current">Post-AD</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="content" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-12 m-auto">
              <div className="row page-content">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="inner-box">
                    <div className="dashboard-box">
                      <h2 className="dashbord-title">Product Details</h2>
                    </div>
                    <div className="dashboard-wrapper">
                      <form onSubmit={submitData}>
                        <div className="form-group mb-3">
                          <label className="control-label">Product Title</label>
                          <input
                            className="form-control input-md"
                            placeholder="Title"
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                          ></input>
                        </div>
                        <div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">Category</label>
                          <div className="tg-select form-control">
                            <select
                              onChange={(e) => setCategory(e.target.value)}
                            >
                              <option>NoteBook</option>
                              <option>Novel</option>
                              <option>Magazine</option>
                              <option>Lecture Notes</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">I Want to</label>
                          <div className="tg-select form-control">
                            <select>
                              <option>Sale</option>
                              <option>Lend</option>
                              <option>Donate</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          <label className="control-label">Price</label>
                          <input
                            className="form-control input-md"
                            placeholder="Ad your Price"
                            type="text"
                            onChange={(e) => setPrice(e.target.value)}
                          ></input>
                        </div>
                        <div className="form-group mb-3">
                          <label className="control-label">Description</label>
                          <textarea
                            className="form-control"
                            rows="5"
                            id="description"
                            placeholder="Add Details"
                            onChange={(e) => setDesc(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="form-group mb-3">
                          <label className="control-label">Image</label>
                          <input
                            className="form-control input-md"
                            type="file"
                            onChange={onFileChange}
                          ></input>
                        </div>
                        <div className="dashboard-box">
                          <h2 className="dashbord-title">Contact Detail</h2>
                        </div>
                        <div className="form-group mb-3">
                          <label className="control-label">Full Name*</label>
                          <input
                            className="form-control input-md"
                            type="text"
                            placeholder="Name to be Displayed"
                            onChange={(e) => setFullName(e.target.value)}
                          ></input>
                        </div>
                        <div className="form-group mb-3">
                          <label className="control-label">
                            Mobile Number *
                          </label>
                          <input
                            className="form-control input-md"
                            type="text"
                            placeholder="Mobile Number to be Contacted"
                            onChange={(e) => setPhone(e.target.value)}
                          ></input>
                        </div>
                        <div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">Province</label>
                          <div className="tg-select form-control">
                            <select
                              onChange={(e) => setProvince(e.target.value)}
                            >
                              <option>Punjab</option>
                              <option>KPK</option>
                              <option>Sindh</option>
                              <option>Baluchistan</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">City</label>
                          <div className="tg-select form-control">
                            <select
                              onChange={(e) => setLocation(e.target.value)}
                            >
                              <option>Faisalabad</option>
                              <option>Lahore</option>
                              <option>Karachi</option>
                              <option>Islamabad</option>
                            </select>
                          </div>
                        </div>
                        <button className="btn btn-common" type="submit">
                          Post Ad
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div id="content" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-12 m-auto">
              <div className="row page-content">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="inner-box">
                    <div className="dashboard-box">
                      <h2 className="dashbord-title">Product Details</h2>
                    </div>
                    <div className="dashboard-wrapper">
                      <form onSubmit={submitData}>
                        <div className="form-group mb-3">
                          <label className="control-label">Product Title</label>
                          <input
                            maxLength="60"
                            minLength="10"
                            className="form-control input-md"
                            type="text"
                            placeholder="title"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                          ></input>
                        </div>
                        <div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">Category</label>
                          <div className="tg-select form-control">
                            <select
                            required
                            onChange={(e) => setCategory(e.target.value)}
                            >
                              <option>Category</option>
                              <option>TextBook</option>
                              <option>Novel</option>
                              <option>Magazine</option>
                              <option>Lectures</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">I Want to</label>
                          <div className="tg-select form-control">
                            <select
                            required
                               onChange={(e) => setType(e.target.value)}
                            >
                              <option>Select</option>
                              <option>Sale</option>
                              <option>Lend</option>
                              <option>Donate</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group mb-3">
                          <label className="control-label">Price</label>
                          <input
                            className="form-control input-md"
                            required
                            type="number"
                            placeholder="price"
                            onChange={(e) => setPrice(e.target.value)}
                          ></input>
                        </div>

                        <div className="form-group mb-3">
                          <label className="control-label">Description</label>
                          <textarea
                          minLength="30"
                          maxLength="200"
                            className="form-control"
                            rows="5"
                            placeholder="description"
                            onChange={(e) => setDesc(e.target.value)}
                          ></textarea>
                        </div>

                        <div className="form-group mb-3">
                          <label className="control-label">Image</label>
                          <input
                            className="form-control input-md"
                            accept="image/jpeg, image/png"
                            type="file"
                            onChange={onFileChange}
                          ></input>
                        </div>

                        <div className="dashboard-box">
                          <h2 className="dashbord-title">Contact Detail</h2>
                        </div>
                        <div className="form-group mb-3">
                          <label className="control-label">Full Name*</label>

                          <input
                            className="form-control input-md"
                            type="text"
                            placeholder="Your Full Name"
                            onChange={(e) => setFullName(e.target.value)}
                          ></input>
                        </div>

                        <div className="form-group mb-3">
                          <label className="control-label">
                            Mobile Number *
                          </label>
                          <input
                            className="form-control input-md"
                            type="text"
                            placeholder="e.g 0300-1234567"
                            onChange={(e) => setPhone(e.target.value)}
                          ></input>
                        </div>

                        <div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">Province</label>
                          <div className="tg-select form-control">
                        <select onChange={(e) => setProvince(e.target.value)}>
                          <option>Province</option>
                          <option>Punjab</option>
                          <option>Sindh</option>
                          <option>Balochistan</option>
                          <option>KPK</option>
                        </select>
                        </div>
                        </div>

                        <div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">City</label>
                          <div className="tg-select form-control">
                        <select onChange={(e) => setLocation(e.target.value)}>
                          <option>City</option>
                          <option>Karachi</option>
                          <option>Lahore</option>
                          <option>Faislabad</option>
                          <option>Rawalpindi</option>
                          <option>Gujranwala</option>
                          <option>Multan</option>
                          <option>Haiderabad</option>
                          <option>Islamabad</option>
                        </select>
                        </div>
                        </div>
                        <button className="btn btn-common" type="submit">Submit AD</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAD;
