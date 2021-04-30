export const initialState = {
  products: [],
  singleProduct: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
  }
};
