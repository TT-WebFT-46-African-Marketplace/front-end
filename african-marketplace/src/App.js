import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/Home";
import Login from "./forms/Login";
import SignUp from "./forms/SignUp";
import Dashboard from "./components/Dashboard";
import ItemForm from "./forms/ItemForm";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="App">
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
