export const initialState = {
  categories: [],
  subcategories: [],
  subcategories2: [],
  product_cat: [],
  filtered_prod: [],
  product_by_choice: [],
  error: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: action.payload,
      };
  }
};
