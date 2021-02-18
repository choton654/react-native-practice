import { Paper } from "@material-ui/core";
import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { CartContext } from "./cart/cartcontext";
import { getCartItems } from "./cart/cartaction";
import StarRateIcon from "@material-ui/icons/StarRate";
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';

import BASE_URL from "../api";
const Order = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user && user._id;
  const token = localStorage.getItem("token");
  const { cartstate, cartdispatch } = useContext(CartContext);

  useEffect(() => {
    getCartItems(cartdispatch, token, userId)
  }, [])
  return (
    <View style={{ flex: 1 }}>
      {user.address.length === 0 ? <View><Text>Add an address</Text></View> : <View style={{ maxWidth: "100%", height: 215 }}>
        <Paper style={{ display: "flex", backgroundColor: "white", flexDirection: "column" }}>
          <Text style={{ fontSize: 18, marginHorizontal: 20, marginTop: 20 }}>{user.username}</Text>
          <Text style={{ fontSize: 16, marginHorizontal: 20, marginVertical: 5 }}>{user.address[0].address}-{user.address[0].postalCode}</Text>
          <Text style={{ fontSize: 16, marginHorizontal: 20, marginBottom: 20 }}>{user.address[0].contactNo}</Text>
          <TouchableOpacity
            style={{ width: "90%", height: "40px", backgroundColor: "#2874f0", marginBottom: 20, marginHorizontal: "auto" }}

          >
            <Text style={{ margin: "auto", fontWeight: "bold", color: "white" }}>Change Address</Text>
          </TouchableOpacity>
        </Paper>
      </View>}

      <View style={{ maxWidth: "100%", height: 220 }}>
        <Paper style={{ display: "flex", backgroundColor: "white", flexDirection: "column" }}>
          {cartstate.cart ? cartstate.cart.cartItem && cartstate.cart.cartItem.map((item) =>
            <View
              key={item._id}
              style={{
                flex: 1, width: "100%", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#fafafa"
              }}>
              <View style={{
                marginHorizontal: 10,
                marginVertical: 20,
                maxWidth: "70%"
              }}>
                <Text style={{ fontWeight: "bold", fontSize: 13 }}>{item.productId.name}  ({item.quantity})</Text>
                <View style={{
                  marginVertical: "10px",
                  width: "40px",
                  padding: "2px 7px",
                  borderRadius: "14px",
                  fontSize: "16px",
                  backgroundColor: "#26a541",
                  verticalAlign: "baseline",
                  lineHeight: "normal",
                  display: "inline-block",
                  color: "#fff",
                  fontWeight: "900",
                }}>
                  <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between" }}>
                    <Text style={{ fontWeight: "bold", marginLeft: 6, marginVertical: 6, color: "white", fontSize: 10 }}>{item.productId.ratings}</Text>
                    <StarRateIcon
                      fontSize="small"
                      style={{ marginTop: "2px", marginRight: 5 }}
                    />
                  </View>
                </View>
                <Text style={{ fontSize: 15 }}>₹{parseInt(item.price) * parseInt(item.quantity)}</Text>
                <TouchableOpacity style={{ border: "1px solid black", maxWidth: 100, height: 30, marginTop: 20, flexDirection: "row" }}>
                  <DeleteIcon fontSize="small" style={{ color: "grey", margin: "auto" }} />
                  <Text style={{ margin: "auto" }}>Remove</Text>
                </TouchableOpacity>
              </View>
              <Image source={{
                uri: `${BASE_URL}${item.productId.photo && item.productId.photo[0].img}`
              }}
                style={{ width: 50, height: 50, marginHorizontal: 10, marginVertical: 10 }} />

            </View>
          ) : <View style={{ flex: 1, marginVertical: 50, marginHorizontal: "auto" }} >
              <CircularProgress />
            </View>}
        </Paper>
      </View>
      <View style={{
        flex: 1, flexDirection: "row", position: "sticky", top: "0", justifyContent: "space-between", backgroundColor: "#fafafa",
        marginTop: 30, borderTop: "1px solid red"
      }}>
        <View style={{ marginHorizontal: 20, marginVertical: 20, flexDirection: "column" }}>
          <Text style={{ fontSize: 20 }}>₹{cartstate.cart && cartstate.cart.price}</Text>
          <Text style={{ fontSize: 10, color: "blue" }}>view price details</Text>
        </View>
        <TouchableOpacity
          style={{ width: "50%", height: "50px", backgroundColor: "#f44336", marginHorizontal: 10, marginVertical: 20 }}
        >
          <Text style={{ margin: "auto", fontWeight: "bold", color: "white" }}>Continue</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
