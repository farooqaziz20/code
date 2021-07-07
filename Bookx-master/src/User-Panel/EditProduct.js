import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { app } from ".././config/firebase";
import { useHistory } from "react-router-dom";
import background from "../Assets/images/banner1.jpg";
import LogoutNavbar from "../Components/LogoutNavbar";

const db = app.firestore();

export default function EditProduct() {
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
      const res = await db.collection("noman").doc(id).get();
      setData(res.data());

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

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrls(await fileRef.getDownloadURL());
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const firebaseData = {
      title: titles,
      avatar: fileUrls,
      category: categorys,
      price: prices,
      fullName: fullNames,
      phone: phones,
      desc: descs,
      province: provinces,
      location: locations,
    };

    try {
      const res = await db.collection("noman").doc(id).update(firebaseData);
      console.log("res", res);
      history.push("/");
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
                <h2 className="product-title">My ADs</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="#">Home /</a>
                  </li>
                  <li className="current">My-ADs</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{marginTop:"200px",marginLeft:"150px"}}> */}
      <div id="content" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-12 m-auto">
              <div className="row page-content">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="inner-box">
                    <div className="dashboard-box">
                      <h2 className="dashbord-title">Update Product</h2>
                    </div>
                    <div className="dashboard-wrapper">
                      {/* <h1>Edit Producut</h1> */}
                      <form>
                        <img src={fileUrls} width="100px" height="100px" className="mr-5 btn-border mb-3" />
                        <input type="file" onChange={onFileChange}></input>
                        <div className="form-group mb-3">
                          <label className="control-label">Product Title</label>
                          <input
                            className="form-control input-md"
                            type="text"
                            placeholder="title"
                            value={titles}
                            onChange={(e) => setTitles(e.target.value)}
                          ></input>
                        </div>

                        <div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">Category</label>
                          <div className="tg-select form-control">
                          <select
                              onChange={(e) => setCategorys(e.target.value)}
                              value={categorys}
                            >
                              <option>Category</option>
                              <option>TextBook</option>
                              <option>Novel</option>
                              <option>Magazine</option>
                              <option>Lectures</option>
                            </select>
                            {/* <input
                              type="text"
                              value={categorys}
                              onChange={(e) => setCategorys(e.target.value)}
                            ></input> */}
                          </div>
                        </div>

                        <div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">I Want to</label>
                          <div className="tg-select form-control">
                          <select
                              onChange={(e) => setTypes(e.target.value)}
                              value={types}
                            >
                              <option>Sale</option>
                              <option>Lend</option>
                              <option>Donate</option>
                            </select>

                            {/* <input
                              type="text"
                              value={types}
                              onChange={(e) => setTypes(e.target.value)}
                            ></input> */}
                          </div>
                        </div>

                        <div className="form-group mb-3">
                          <label className="control-label">Price</label>

                          <input
                            className="form-control input-md"
                            type="text"
                            placeholder="price"
                            value={prices}
                            onChange={(e) => setPrices(e.target.value)}
                          ></input>
                        </div>

                        <div className="form-group mb-3">
                          <label className="control-label">Description</label>

                          <textarea
                            className="form-control"
                            rows="5"
                            placeholder="description"
                            value={descs}
                            onChange={(e) => setDescs(e.target.value)}
                            ></textarea>
                            </div>

                        <div className="dashboard-box">
                          <h2 className="dashbord-title">Contact Detail</h2>
                        </div>
                        <div className="form-group mb-3">
                          <label className="control-label">Full Name*</label>
                        <input
                            className="form-control input-md"
                            type="text"
                            placeholder="Name"
                          value={fullNames}
                          onChange={(e) => setFullNames(e.target.value)}
                        ></input>
                                                </div>

                                                <div className="form-group mb-3">
                          <label className="control-label">
                            Mobile Number *
                          </label>
                        <input
                            className="form-control input-md"
                            type="text"
                            placeholder="Number"
                          value={phones}
                          onChange={(e) => setPhones(e.target.value)}
                        ></input>
                        </div>

                        <div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">City</label>
                          <div className="tg-select form-control">
                            <select
                          value={locations}
                          onChange={(e) => setLocations(e.target.value)}                            >
                            <option>City</option>
                          <option>Lahore</option>
                          <option>Faislabad</option>
                          <option>Kamalia</option>
                            </select>
                        {/* <input
                          type="text"
                          value={locations}
                          onChange={(e) => setLocations(e.target.value)}
                        ></input> */}
                        </div>
                        </div>

<div className="form-group mb-3 tg-inputwithicon">
                          <label className="control-label">Province</label>
                          <div className="tg-select form-control">  
                          <select
                          value={provinces}
                          onChange={(e) => setProvinces(e.target.value)}
                          >
                          <option>Province</option>
                          <option>Punjab</option>
                          <option>Sindh</option>
                          <option>Balochistan</option>
                            </select>                

                        {/* <input
                          type="text"
                          value={provinces}
                          onChange={(e) => setProvinces(e.target.value)}
                        ></input> */}
                        </div>
                        </div>
                      </form>
                      <button type="submit" className="btn btn-common" onClick={submitHandler}>
                        Update Products
                      </button>
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
}
