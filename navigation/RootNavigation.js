import {
  NavigationContainer,
  useNavigation,
  Link,
} from "@react-navigation/native";
import { config } from "./config";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Text, View, Image } from "react-native";
import * as Linking from "expo-linking";
import { IconButton, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ClearIcon from "@material-ui/icons/Clear";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Header from "../components/header";
import Drawercontent from "../components/drawercontent";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Category from "../screans/category/category";
import Account from "../screans/user/account";
import Cart from "../screans/cart/cart";
import Order from "../screans/order";
import Login from "../screans/user/login";
import HomeScreen from "../screans/home";
import { AuthContext } from "../screans/user/authcontext";
import Editprofile from "../screans/user/editprofile";
import Allproducts from "../screans/product/allproducts";
import Items from "../screans/product/items";
import Singleitem from "../screans/product/singleitem";
import Address from "../screans/user/address";
import * as PusherPushNotifications from "@pusher/push-notifications-web";

const beamsClient = new PusherPushNotifications.Client({
  instanceId: "f3a8ef03-ae7a-427f-aa96-8521bd4c33dd",
});

const Tab = createMaterialTopTabNavigator();

const prefix = Linking.makeUrl("/");
const linking = {
  prefixes: [prefix],
  config,
};

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Tab1'
        component={() => (
          <View>
            <Text>From tab1</Text>
          </View>
        )}
      />
      <Tab.Screen
        name='Tab2'
        component={() => (
          <View>
            <Text>From tab2</Text>
          </View>
        )}
      />
    </Tab.Navigator>
  );
}

export function DetailsScreen() {
  return (
    <View>
      <MyTabs />
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigation = () => {
  const navigation = useNavigation();
  const { state, dispatch } = useContext(AuthContext);
  let user;
  // const user = JSON.parse(localStorage.getItem("user")) || state.user
  if (state.user) {
    user = state.user;
  } else {
    user = JSON.parse(localStorage.getItem("user"));
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2874f0",
          borderBottomWidth: 2,
          borderBottomColor: "#2874f0",
        },
        headerTintColor: "#eceff1",
      }}>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerLeft: () => <Header />,
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={() => navigation.navigate("Cart")}>
                <ShoppingCartIcon style={{ color: "#fce4ec" }} />
              </IconButton>
              <View
                style={{
                  color: "#fce4ec",
                  marginHorizontal: 10,
                  marginVertical: 8,
                }}>
                {user ? (
                  <IconButton
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    onClick={() => navigation.navigate("MyAccount")}>
                    <PermIdentityIcon style={{ cursor: "pointer" }} />
                  </IconButton>
                ) : (
                  <Text
                    onPress={() => navigation.navigate("Login")}
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      marginVertical: 5,
                      fontSize: 15,
                    }}>
                    Login
                  </Text>
                )}
              </View>
            </View>
          ),
          headerTitle: () => (
            <View>
              <Typography variant='h6' color='inherit'>
                <Link
                  to='/home'
                  style={{ textDecoration: "none", color: "white" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img
                      src='https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png'
                      style={{ width: 75 }}
                    />
                    <span
                      style={{
                        fontSize: "11px",
                        fontStyle: "italic",
                        marginTop: "-1px",
                      }}>
                      Explore{" "}
                      <span
                        style={{
                          marginRight: "2px",
                          fontWeight: 500,
                          color: "#ffe500",
                        }}>
                        Plus{" "}
                      </span>
                      <img
                        src='https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png'
                        style={{ width: 10 }}
                      />{" "}
                    </span>
                  </div>
                </Link>
              </Typography>
            </View>
          ),
        }}
      />
      <Stack.Screen name='Details' component={DetailsScreen} />
      <Stack.Screen name='SubCategory' component={Category} />
      <Stack.Screen name='AllProducts' component={Allproducts} />
      <Stack.Screen name='Items' component={Items} />
      <Stack.Screen name='SingleItem' component={Singleitem} />
      <Stack.Screen name='Editprofile' component={Editprofile} />
      <Stack.Screen name='AddLocation' component={Address} />
      <Stack.Screen
        name='MyAccount'
        component={Account}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{
                  uri:
                    "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png",
                }}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Typography
                variant='subtitle1'
                style={{ marginLeft: 20, color: "white" }}>
                My Account
              </Typography>
            </View>
          ),
        }}
      />
      <Stack.Screen name='Cart' component={Cart} />
      <Stack.Screen name='Order' component={Order} />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerTitle: () => (
            <Link
              to='/home'
              style={{ textDecoration: "none", color: "white", marginTop: 5 }}>
              <img
                src='https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png'
                style={{ width: 60 }}
              />
            </Link>
          ),
          headerRight: () => (
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={() => navigation.navigate("Home")}>
              <ClearIcon style={{ color: "#fce4ec" }} fontSize='default' />
            </IconButton>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

function RootNavigation() {
  useEffect(() => {
    beamsClient
      .start()
      .then(() => beamsClient.getDeviceId())
      .then((deviceId) => {
        console.log(deviceId); // Will log something like web-1234-1234-1234-1234
      })
      .catch((e) => console.error("Could not get device id", e));
  }, []);

  return (
    <NavigationContainer linking={linking}>
      <Drawer.Navigator
        // initialRouteName="/"
        drawerContent={(props) => <Drawercontent {...props} />}>
        <Drawer.Screen name='/' component={HomeNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
