import React from "react";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { removeFromEOm } from "../redux/actions";

const mapStateToProps = store => {
    const {employeeOM} = store
    return {employeeOM}
}

function EmployeeOfMonth({employeeOM,removeFroEOM}) {
    console.log("The employee of the months",employeeOM)
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
      <div>
        {employeeOM.length=== 0&& <div className='empty-eom'>
          <h2>The Employee Of The month is Empty. First Add going to home section.</h2>
          </div>}
          {employeeOM.length<=2 && employeeOM.map((item)=> {
              const {id,email,address,phone_no,company,employee_name,image} = item
              return (
                  <div key={id}>
                      <section  className='employee-ofMonth'>
                          <div className='employee-ofMonth__img'>
                              <img src={image} height="300px" width='300px' alt='image' />
                              <div className='employee-ofMonth-btn' onClick={()=> removeFroEOM(id)}><button>Remove From EOM</button></div>
                          </div>
                          <div className='employee-ofMonth__text'>
                              Hi I am <span>{employee_name}</span>
                              <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius culpa quibusdam mollitia excepturi quidem itaque suscipit iste vitae iusto quis!</h6>
                              <div className='employee-ofMonth__text--value'>
                                  <p>Email: {email}</p>
                                  <p>Address: {address}</p>
                                  <p>Phone No.: {phone_no}</p>
                                  <p>Company: {company}</p>
                              </div>
                          </div>
                      </section>
                      
                  </div>
              )
          })}
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch=> {
  return {
    removeFroEOM: (id)=> dispatch(removeFromEOm(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (EmployeeOfMonth);
