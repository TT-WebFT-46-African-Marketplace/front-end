import "./App.css";

// import Login from './forms/Login/Login'
import ItemForm from "./forms/ItemForm/ItemForm";

import Login from "./forms/Login/Login";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import SignUp from "./forms/SignUp/SignUp";
import Dashboard from "./components/Dashboard";

import UserInfo from "./components/UserInfo";

import { addItem } from "./store/actions/index";

// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/item-form" component={ItemForm} />
        <Route exact path="/user" component={UserInfo} />
      </Router>
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { addItem })(App);
