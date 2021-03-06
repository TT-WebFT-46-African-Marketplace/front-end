import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import ItemList from "./ItemList";
import { fetchItems } from "./../store/actions/index";

import "./../App.css";

const Home = (props) => {
  const logout = () => {
    localStorage.clear("token");
  };

  return (
    <div className="home">
      <nav className="nav-bar">
        <h1 className="am-header">AFRICAN MARKET</h1>
        <div className="nav-links">
          <NavLink exact to="/user">
            PROFILE
          </NavLink>
          <NavLink exact to="/dashboard">
            MY ITEMS
          </NavLink>
          <a
            href="https://tender-brattain-6749f1.netlify.app/"
            className="logout-btn"
            onClick={logout}
          >
            LOGOUT
          </a>
        </div>
      </nav>
      <div className="item-list" />
      <ItemList fetchItems={props.fetchItems} />
    </div>
  );
};

export default connect(null, { fetchItems })(Home);
