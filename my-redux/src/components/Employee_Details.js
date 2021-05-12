import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {editEmployee,handleDelete,makeEmployeeOM} from "../redux/actions"

function Employee_Details({
  id,
  employee_name,
  image,
  email,
  address,
  company,
  phone_no,
  editEmployee,
  handleDelete,
  makeEmployeeOM,
}) {
  return (
    <section key={id} className="card">
      <div className="card-container">
        <div>
          <img src={image} alt="image" className="card-container__img" />
          <div className="card-container__details">
            <h2 className="card-container__details--heading">
              {employee_name}
            </h2>
            <p className="card-container__details--email">Email: {email}</p>
            <p className="card-container__details--company">
              Company: {company}
            </p>
            <p className="card-container__details--phone_no">
              Contact: {phone_no} <span>{address}</span>
            </p>
          </div>
        </div>
       <div className='card-container__buttons'>
       <div className="card-container__buttons--items">
          <div>
            <Link to="/edit-employee"><button className='card-container__buttons--items-first' onClick={()=> editEmployee(id)} >Edit Employee</button></Link>
          </div>
         <form>
         <div>
            <button className='card-container__buttons--items-second' onClick={(e)=> {
              handleDelete(id);
              e.preventDefault();
            }}  >Delete Employee</button>
          </div>
         </form>
          <div>
            <button className='card-container__buttons--items-third' onClick={()=> makeEmployeeOM(id)}>Make EOM</button>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
}

export default connect(null, {editEmployee,handleDelete,makeEmployeeOM}) (Employee_Details);
