import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  getImg,
  nameInput,
  emailInput,
  companyInput,
  phoneNoInput,
  addressInput,
  uploadSuccess,
} from "../redux/actions";
import { handleSubmit } from "../redux/actions";
import Navbar from "./Navbar";

const mapStateToProps = (store) => {
  const { myImg, name, myEmail,myAddress, myPhone_no, myCompany,uploaded } = store;
  return { myImg, name, myEmail, myAddress, myPhone_no, myCompany,uploaded };
};

function AddEmployee({
  getImg,
  myImg,
  name,
  myEmail,
  myAddress,
  nameInput,
  emailInput,
  myPhone_no,
  myCompany,
  companyInput,
  phoneNoInput,
  addressInput,
  handleSubmit,
  uploadSuccess,
  uploaded,
}) {
  
  const [imgUrl, setImgUrl] = useState(null);
  console.log("The image url", imgUrl);
  const handleUplod = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", myImg);
    formData.append("upload_preset", "fbwckdsb");
    alert("The image is uploading. Please wait.")
    axios
      .post("https://api.cloudinary.com/v1_1/dees63q5v/upload", formData)
      .then((res) => {
        // console.log("The res from cloudinary", res.data);
        
        setImgUrl(res.data.url);
        
        uploadSuccess(true)
      })
      .catch((error) => {
        console.log("The error from the cloudinary", error);
      });
  };
  const handleForm = (e, name, myEmail, myAddress, myPhone_no, myCompany, imgUrl) => {
    e.preventDefault();
    handleSubmit(name, myEmail, myAddress, myPhone_no, myCompany, imgUrl);
  };
  return (
    <div>
      <nav>
        <div className="nav-container">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/employeeOf-month">Employee Of Month</Link>
          </p>
          <p>
            <Link to="/add-employee">Add New Employee</Link>
          </p>
        </div>
      </nav>
      <div className="form-container">
        <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(name, myEmail, myAddress, myPhone_no, myCompany, imgUrl);
          }}
        >
          <label className="name">Name</label><br />
          <input
            type="text"
            value={name} placeholder="Enter Name" required={true}
            onChange={(e) => nameInput(e.target.value)}
          />
          <label className="email">Email</label><br />
          <input
            type="email"
            value={myEmail} placeholder="Enter Email" required={true}
            onChange={(e) => emailInput(e.target.value)}
          />
          <label className="company">Company</label>
          <input
            type="text"
            value={myCompany}  placeholder="Enter Company" required={true}
            onChange={(e) => companyInput(e.target.value)}
          />
          <label htmlFor="number" >Phone Number</label>
          <input
            type="text" required={true}
            value={myPhone_no}  
            maxLength="10"
            placeholder="Enter Ph. Number"
            onChange={(e) => phoneNoInput(e.target.value)}
          />
          <label className="address">Address</label>
          <input
            type="address" required={true}
            value={myAddress}  placeholder="Enter Address"
            onChange={(e) => addressInput(e.target.value)}
          />
          <label className='image'>Image</label>
          <input  type="file" required={true} onChange={(e) => getImg(e.target.files[0])} />
          <div className="img-container">
            <div className='img-container-box'>
            <img src={imgUrl} alt="  image here" />
            </div>
            
          {!uploaded? <button className='uploadImg' onClick={handleUplod}>Upload Imgae</button>: <button className='uploadImg'>Image Uploaded</button>}
          </div>
          {uploaded && <button type="submit" className="post-btn">Post New Employee</button>}
        </form>
        </div>
      </div>

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getImg: (myImg) => dispatch(getImg(myImg)),
    nameInput: (name) => dispatch(nameInput(name)),
    emailInput: (email) => dispatch(emailInput(email)),
    companyInput: (company) => dispatch(companyInput(company)),
    phoneNoInput: (phone_no) => dispatch(phoneNoInput(phone_no)),
    addressInput: (address) => dispatch(addressInput(address)),
    handleSubmit: (name, email, address, phone_no, company, imgUrl) =>
      dispatch(handleSubmit(name, email, address, phone_no, company, imgUrl)),
      uploadSuccess: ()=> dispatch(uploadSuccess())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
