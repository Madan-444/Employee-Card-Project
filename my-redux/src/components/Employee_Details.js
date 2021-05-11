import React from "react";

function Employee_Details({
  id,
  employee_name,
  image,
  email,
  address,
  company,
  phone_no,
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
            <button className='card-container__buttons--items-first'>Edit Employee</button>
          </div>
          <div>
            <button className='card-container__buttons--items-second'>Make EOF</button>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
}

export default Employee_Details;
