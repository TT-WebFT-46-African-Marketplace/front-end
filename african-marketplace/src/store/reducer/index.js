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
  ],
  fetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
