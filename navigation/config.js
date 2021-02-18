export const config = {
  screens: {
    "/": {
      screens: {
        Home: "home",
        Details: {
          path: "details",
          screens: {
            Tab1: "tab1",
            Tab2: "tab2",
          },
        },
        SubCategory: "subcategory",
        AllProducts: "allproducts",
        Items: "items",
        SingleItem: "singleitem",
        Cart: "cart",
        Order: "order",
        MyAccount: "account",
        Login: "login",
        Editprofile: "editprofile",
        AddLocation: "addaddress"
      },
    },
  },
};
