import React from 'react'
import Employee_homePage from './Employee_homePage'
import {Link} from 'react-router-dom'

function Navbar() {
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
            <Link to='/add-employee'>Add New Employee</Link>
          </p>
        </div>
      </nav>
      <div className="homepage">
        <Employee_homePage />
      </div>
    </div>
    )
}

export default Navbar
