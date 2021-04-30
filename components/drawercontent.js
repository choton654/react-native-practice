import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import BASE_URL from "../api";
import PersonIcon from "@material-ui/icons/Person";
import StoreIcon from "@material-ui/icons/Store";
import CategoryIcon from "@material-ui/icons/Category";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { View, Text, StyleSheet, Image } from "react-native";
import { AuthContext } from "../screans/user/authcontext";
import { CategoryContext } from "../screans/category/categorycontext";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
const Drawercontent = ({ navigation }) => {
  const { state, dispatch } = useContext(AuthContext);
  const { catstate, catdispatch } = useContext(CategoryContext);
  useEffect(() => {
    getAllCategory();
  }, []);
  const getAllCategory = () => {
    axios
      .get(`${BASE_URL}/category/api/getcategory`)
      .then((res) => {
        const { category } = res.data;
        catdispatch({ type: "ADD_CATEGORY", payload: category });
      })
      .catch((err) => console.log(err));
  };
  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT_USER" });
    navigation.navigate("Home");
  };
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <View>
      <View style={styles.heading}>
        <PersonIcon
          fontSize='default'
          style={{ color: "white", marginTop: 20 }}
        />
        <Typography
          style={{ color: "white", marginTop: 20, marginRight: 40 }}
          variant='subtitle1'>
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
      <List component='nav' aria-label='main mailbox folders'>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <CategoryIcon fontSize='small' style={{ marginLeft: 4 }} />
          </ListItemIcon>
          <Typography variant='subtitle2'>All Category</Typography>
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          {catstate.categories.length !== 0 ? (
            <View>
              {catstate.categories.map(
                (cat) =>
                  cat.parentId === undefined && (
                    <ListItem
                      key={cat._id}
                      button
                      style={{ backgroundColor: "#e0e0e0" }}
                      onClick={() =>
                        navigation.navigate("SubCategory", { catId: cat._id })
                      }>
                      <ListItemIcon>
                        <DoubleArrowIcon
                          fontSize='small'
                          style={{ marginLeft: 4 }}
                        />
                      </ListItemIcon>
                      <Typography variant='subtitle2'>{cat.name}</Typography>
                    </ListItem>
                  )
              )}
            </View>
          ) : (
            <View>
              <Text>Loading</Text>
            </View>
          )}
        </Collapse>
        <Divider />
        <ListItem button onClick={() => navigation.navigate("Order")}>
          <ListItemIcon>
            <StoreIcon fontSize='small' style={{ marginLeft: 4 }} />
          </ListItemIcon>
          <Typography variant='subtitle2'>My Order</Typography>
        </ListItem>
        <Divider />
        <ListItem button onClick={() => navigation.navigate("Cart")}>
          <ListItemIcon>
            <ShoppingCartIcon fontSize='small' style={{ marginLeft: 4 }} />
          </ListItemIcon>
          <Typography variant='subtitle2'>My Cart</Typography>
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => {
            state.user
              ? navigation.navigate("MyAccount")
              : navigation.navigate("Login");
          }}>
          <ListItemIcon>
            <PersonIcon fontSize='small' style={{ marginLeft: 4 }} />
          </ListItemIcon>
          <Typography variant='subtitle2'>My Account</Typography>
        </ListItem>
        <Divider />
        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon fontSize='small' style={{ marginLeft: 4 }} />
          </ListItemIcon>
          <Typography variant='subtitle2'>Log out</Typography>
        </ListItem>
      </List>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "#2874f0",
    width: "100%",
    height: "60px",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default Drawercontent;
