import React from "react";

import "./Item.css";

const Item = (props) => {
  const { name, location, itemcost, description } = props.item;

  const handleEdit = () => {
    props.editItem();
  };
  const handleDelete = () => {};

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="item-title-wrapper">
          <h2>{name}</h2>
          <h3>From: {location}</h3>
          <h4>${itemcost}</h4>
          <p>{description}</p>
        </div>
        <div className="item-button">
          <button onClick={handleEdit}>Edit Item</button>
          <button onClick={handleDelete}>Delete Item</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
