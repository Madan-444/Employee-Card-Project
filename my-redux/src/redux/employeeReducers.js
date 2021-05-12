import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, GET_IMG, NAME_INPUT, EMAIL_INPUT,COMPANY_INPUT,PHONE_NO_INPUT,ADDRESS_INPUT, UPLOAD_SUCCESS, EDIT_EMPLOYEE } from "./actionType"


const initialState = {
    loading: false,
    users: [],
    error: "",
    myImg: null,
    name: '',
    myEmail: "",
    myAddress: "",
    myPhone_no: "",
    myCompany: "",
    uploaded: false,
    editingEmployee:[],

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
        console.log("The img file from editing cmp",action.payload.myImg)
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
            myEmail: action.payload.email
        }
    }
    if(action.type === COMPANY_INPUT) {
        return {
            ...state,
            myCompany: action.payload.company
        }
    }
    if(action.type === PHONE_NO_INPUT) {
        return {
            ...state,
            myPhone_no: action.payload.phone_no
        }
    }
    if(action.type === ADDRESS_INPUT) {
        return {
            ...state,
            myAddress: action.payload.address
        }
    }
    if(action.type === UPLOAD_SUCCESS) {
        return {
            ...state,
            uploaded: true,
        }
    }

    // To edit the employee details
    if(action.type === EDIT_EMPLOYEE) {
        let myEditingEmployee = state.users.filter((employee)=> action.payload.id === employee.id)
        console.log("The editing employee is",myEditingEmployee)
        return {
            ...state,
            editingEmployee:myEditingEmployee
        }
    }
 
    return state;
}

export default employeeReducers;