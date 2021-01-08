import {
  NavigationContainer,
  useNavigation,
  Link,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";
import { Button, IconButton, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Header from "../components/header";
import Drawercontent from "../components/drawercontent";

const config = {
  screens: {
    "/": {
      screens: {
        Home: "home",
        Details: "details",
      },
    },
  },
};

const prefix = Linking.makeUrl("/");
const linking = {
  prefixes: [prefix],
  config,
};

export function DetailsScreen() {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigation.navigate("Details")}
      >
        <Text style={{ color: "#ffc107" }}>Click me</Text>
      </Button>
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1e88e5",
        },
        headerTintColor: "#eceff1",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => <Header />,
          headerRight: () => (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              // onClick={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <ShoppingCartIcon style={{ color: "#fce4ec" }} />
            </IconButton>
          ),
          headerTitle: () => (
            <View>
              <Typography
                variant="h6"
                //   style={{ marginRight: "50px" }}
                color="inherit"
              >
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img
                      src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
                      style={{ width: 75 }}
                    />
                    <span
                      style={{
                        fontSize: "11px",
                        fontStyle: "italic",
                        marginTop: "-1px",
                      }}
                    >
                      Explore{" "}
                      <span
                        style={{
                          marginRight: "2px",
                          fontWeight: 500,
                          color: "#ffe500",
                        }}
                      >
                        Plus{" "}
                      </span>
                      <img
                        src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
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
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

function RootNavigation() {
  return (
    <NavigationContainer linking={linking}>
      <Drawer.Navigator
        initialRouteName="/"
        drawerContent={(props) => <Drawercontent {...props} />}
      >
        <Drawer.Screen name="/" component={HomeNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
