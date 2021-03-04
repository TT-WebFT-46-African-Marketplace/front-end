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
  items: [
    {
      name: "Kidney Beans",
      marketLocation: "Mombasa",
      price: 0.66,
      description:
        "The kidney bean is a variety of the common bean. It is named for its visual resemblance in shape and – for the red variety – colour to a human kidney.",
    },
    {
      name: "Avocado",
      marketLocation: "Kitale",
      price: 2.3,
      description:
        "The avocado, a tree likely originating from southcentral Mexico, is classified as a member of the flowering plant family Lauraceae.",
    },
    {
      name: "Coffee",
      marketLocation: "Wajir",
      price: 3.35,
      description:
        "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ",
    },
    {
      name: "Kidney Beans",
      marketLocation: "Mombasa",
      price: 0.66,
      description:
        "The kidney bean is a variety of the common bean. It is named for its visual resemblance in shape and – for the red variety – colour to a human kidney.",
    },
    {
      name: "Avocado",
      marketLocation: "Kitale",
      price: 2.3,
      description:
        "The avocado, a tree likely originating from southcentral Mexico, is classified as a member of the flowering plant family Lauraceae.",
    },
    {
      name: "Coffee",
      marketLocation: "Wajir",
      price: 3.35,
      description:
        "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ",
    },
    {
      name: "Avocado",
      marketLocation: "Kitale",
      price: 2.3,
      description:
        "The avocado, a tree likely originating from southcentral Mexico, is classified as a member of the flowering plant family Lauraceae.",
    },
    {
      name: "Coffee",
      marketLocation: "Wajir",
      price: 3.35,
      description:
        "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. ",
    },
  ],
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
        items: [action.payload],
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
