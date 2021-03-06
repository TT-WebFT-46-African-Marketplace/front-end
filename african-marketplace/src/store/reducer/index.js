import {
  FETCH_ITEM_DATA_START,
  FETCH_ITEM_DATA_SUCCESS,
  FETCH_ITEM_DATA_FAIL,
  ADD_ITEM,
  ADD_ITEM_FAIL,
  DELETE_ITEM,
  DELETE_ITEM_FAIL,
  EDIT_USER_INFO,
  EDIT_USER_FAIL,
  ITEM_EDIT,
  ITEM_EDIT_FAIL,
} from "./../actions/index";

const initialState = {
  users: [],
  items: [],
  fetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEM_DATA_START:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_ITEM_DATA_SUCCESS:
      return {
        ...state,
        items: action.payload,
        fetching: false,
      };
    case FETCH_ITEM_DATA_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case ADD_ITEM:
      return {
        ...state,
        fetching: false,
        items: [...state, action.payload],
      };
    case ADD_ITEM_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        fetching: false,
        items: action.payload,
      };
    case DELETE_ITEM_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case EDIT_USER_INFO:
      return {
        ...state,
        fetching: false,
        users: action.payload,
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case ITEM_EDIT:
      return {
        ...state,
        fetching: false,
        items: action.payload,
      };
    case ITEM_EDIT_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
