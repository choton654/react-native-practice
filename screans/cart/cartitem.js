import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import StarRateIcon from "@material-ui/icons/StarRate";
import DeleteIcon from '@material-ui/icons/Delete';
import { handleOrder } from "./cartaction";
import BASE_URL from "../../api"
const Cartitem = ({ cart, orderId, user, token, cartdispatch, navigation }) => {
    const cartItemIds =
        cart &&
        cart.cartItem &&
        cart.cartItem.map((item) => item._id);
    return (
        <View style={{ flex: 1 }}>
            {cart.cartItem && cart.cartItem.map((item) =>
                <View
                    key={item._id}
                    style={{
                        flex: 1, width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: 20, backgroundColor: "#fafafa"
                    }}>
                    <View style={{
                        marginHorizontal: 10,
                        marginVertical: 20,
                        maxWidth: "70%"
                    }}>
                        <Text style={{ fontWeight: "bold", fontSize: 13 }}>{item.productId.name}</Text>
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
                        <Text style={{ fontSize: 15 }}>₹{item.price}</Text>
                        <TouchableOpacity style={{ border: "1px solid black", maxWidth: "35%", height: 30, marginTop: 20, flexDirection: "row" }}>
                            <DeleteIcon fontSize="small" style={{ color: "grey", margin: "auto" }} />
                            <Text style={{ margin: "auto" }}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={{
                        uri: `${BASE_URL}${item.productId.photo && item.productId.photo[0].img}`
                    }}
                        style={{ width: 50, height: 50, marginHorizontal: 10, marginVertical: 10 }} />

                </View>
            )}
            <View style={{
                flex: 1, flexDirection: "row", position: "sticky", bottom: "0", justifyContent: "space-between", backgroundColor: "#fafafa",
                marginTop: 30
            }}>
                <View style={{ marginHorizontal: 20, marginVertical: 20, flexDirection: "column" }}>
                    <Text style={{ fontSize: 20 }}>₹{cart.price}</Text>
                    <Text style={{ fontSize: 10, color: "blue" }}>view price details</Text>
                </View>
                <TouchableOpacity
                    style={{ width: "50%", height: "50px", backgroundColor: "#f44336", marginHorizontal: 10, marginVertical: 20 }}
                >
                    <Text style={{ margin: "auto", fontWeight: "bold", color: "white" }} onPress={() =>
                        handleOrder(
                            cart.price,
                            cartItemIds,
                            orderId,
                            user,
                            token,
                            cartdispatch,
                            navigation
                        )
                    }>Place Order</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Cartitem

const styles = StyleSheet.create({})
