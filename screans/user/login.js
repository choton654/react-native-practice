import axios from "axios";
import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput, Button, Modal, Portal } from "react-native-paper";
import { useNavigation, Link } from "@react-navigation/native";
import { AuthContext } from "./authcontext";
import BASE_URL from "../../api";
const Login = () => {
  const navigation = useNavigation();
  const { state, dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const handleLogin = () => {
    console.log(email, password);
    axios
      .post(`${BASE_URL}/user/api/login`, { email, password })
      .then(async (res) => {
        const { token, user } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        dispatch({ type: "ADD_USER", payload: user });
        setEmail("");
        setPassword("");
        navigation.navigate("Home");
      })
      .catch((err) => console.log(err));
  };
  const handleRegister = () => {
    axios
      .post(`${BASE_URL}/user/api/signup`, { username, email, password })
      .then((res) => {
        console.log(res.data);
        setEmail("");
        setPassword("");
        setUsername("");
        hideModal();
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err.response.data.err);
      });
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "30%",
          backgroundColor: "#2874f0",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            marginLeft: 20,
            marginTop: 30,
          }}
        >
          Please enter your details to continue
        </Text>
        <Image
          source={{
            uri:
              "https://img1a.flixcart.com/www/linchpin/batman-returns/images/sign_up-67d0dc3d.png",
          }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 50,
            marginHorizontal: 20,
          }}
        />
      </View>
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
        Login
      </Button>
      <View style={{ alignItems: "center", flex: 1, marginVertical: 10 }}>
        <Text>Don't have an account?</Text>
        <Text
          style={{ fontWeight: "bold", color: "#1e88e5" }}
          onPress={showModal}
        >
          Register here
        </Text>
      </View>
      <Portal>
        <Modal
          style={{ width: "90%", marginHorizontal: "auto" }}
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text
            style={{
              marginHorizontal: "auto",
              fontSize: "20",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Text>
          <TextInput
            placeholder="Username"
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
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{
              height: 30,
              width: "50%",
              marginHorizontal: "auto",
              marginTop: 10,
            }}
          />

          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{
              color: "black",
              height: 30,
              width: "50%",
              marginTop: 10,
              marginHorizontal: "auto",
            }}
          />

          <Button
            mode="contained"
            color="#f44336"
            onPress={handleRegister}
            style={{
              marginTop: 10,
              width: "50%",
              marginHorizontal: "auto",
            }}
          >
            Register
          </Button>
        </Modal>
      </Portal>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
