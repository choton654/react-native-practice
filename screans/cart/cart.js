import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AuthContext } from "../user/authcontext";
const Cart = () => {
  const { state, dispatch } = useContext(AuthContext);
  return (
    <View>
      {!state.user ? (
        <View
          style={{
            width: "80%",
            border: "2px solid lightblue",
            marginVertical: 30,
            marginHorizontal: 30,
          }}
        >
          <img
            src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            style={{ maxWidth: "30%", margin: "auto", marginTop: 10 }}
          />
          <View style={{ alignItems: "center" }}>
            <Typography variant="h6">Your cart is empty</Typography>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              It's good day to buy the items tou saved for latter!
            </Typography>

            <Typography
              variant="subtitle2"
              color="primary"
              // onClick={handleShopping}
            >
              <strong style={{ cursor: "pointer" }}>Go to shopping</strong>
            </Typography>
          </View>
        </View>
      ) : (
        <Text>From cart</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
