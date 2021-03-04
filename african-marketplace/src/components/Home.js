import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import ItemList from "./ItemList";

import "./../App.css";

const Home = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear("token");
    history.push("/login");
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
          <button onClick={logout}>LOGOUT</button>
          {/* <NavLink onClick={logout}>Logout</NavLink> */}
        </div>
      </nav>
      <div className="item-list" />
      <ItemList />
    </div>
  );
};

export default Home;
