import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, GET_IMG, NAME_INPUT, UPLOAD_IMG,EMAIL_INPUT,COMPANY_INPUT,PHONE_NO_INPUT,ADDRESS_INPUT } from "./actionType"
import axios from 'axios'

export const fetchUsersRequest = ()=> {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = (users)=> {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: {
            users
        }
    }
}

export const fetchUsersFailure = (error)=> {
    return {
        type: FETCH_USERS_FAILURE,
        payload: {
            error
        }
    }
}
export const getImg = (myImg)=> {
    return {
        type: GET_IMG,
        payload: {
            myImg
        }
    }

}
export const uploadImg = ()=> {
    return {
        type: UPLOAD_IMG,
    }
}

// handle form inputs

export const nameInput = (name)=> {
    return {
        type: NAME_INPUT,
        payload: {
            name
        }
    }
}
export const emailInput = (email)=> {
    return {
        type: EMAIL_INPUT,
        payload: {
            email
        }
    }
}
export const companyInput = (company)=> {
    return {
        type: COMPANY_INPUT,
        payload: {
            company
        }
    }
}
export const phoneNoInput = (phone_no)=> {
    return {
        type: PHONE_NO_INPUT,
        payload: {
            phone_no
        }
    }
}
export const addressInput = (address)=> {
    return {
        type: ADDRESS_INPUT,
        payload: {
            address
        }
    }
}



export const fetchEmployee = ()=> {
    return (dispatch)=> {
        dispatch(fetchUsersRequest())
        axios.get('http://localhost:3000/employee')
        .then(res=> {
            const employee = res.data
            console.log("The employee",employee)
            dispatch(fetchUsersSuccess(employee))
        })
        .catch(error=> {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}

export const handleSubmit = (name,email,address,phone_no,company,imgUrl)=> {
    console.log("The handle submit called")
    const myPost =   {
        "employee_name": `${name}`,
        "email": `${email}`,
        "phone_no": `${phone_no}`,
        "address": `${address}`,
        "company": `${company}`,
        "image": `${imgUrl}`,
    }
    console.log("my post",myPost)

    // console.log("The posting value",myPost)
    return (dispatch)=> {

        axios.post("http://localhost:3000/employee",myPost)
        .then((res) => {
            // dispatch(fetchUsersSuccess(res.data))
          console.log("The res from json", res);
        //   dispatch({
        //       type:"ADD_USER",
        //       payload: res.data
        //   })
          // setImgUrl(res.data.url);
        })
        .catch((error) => {
          console.log("The error from the cloudinary", error);
        });
       
    }

}
