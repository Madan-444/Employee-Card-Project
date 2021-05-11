import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchEmployee } from '../redux/actions'
import Employee_Details from './Employee_Details'

const mapStateToProps = store => {
    const {loading,users,error} = store
    return {loading,users,error}
}

function Employee_homePage({loading,users,error,fetchEmployee}) {

    useEffect(()=> {
        fetchEmployee()
        console.log("The useEffect ran")
    },[])
    console.log("The loading",users)
    return (
        <div className="homepage">
            {loading? <div className="homepage-loading">
                <h2>Loading...</h2>
            </div>: <div className='homepage-employee__details'>
                {users.map((employee)=> <Employee_Details key={employee.id} {...employee} />)}
                </div>}
            {/* this is emplpyeed details */}
        </div>
    )
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchEmployee: ()=> dispatch(fetchEmployee())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Employee_homePage)
