import "./App.css";

// import Login from './forms/Login/Login'
import ItemForm from './forms/ItemForm/ItemForm'


import Login from "./forms/Login/Login";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/Home";
import SignUp from "./forms/SignUp/SignUp";
import Dashboard from "./components/Dashboard";

import UserInfo from "./components/UserInfo";


function App() {
  return (
    <div className="App">

      <header className="App-header">
      
      </header>

      <Router>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/item-form" component={ItemForm} />
        <Route exact path="/user" component={UserInfo} />
      </Router>

    </div>
  );
}
//still need to add privateRoute
const mapStateToProps = (state) => {
  return state;
};

//still add fetchItems as props to connect to app component
export default connect(mapStateToProps)(App);
