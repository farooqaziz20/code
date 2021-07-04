import React, { useState, useEffect } from "react";
import background from "../Assets/images/banner1.jpg";
import { app } from ".././config/firebase";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const db = app.firestore();

const MyADs = () => {
  const [product, setProduct] = useState([{}]);
  const history = useHistory();

  useEffect(() => {
    const ctaFetchHandler = async () => {
      try {
        let data = await db.collection("noman").get();
        let students = [];
        data.forEach((doc) => {
          console.log("id", doc.id);
          students.push({ ...doc.data(), docId: doc.id });
        });
        console.log("data", students);
        setProduct(students);
      } catch (err) {
        console.log(err);
      }
    };
    ctaFetchHandler();
  }, []);

  const deleteData = async (id) => {
    // console.log(id);
    try {
      const res = await db.collection("noman").doc(id).delete();
      return <Redirect to="/my-ads" />;
      // history.push ('/my-ads');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
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

      <div id="content" class="section-padding ml-5 mr-5">
        <div class="container-fluid">
          <div class="row">
            {/* <div className="col-md-12">
              <div className="head-faq text-center">
                <h2 className="section-title">My ADs</h2>
              </div>
            </div> */}
            <div className="col-sm-12 col-md-8 col-lg-12 m-auto">
              <div className="page-content">
                <div className="inner-box">
                  <div className="dashboard-wrapper">
                    <nav className="nav-table">
                      {/* <ul>
                  <li className="active">
                    <a href="#">All Ads (5)</a>
                  </li>

                </ul> */}
                    </nav>
                    <table className="table table-responsive dashboardtable tablemyads">
                      <thead>
                        <tr>
                          {/* <th>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="checkedall"
                        />
                        <label
                          className="custom-control-label"
                          for="checkedall"
                        ></label>
                      </div>
                    </th> */}
                          <th>Image</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Category</th>
                          <th>Want to</th>
                          <th>Description</th>
                          <th>Full Name</th>
                          <th>City</th>
                          <th>Province</th>
                          <th>Phone</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.map((data) => (
                          // <td><img src={data.avatar} height="80px" width="80px"></img></td>
                          // <td>{data.title}</td>
                          // <td>{data.price}</td>
                          // <td>{data.category}</td>
                          // <td>{data.desc}</td>
                          // <td>{data.fullName}</td>
                          // <td>{data.location}</td>
                          // <td>{data.phone}</td>
                          // <td>{data.province}</td>
                          // <td><Link to={`/editProduct/${data.docId}`}><EditIcon/></Link></td>
                          // <td onClick={()=>deleteData(data.docId)} style={{cursor:"pointer"}}><DeleteIcon/></td>
                          <tr data-category="active">
                            <td className="photo">
                              <img
                                src={data.avatar}
                                height="80px"
                                width="80px"
                              ></img>
                            </td>
                            <td data-title="Title">
                              <h3>{data.title}</h3>
                              {/* <span>Ad ID: ng3D5hAMHPajQrM</span> */}
                            </td>
                            <td data-title="Price">
                              <h3>{data.price}</h3>
                            </td>
                            <td data-title="Category">
                              <span className="adcategories">
                                {data.category}
                              </span>
                            </td>
                            <td data-title="Type">
                              <span className="adcategories">
                                {data.type}
                              </span>
                            </td>
                            {/* <td data-title="Want to">
                              <span className="adcategories">Donate</span>
                            </td> */}
                            <td data-title="Description">
                              <h3>{data.desc}</h3>
                            </td>
                            <td data-title="Full Name">
                              <h3>{data.fullName}</h3>
                            </td>
                            <td data-title="Province">
                              <h3>{data.province}</h3>
                            </td>
                            <td data-title="City">
                              <h3>{data.location}</h3>
                            </td>
                            <td data-title="Phone">
                              <h3>{data.phone}</h3>
                            </td>
                             <td data-title="Edit"><Link to={`/editProduct/${data.docId}`}><EditIcon/></Link></td>
                           <td data-title="Delete" onClick={()=>deleteData(data.docId)} style={{cursor:"pointer"}}><DeleteIcon/></td>

                            {/* <td data-title="Action">
                              <div className="btns-actions">
                                <a className="btn-action btn-edit" href="">
                                  <Link to={`/editProduct/${data.docId}`}>
                                    <i className="lni-pencil"></i>
                                  </Link>
                                </a>
                                <button className="btn btn-action btn-delete">
                                  <i className="lni-trash"  onClick={()=>deleteData(data.docId)} style={{cursor:"pointer"}}></i>
                                </button>
                              </div>
                            </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="content" class="section-padding">
        <div style={{marginLeft:"200px"}}>
        <table border="1">
          <thead>
             <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Desc</th>
            <th>Full Name</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Province</th>
            <th>Actions</th>
            
            
          </thead>
          <tbody>
            {
              product.map((data)=>(
                <tr>
                  <td><img src={data.avatar} height="80px" width="80px"></img></td>
                  <td>{data.title}</td>
                  <td>{data.price}</td>
                  <td>{data.category}</td>
                  <td>{data.desc}</td>
                  <td>{data.fullName}</td>
                  <td>{data.location}</td>
                  <td>{data.phone}</td>
                  <td>{data.province}</td>
                  <td><Link to={`/editProduct/${data.docId}`}><EditIcon/></Link></td>
                  <td onClick={()=>deleteData(data.docId)} style={{cursor:"pointer"}}><DeleteIcon/></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </div>
</div> */}
    </div>
  );
};

export default MyADs;
