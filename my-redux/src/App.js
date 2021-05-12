import "./css/App.css";
import Employee_homePage from "./components/Employee_homePage";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";
import EditEmployee from "./components/EditEmployee";


function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path = '/' exact component = {Navbar} />
        <Route path = '/add-employee' exact component = {AddEmployee} />
        <Route path = '/edit-employee' exact component = {EditEmployee} />
        

    </Switch>
    </BrowserRouter>
  );
}

export default App;
