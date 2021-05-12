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
import { handleEditSubmit } from "../redux/actions";

const mapStateToProps = (store) => {
  const { editingEmployee,name,myEmail,myAddress,myCompany,myPhone_no,myImg,uploaded} = store;
  return { name,editingEmployee ,myEmail,myAddress,myCompany,myPhone_no,myImg,uploaded};
};

function EditEmployee({
  getImg,
  myImg,
  nameInput,
  emailInput,
  companyInput,
  phoneNoInput,
  addressInput,
  handleEditSubmit,
  uploadSuccess,
  uploaded,
  editingEmployee,
  name,
  myEmail,
  myAddress,
  myPhone_no,
  myCompany
}) {

// console.log("The editing employee fro madness",editingEmployee[0])
  const [imgUrl, setImgUrl] = useState(null);
  const { id,employee_name, email, address,company,image,phone_no } =
    editingEmployee[0];
    console.log("The id from editing employee",id)
  const handleUplod = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", myImg);
    // console.log("The image in the editiemployee",myImg)
    formData.append("upload_preset", "fbwckdsb");
    alert("The image is uploading. Please wait.");
    axios
      .post("https://api.cloudinary.com/v1_1/dees63q5v/upload", formData)
      .then((res) => {
        console.log("The res from cloudinary", res.data);

        setImgUrl(res.data.url);

        uploadSuccess(true);
      })
      .catch((error) => {
        console.log("The error from the cloudinary", error);
      });
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
          {/* {editingEmployee.map((details)=> {})} */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEditSubmit(id,name,myEmail,myAddress, myPhone_no, myCompany,imgUrl);
            }}
          >
            <label className="name">Name</label>
            <br />
            <input
              type="text"
              value={name}
              placeholder={employee_name}
              required={true}
              onChange={(e) => nameInput(e.target.value)}
            />
            <label className="email">Email</label>
            <br />
            <input
              type="email"
              value={myEmail}
              placeholder={email}
              required={true}
              onChange={(e) => emailInput(e.target.value)}
            />
            <label className="company">Company</label>
            <input
              type="text"
              value={myCompany}
              placeholder={company}
              required={true}
              onChange={(e) => companyInput(e.target.value)}
            />
            <label htmlFor="number">Phone Number</label>
            <input
              type="text"
              required={true}
              value={myPhone_no}
              maxLength="10"
              placeholder={phone_no}
              onChange={(e) => phoneNoInput(e.target.value)}
            />
            <label className="address">Address</label>
            <input
              type="address"
              required={true}
              value={myAddress}
              placeholder={address}
              onChange={(e) => addressInput(e.target.value)}
            />
            <label className="image">Image</label>
            <input
              type="file"
              required={true}
              onChange={(e) => getImg(e.target.files[0])}
            />
            
            <div className="img-container">
              
              <div className="img-container-box-1">
                
                <img src={image} alt="image here" />
                <span>Previous Image</span>
              </div>
              <div className="img-container-box-2">
                <img src={imgUrl} alt='New Image'  />
                <span>New Image</span>
                
              </div>

             
            </div>
            {!uploaded ? (
                <button className="newuploadImg"  onClick={handleUplod} >
                  Upload Imgae
                </button>
              ) : (
                <button className="newuploadImg">
                  
                </button>
              )}
            {uploaded && (
              <button type="submit" className="post-btn">
                Sure For Editing
              </button>
            )}
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
    handleEditSubmit: (id,name,myEmail,myAddress, myPhone_no, myCompany,imgUrl) =>
      dispatch(handleEditSubmit(id,name,myEmail,myAddress, myPhone_no, myCompany,imgUrl)),
    uploadSuccess: () => dispatch(uploadSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);

