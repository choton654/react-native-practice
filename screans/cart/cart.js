import { Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AuthContext } from "../user/authcontext";
import { CartContext } from "./cartcontext";
import { getCartItems } from "./cartaction";
import Cartitem from "./cartitem";
const Cart = () => {
  const { cartstate, cartdispatch } = useContext(CartContext);
  const { state, dispatch } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user && user._id;
  useEffect(() => {
    getCartItems(cartdispatch, token, userId)
  }, [])
  return (
    <View>
      {cartstate.cart === null ? (
        <View
          style={{
            width: "80%",
            marginVertical: 30,
            marginHorizontal: 30,
          }}
        >
          <Image style={{ maxWidth: "30%", height: "40%", marginVertical: 10, marginHorizontal: 100 }} source={{
            uri: "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          }} />
          <View style={{ alignItems: "center" }}>
            <Typography variant="h6">Your cart is empty</Typography>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              It's good day to buy the items to saved for latter!
            </Typography>
            <Typography
              variant="subtitle2"
              color="primary"
            // onClick={handleShopping}
            >
              <Text style={{ fontWeight: "bold", cursor: "pointer" }}>Go to shopping</Text>
            </Typography>
          </View>
        </View>
      ) : (
          <View>
            <Cartitem cart={cartstate.cart} />
          </View>
        )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
