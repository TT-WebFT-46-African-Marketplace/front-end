import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { editItem, deleteItem } from "../store/actions";

import Item from "./Item";

import "./Item.css";

const ItemList = (props) => {
  const { items, fetchItems } = props;

  const history = useHistory();

  useEffect(() => {
    fetchItems();
  }, []);

  const addNewItem = () => {
    history.push("/item-form");
  };

  return (
    <div className="item-container">
      <h1>Check out these items!</h1>
      <div className="list-container">
        {items.map((item) => {
          return (
            <Item
              key={item.itemcode}
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
