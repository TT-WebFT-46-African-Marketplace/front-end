import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { editItem, deleteItem } from "../store/actions";

import Item from "./Item";

import "./Item.css";

const ItemList = (props) => {
  const { items } = props;
  console.log("ITEMS", items);

  const history = useHistory();

  const addNewItem = () => {
    history.push("/item-form");
  };

  return (
    <div className="item-container">
      <h3>Here are the items on display</h3>
      <div className="list-container">
        {items.map((item) => {
          return (
            <Item
              item={item}
              editItem={props.editItem}
              deleteItem={props.deleteItem}
            />
          );
        })}
      </div>
      <button onClick={addNewItem}>Add Item</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, { deleteItem, editItem })(ItemList);
