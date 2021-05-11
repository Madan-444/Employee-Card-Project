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
} from "../redux/actions";
import { handleSubmit } from "../redux/actions";
import Navbar from "./Navbar";

const mapStateToProps = (store) => {
  const { myImg, name, email, address, phone_no, company } = store;
  return { myImg, name, email, address, phone_no, company };
};

function AddEmployee({
  getImg,
  myImg,
  name,
  email,
  address,
  nameInput,
  emailInput,
  phone_no,
  company,
  companyInput,
  phoneNoInput,
  addressInput,
  handleSubmit,
}) {
  // console.log("The name",name)

  // const [myImg,setMyImg] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  console.log("The image url", imgUrl);
  const handleUplod = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", myImg);
    formData.append("upload_preset", "fbwckdsb");
    axios
      .post("https://api.cloudinary.com/v1_1/dees63q5v/upload", formData)
      .then((res) => {
        console.log("The res from cloudinary", res.data);
        setImgUrl(res.data.url);
      })
      .catch((error) => {
        console.log("The error from the cloudinary", error);
      });
  };
  const handleForm = (e, name, email, address, phone_no, company, imgUrl) => {
    e.preventDefault();
    handleSubmit(name, email, address, phone_no, company, imgUrl);
  };
  return (
    <div>
      <nav>
        <div className="nav-container">
          <p>
            <a href="/">Home</a>
            {/* <Link to="/">Home</Link> */}
          </p>
          <p>
            <a href="#">Employee Of Month</a>
            {/* <Link to="/home-page">Employee Of Month</Link> */}
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
            handleSubmit(name, email, address, phone_no, company, imgUrl);
          }}
        >
          <label className="name">Name</label><br />
          <input
            type="text"
            value={name} placeholder="Enter Name"
            onChange={(e) => nameInput(e.target.value)}
          />
          <label className="email">Email</label><br />
          <input
            type="email"
            value={email} placeholder="Enter Email"
            onChange={(e) => emailInput(e.target.value)}
          />
          <label className="company">Company</label>
          <input
            type="text"
            value={company}  placeholder="Enter Company"
            onChange={(e) => companyInput(e.target.value)}
          />
          <label htmlFor="number" >Phone Number</label>
          <input
            type="text"
            value={phone_no} onkeypress="return onlyNumberKey(event)" 
            maxlength="10"
            placeholder="Enter Ph. Number"
            onChange={(e) => phoneNoInput(e.target.value)}
          />
          <label className="address">Address</label>
          <input
            type="address"
            value={address}  placeholder="Enter Address"
            onChange={(e) => addressInput(e.target.value)}
          />
          <label className='image'>Image</label>
          <input  type="file" onChange={(e) => getImg(e.target.files[0])} />
          <div className="img-container">
            <img src={imgUrl} />
          <button className='uploadImg' onClick={handleUplod}>Upload Imgae</button>
          </div>
          <button type="submit">Dont Toch Me</button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
