import React from "react";

import "./Item.css";

const Item = (props) => {
  const { name, marketLocation, price, description } = props.item;
  //   console.log("NAME", name);
  console.log("PROPS", props);

  const handleEdit = () => {
    props.editItem();
  };
  const handleDelete = () => {};

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="item-title-wrapper">
          <h2>{name}</h2>
          <h3>{marketLocation}</h3>
          <h4>${price}</h4>
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
