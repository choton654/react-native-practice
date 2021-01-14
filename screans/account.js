import { Typography } from "@material-ui/core";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Account = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "40%",
          backgroundColor: "#1e88e5",
        }}
      >
        {user && (
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
            <Typography variant="h6" style={{ color: "white", marginTop: 10 }}>
              <strong>{user.username}</strong>
            </Typography>
            <Typography variant="subtitle1" style={{ color: "white" }}>
              {user.email}
            </Typography>
          </View>
        )}
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
