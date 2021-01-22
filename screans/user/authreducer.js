export const initialState = {
  user: null || JSON.parse(localStorage.getItem("user")),
  error: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
      };
  }
};
