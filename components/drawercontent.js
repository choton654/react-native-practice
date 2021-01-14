import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import StoreIcon from "@material-ui/icons/Store";
import CategoryIcon from "@material-ui/icons/Category";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
const Drawercontent = ({ navigation }) => {
  return (
    <View>
      <View style={styles.heading}>
        <PersonIcon
          fontSize="default"
          style={{ color: "white", marginTop: 20 }}
        />
        <Typography
          style={{ color: "white", marginTop: 20, marginRight: 40 }}
          variant="subtitle1"
        >
          <strong>Welcome</strong>
        </Typography>
        <Image
          source={{
            uri:
              "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png",
          }}
          style={{
            width: "20px",
            height: 20,
            marginTop: "20px",
          }}
        />
      </View>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button onClick={() => navigation.navigate("AllCategory")}>
          <ListItemIcon>
            <CategoryIcon fontSize="small" style={{ marginLeft: 4 }} />
          </ListItemIcon>
          <Typography variant="subtitle2">All Category</Typography>
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigation.navigate("Order")}>
          <ListItemIcon>
            <StoreIcon fontSize="small" style={{ marginLeft: 4 }} />
          </ListItemIcon>
          <Typography variant="subtitle2">My Order</Typography>
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigation.navigate("Cart")}>
          <ListItemIcon>
            <ShoppingCartIcon fontSize="small" style={{ marginLeft: 4 }} />
          </ListItemIcon>
          <Typography variant="subtitle2">My Cart</Typography>
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigation.navigate("MyAccount")}>
          <ListItemIcon>
            <PersonIcon fontSize="small" style={{ marginLeft: 4 }} />
          </ListItemIcon>
          <Typography variant="subtitle2">My Account</Typography>
        </ListItem>
      </List>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "#1e88e5",
    width: "100%",
    height: "60px",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default Drawercontent;
