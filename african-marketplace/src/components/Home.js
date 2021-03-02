import React from "react";
import { NavLink } from "react-router-dom";

import ItemList from "./ItemList";

import "./../App.css";

const Home = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="am-header">African Market</h1>
        <div className="nav-links">
          <NavLink exact to="/user">
            Profile
          </NavLink>
          <NavLink exact to="/dashboard">
            My Items
          </NavLink>
        </div>
      </nav>
      <div className="item-list" />
      <ItemList />
    </div>
  );
};

export default Home;
