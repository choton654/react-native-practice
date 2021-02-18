import { TextField } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AuthContext } from "./authcontext";
import BASE_URL from "../../api";
import axios from "axios";
const Address = ({ navigation }) => {
    const { state, dispatch } = useContext(AuthContext);
    const [address, setAddress] = useState("");
    const [postalCode, setPostalcode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [district, setDistrict] = useState("");

    const newAddress = {
        address,
        postalCode,
        city,
        country,
        contactNo,
        district,
    };
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user && user._id;
    const token = localStorage.getItem("token");
    const addAddress = () => {
        console.log(newAddress, userId);
        console.log(newAddress);
        axios
            .post(
                `${BASE_URL}/user/api/${userId}/address`,
                { newAddress },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((res) => {
                const { updatedUser } = res.data;
                console.log(updatedUser);
                dispatch({ type: "ADD_ADDRESS", payload: updatedUser });
                localStorage.setItem("user", updatedUser)
            })
            .catch((err) => console.log(err));
    };
    return (
        <View style={{ flex: 1, margin: "auto" }}>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginHorizontal: 20, marginVertical: 10 }}>
                To order your products, please enter your address here. We
                will send updates occasionally.
            </Text>
            <View style={{ flex: 1, marginHorizontal: 20, marginVertical: 10 }}>
                <TextField
                    label="Address"
                    id="address"
                    margin="dense"
                    name="address"
                    variant="outlined"
                    value={address}
                    style={{
                        maxWidth: "90%",
                        margin: "auto"
                    }}
                    onChange={(e) => setAddress(e.target.value)}
                    helperText="Enter your address"
                />
                <TextField
                    style={{ marginLeft: "20px" }}
                    label="Postal Code"
                    id="postal code"
                    margin="dense"
                    name="postalcode"
                    variant="outlined"
                    value={postalCode}
                    style={{
                        maxWidth: "90%",
                        margin: "auto"
                    }}
                    onChange={(e) => setPostalcode(e.target.value)}
                    helperText="Enter your postal code"
                />
                <TextField
                    label="City"
                    id="city"
                    margin="dense"
                    name="city"
                    variant="outlined"
                    value={city}
                    style={{
                        maxWidth: "90%",
                        margin: "auto"
                    }}
                    onChange={(e) => setCity(e.target.value)}
                    helperText="Enter your city"
                />
                <TextField
                    style={{ marginLeft: "20px" }}
                    label="District"
                    id="district"
                    margin="dense"
                    name="district"
                    variant="outlined"
                    value={district}
                    style={{
                        maxWidth: "90%",
                        margin: "auto"
                    }}
                    onChange={(e) => setDistrict(e.target.value)}
                    helperText="Enter your district"
                />
                <TextField
                    label="Country"
                    id="country"
                    margin="dense"
                    name="country"
                    variant="outlined"
                    value={country}
                    style={{
                        maxWidth: "90%",
                        margin: "auto"
                    }}
                    onChange={(e) => setCountry(e.target.value)}
                    helperText="Enter your country"
                />
                <TextField
                    style={{ marginLeft: "20px" }}
                    label="Contact No."
                    required={true}
                    id="phon no"
                    margin="dense"
                    name="contactno"
                    variant="outlined"
                    value={contactNo}
                    style={{
                        maxWidth: "90%",
                        margin: "auto"
                    }}
                    onChange={(e) => setContactNo(e.target.value)}
                    helperText="Enter your contact no."
                />
                <TouchableOpacity
                    style={{ width: "50%", height: "50px", backgroundColor: "#f44336", margin: "auto" }}
                    onPress={addAddress}
                >
                    <Text style={{ margin: "auto", fontWeight: "bold", color: "white" }}>Save Address</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Address


