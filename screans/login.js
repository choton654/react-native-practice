import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import BASE_URL from "../api";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    axios
      .post(`${BASE_URL}/user/api/login`, { email, password })
      .then((res) => {
        const { token, user } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setEmail("");
        setPassword("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "20%", backgroundColor: "#1e88e5" }}></View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{
          height: 30,
          width: "50%",
          marginHorizontal: "auto",
          marginTop: 20,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{
          height: 30,
          width: "50%",
          marginTop: 10,
          marginHorizontal: "auto",
        }}
      />
      <Button
        mode="contained"
        color="#f44336"
        onPress={handleLogin}
        style={{
          marginTop: 10,
          width: "50%",
          marginHorizontal: "auto",
        }}
      >
        Continue
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
