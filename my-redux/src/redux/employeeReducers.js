import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, GET_IMG, NAME_INPUT, EMAIL_INPUT,COMPANY_INPUT,PHONE_NO_INPUT,ADDRESS_INPUT } from "./actionType"


const initialState = {
    loading: false,
    users: [],
    error: "",
    myImg: null,
    name: '',
    email: "",
    address: "",
    phone_no: "",
    company: "",

}

const employeeReducers = (state = initialState,action)=> {
    if(action.type === FETCH_USERS_REQUEST) {
        console.log("The user request action is dispatched")
        return {...state,loading:true}
    }
    if(action.type === FETCH_USERS_SUCCESS) {
        return {
            ...state,
            users: action.payload.users,
            loading:false,
            error: ''
        }
    }
    if(action.type === FETCH_USERS_FAILURE) {
        return {
            ...state,
            loading: false,
            users:[],
            error: action.payload.error
        }
    }
    if(action.type === GET_IMG) {
        return {...state,
        myImg: action.payload.myImg}
    }
    // Handle input forms
    if(action.type === NAME_INPUT) {
        return {
            ...state,
            name: action.payload.name
        }
    }
    if(action.type === EMAIL_INPUT) {
        return {
            ...state,
            email: action.payload.email
        }
    }
    if(action.type === COMPANY_INPUT) {
        return {
            ...state,
            company: action.payload.company
        }
    }
    if(action.type === PHONE_NO_INPUT) {
        return {
            ...state,
            phone_no: action.payload.phone_no
        }
    }
    if(action.type === ADDRESS_INPUT) {
        return {
            ...state,
            address: action.payload.address
        }
    }
 
    return state;
}

export default employeeReducers;