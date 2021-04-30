// import { Typography, Paper, Divider, TextField } from "@material-ui/core";
import { TextInput, Button, Modal, Portal } from "react-native-paper";
import React, { useState, useContext } from "react";
// import {
//   NavigationContainer,
//   useNavigation,
//   Link,
// } from "@react-navigation/native";
import axios from "axios";
import { StyleSheet, Text, View, Image } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./authcontext";
import BASE_URL from "../../api";

const Editprofile = () => {
  const { state, dispatch } = useContext(AuthContext);
  // const navigation = useNavigation();
  const [username, setUsername] = useState(state.user?.username);
  const [email, setEmail] = useState(state.user?.email);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;
  const token = localStorage.getItem("token");
  const [oldPass, setOldpass] = useState("");
  const [newPass, setNewpass] = useState("");
  const [confirmPass, setConfirmpass] = useState("");
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const handleSubmit = () => {
    axios
      .put(
        `${BASE_URL}/user/api/${userId}/updateuser`,
        { username, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const { updatedUser } = res.data;
        console.log(updatedUser);
        dispatch({ type: "EDIT_USER", payload: updatedUser });
      })
      .catch((err) => console.log(err));
  };
  const handlePassword = () => {
    console.log(oldPass, newPass, confirmPass);
    if (newPass === confirmPass) {
      axios
        .put(
          `${BASE_URL}/user/api/${userId}/changepassword`,
          { oldPass, newPass },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    } else {
      console.log("password does not match");
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#e0e0e0", width: "100%" }}>
      <View
        style={{
          height: "25%",
          backgroundColor: "#2874f0",
        }}>
        {state.user && (
          <View style={{ alignItems: "center" }}>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Image
                source={{
                  uri:
                    "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
                }}
                style={{
                  width: 70,
                  height: 70,
                  marginTop: 10,
                  borderRadius: 50,
                }}
              />
              <Text style={{ marginHorizontal: 10, color: "white" }}>or</Text>
              <Image
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZ8PEnVJDlw7ulGKS3k2tTjE7zTvtgdodZg&usqp=CAU",
                }}
                style={{
                  width: 70,
                  height: 70,
                  marginTop: 10,
                  borderRadius: 50,
                }}
              />
            </View>
          </View>
        )}
      </View>
      <View style={{ backgroundColor: "#f5f5f5", flex: 1 }}>
        {/* <TextField
          id="standard-basic"
          label="Username"
          value={state.user.username}
          style={{ width: "95%", marginLeft: 10, marginTop: 20 }}
        />
        <TextField
          id="standard-basic"
          label="Email"
          value={state.user.email}
          style={{ width: "95%", marginLeft: 10, marginTop: 20 }}
        /> */}
        <TextInput
          placeholder='Username'
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={{
            height: 30,
            width: "50%",
            marginHorizontal: "auto",
            marginTop: 20,
          }}
        />
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            height: 30,
            width: "50%",
            marginTop: 10,
            marginHorizontal: "auto",
          }}
        />
        <Text
          onPress={handleSubmit}
          style={{
            fontSize: 20,
            fontWeight: "bold",
            margin: "auto",
            color: "#2874f0",
          }}>
          SUBMIT
        </Text>

        <Text
          onPress={showModal}
          style={{
            fontSize: 20,
            color: "#2874f0",
            marginTop: "auto",
            marginLeft: 20,
            marginBottom: 20,
          }}>
          Change Password
        </Text>
        <Portal>
          <Modal
            style={{ width: "90%", marginHorizontal: "auto" }}
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text
              style={{
                marginHorizontal: "auto",
                fontSize: "20",
                fontWeight: "bold",
              }}>
              Change Password
            </Text>
            <TextInput
              placeholder='Old password'
              value={oldPass}
              onChangeText={(text) => setOldpass(text)}
              style={{
                height: 30,
                width: "50%",
                marginHorizontal: "auto",
                marginTop: 20,
              }}
            />
            <TextInput
              placeholder='New password'
              value={newPass}
              onChangeText={(text) => setNewpass(text)}
              style={{
                height: 30,
                width: "50%",
                marginHorizontal: "auto",
                marginTop: 10,
              }}
            />
            <TextInput
              placeholder='Confirm password'
              value={confirmPass}
              onChangeText={(text) => setConfirmpass(text)}
              style={{
                height: 30,
                width: "50%",
                marginHorizontal: "auto",
                marginTop: 10,
              }}
            />
            <Button
              mode='contained'
              color='#f44336'
              onPress={handlePassword}
              style={{
                marginTop: 10,
                width: "50%",
                marginHorizontal: "auto",
              }}>
              Done
            </Button>
          </Modal>
        </Portal>
      </View>
    </View>
  );
};

export default Editprofile;

const styles = StyleSheet.create({});
