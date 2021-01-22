import { Typography, Paper, Divider } from "@material-ui/core";
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
const Account = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigation = useNavigation();
  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT_USER" });
    navigation.navigate("Home");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#e0e0e0" }}>
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
            <Typography variant="h6" style={{ color: "white", marginTop: 5 }}>
              <strong>{state.user.username}</strong>
            </Typography>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
                width: "100%",
                height: 30,
              }}
            >
              <Typography
                variant="subtitle1"
                style={{ color: "white", marginLeft: 105 }}
              >
                {state.user.email}
              </Typography>

              <EditOutlinedIcon
                fontSize="small"
                style={{ color: "white", marginRight: 20 }}
                onClick={() => navigation.navigate("Editprofile")}
              />
            </View>
          </View>
        )}
      </View>
      <Paper
        style={{ height: 100, width: "95%", marginLeft: 8, marginTop: 10 }}
      >
        <Typography variant="h6" style={{ margin: "10px 20px" }}>
          My Orders
        </Typography>
        <Divider />
      </Paper>
      <Paper
        style={{ height: 100, width: "95%", marginLeft: 8, marginTop: 10 }}
      >
        <Typography variant="h6" style={{ margin: "10px 20px" }}>
          My Reviews
        </Typography>
        <Divider />
      </Paper>
      <Paper
        style={{
          height: 100,
          width: "95%",
          marginLeft: 8,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Typography variant="h6" style={{ margin: "10px 20px" }}>
          My Address
        </Typography>
        <Divider />
      </Paper>
      <Paper style={{ height: 100, width: "100%", marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <SettingsIcon fontSize="small" style={{ marginTop: 5 }} />
          <Typography
            variant="h6"
            style={{ marginLeft: 10 }}
            onClick={() => navigation.navigate("Editprofile")}
          >
            Account Settings
          </Typography>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <ExitToAppIcon fontSize="small" style={{ marginTop: 5 }} />
          <Typography
            variant="h6"
            style={{ marginLeft: 10 }}
            onClick={handleLogout}
          >
            Log out
          </Typography>
        </View>
      </Paper>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
