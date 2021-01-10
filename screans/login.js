import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#fb641b"
        style={{
          height: 30,
          borderColor: "gray",
          borderWidth: 1,
          width: "50%",
          marginHorizontal: "auto",
        }}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#fb641b"
        style={{
          height: 30,
          borderColor: "gray",
          borderWidth: 1,
          width: "50%",
          marginHorizontal: "auto",
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
