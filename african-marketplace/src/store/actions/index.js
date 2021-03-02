import { axiosWithAuth } from "../../helpers/axiosWithAuth";

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

export const fetchItems = (id) => (dispatch) => {
  dispatch({ type: FETCH_ITEM_DATA_START });
  axiosWithAuth()
    .get("/")
    .then((res) => {
      dispatch({ type: FETCH_ITEM_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_ITEM_DATA_FAIL, payload: err.message });
    });
};

export const addItem = (newItem, history, setFormValues, InitialFormValues) => (
  dispatch
) => {
  axiosWithAuth()
    .post("/", newItem)
    .then((res) => {
      dispatch({ type: ADD_ITEM, payload: res.data });
      history.push("/dashboard");
    })
    .catch((err) => {
      dispatch({ type: ADD_ITEM_FAIL, payload: err.message });
    })
    .finally(() => {
      setFormValues(InitialFormValues);
    });
};

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
