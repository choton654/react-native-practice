import { Typography, Paper, Divider } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React, { useEffect, useContext } from "react";
import {
  // NavigationContainer,
  useNavigation,
  // Link,
} from "@react-navigation/native";
import axios from "axios";
import BASE_URL from "../../api";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AuthContext } from "./authcontext";
const Account = () => {
  const { dispatch } = useContext(AuthContext);
  const navigation = useNavigation();
  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT_USER" });
    navigation.navigate("Home");
  };
  const user1 = JSON.parse(localStorage.getItem("user"));
  const userId = user1 && user1._id;
  const token = localStorage.getItem("token");
  useEffect(() => {
    singleUser();
  }, []);

  const singleUser = () => {
    axios
      .get(`${BASE_URL}/user/api/${userId}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const { user } = res.data;
        dispatch({ type: "USER_PROFILE", payload: user });
      })
      .catch((err) => console.log(err));
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#e0e0e0" }}>
      <View
        style={{
          height: "25%",
          backgroundColor: "#2874f0",
        }}>
        {user1 && (
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#2874f0",
            }}>
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
            <Text
              style={{
                color: "white",
                marginVertical: 5,
                fontSize: 17,
                fontWeight: "bold",
              }}>
              {user1.username}
            </Text>
            <Text style={{ color: "white", marginVertical: 5, fontSize: 15 }}>
              {user1.email}
            </Text>
            <View style={{ flex: 1, marginVertical: 5 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Editprofile")}
                style={{ flexDirection: "row", backgroundColor: "white" }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "#2874f0",
                    marginHorizontal: 10,
                    marginVertical: 5,
                  }}>
                  Edit profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      <View style={{ flex: 1, marginVertical: 20 }}>
        <View style={{ flex: 1, marginVertical: 10 }}>
          <Paper style={{ height: 100, width: "95%", margin: "auto" }}>
            <View style={{ flex: 1, marginVertical: 15 }}>
              <Text style={{ fontSize: 20, marginHorizontal: 20 }}>
                My Orders
              </Text>
            </View>
            <Divider />
            <View style={{ flex: 1, marginVertical: 10 }}>
              <Text
                style={{
                  fontSize: 15,
                  marginHorizontal: 20,
                  marginLeft: "auto",
                  color: "#2874f0",
                }}>
                View orders
              </Text>
            </View>
          </Paper>
          <Paper style={{ height: 100, width: "95%", margin: "auto" }}>
            <View style={{ flex: 1, marginVertical: 15 }}>
              <Text style={{ fontSize: 20, marginHorizontal: 20 }}>
                My Reviews
              </Text>
            </View>
            <Divider />
            <View style={{ flex: 1, marginVertical: 10 }}>
              <Text
                style={{
                  fontSize: 15,
                  marginHorizontal: 20,
                  marginLeft: "auto",
                  color: "#2874f0",
                }}>
                View reviews
              </Text>
            </View>
          </Paper>
          <Paper
            style={{
              height: 100,
              width: "95%",
              margin: "auto",
            }}>
            <View style={{ flex: 1, marginVertical: 15 }}>
              <Text style={{ fontSize: 20, marginHorizontal: 20 }}>
                My Address
              </Text>
            </View>
            <Divider />
            <View style={{ flex: 1, marginVertical: 10 }}>
              <Text
                style={{
                  fontSize: 15,
                  marginHorizontal: 20,
                  marginLeft: "auto",
                  color: "#2874f0",
                }}
                onPress={() => navigation.navigate("AddLocation")}>
                Add an address
              </Text>
            </View>
          </Paper>
        </View>

        <Paper style={{ height: 100, width: "100%", marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 20,
              marginTop: 10,
              marginBottom: 10,
            }}>
            <SettingsIcon fontSize='small' style={{ marginTop: 5 }} />
            <Typography
              variant='h6'
              style={{ marginLeft: 10 }}
              onClick={() => navigation.navigate("Editprofile")}>
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
            }}>
            <ExitToAppIcon fontSize='small' style={{ marginTop: 5 }} />
            <Typography
              variant='h6'
              style={{ marginLeft: 10 }}
              onClick={handleLogout}>
              Log out
            </Typography>
          </View>
        </Paper>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
