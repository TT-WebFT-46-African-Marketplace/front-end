import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import axios from "axios";

export const FETCH_ITEM_DATA_START = "FETCH_ITEM_DATA_START";
export const FETCH_ITEM_DATA_SUCCESS = "FETCH_ITEM_DATA_SUCCESS";
export const FETCH_ITEM_DATA_FAIL = "FETCH_ITEM_DATA_FAIL";
export const ADD_ITEM = "ADD_ITEM";
export const ADD_ITEM_FAIL = "ADD_ITEM_FAIL";
export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_ITEM_FAIL = "DELETE_ITEM_FAIL";
export const EDIT_USER_INFO = "EDIT_USER_INFO";
export const EDIT_USER_FAIL = "EDIT_USER_FAIL";
export const ITEM_EDIT = "ITEM_EDIT";
export const ITEM_EDIT_FAIL = "ITEM_EDIT_FAIL";

export const fetchItems = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ITEM_DATA_START });
    console.log("Hello I am here");
    axios
      .get("https://webft-46-african-marketplace.herokuapp.com/items/items")
      .then((res) => {
        console.log("res in fetch items", res);
        dispatch({ type: FETCH_ITEM_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_ITEM_DATA_FAIL, payload: err.message });
      });
  };
};

// No endpoint to add item
// addItem function does not work right now
export const addItem = (newItem, history) => {
  console.log("hey!");
  return (dispatch) => {
    axios
      .post(
        "https://webft-46-african-marketplace.herokuapp.com/items/items",
        newItem
      )
      .then((res) => {
        console.log("RES", res);
        dispatch({ type: ADD_ITEM, payload: res.data });
        history.push("/dashboard");
      })
      .catch((err) => {
        dispatch({ type: ADD_ITEM_FAIL, payload: err.message });
      });
  };
};

// No endpoint to delete item
// deleteItem function does not work right now
export const deleteItem = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(`//${id}`)
    .then((res) => {
      dispatch({ type: DELETE_ITEM, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_ITEM_FAIL, payload: err.message });
    });
};

// No endpoint to edit item
// editItem function does not work right now
export const editItem = (id, data) => (dispatch) => {
  axiosWithAuth()
    .put(`//${id}`, data)
    .then((res) => {
      dispatch({ type: ITEM_EDIT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ITEM_EDIT_FAIL, payload: err.message });
    });
};

export const editUserInfo = (id, data) => (dispatch) => {
  axiosWithAuth()
    .put(`//${id}`, data)
    .then((res) => {
      dispatch({ type: EDIT_USER_INFO, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: EDIT_USER_FAIL, payload: err.message });
    });
};
