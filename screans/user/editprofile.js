import { Typography, Paper, Divider, TextField } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import React, { useEffect, useState, useContext } from "react";
import {
  NavigationContainer,
  useNavigation,
  Link,
} from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./authcontext";
const Editprofile = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#e0e0e0", width: "100%" }}>
      <View
        style={{
          height: "25%",
          backgroundColor: "#2874f0",
        }}
      >
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
        <TextField
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
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            margin: "auto",
            color: "#2874f0",
          }}
        >
          SUBMIT
        </Text>

        <Text
          style={{
            fontSize: 20,
            color: "#2874f0",
            marginTop: "auto",
            marginLeft: 20,
            marginBottom: 20,
          }}
        >
          Change Password
        </Text>
      </View>
    </View>
  );
};

export default Editprofile;

const styles = StyleSheet.create({});
