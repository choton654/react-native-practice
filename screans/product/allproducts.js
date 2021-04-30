import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { CategoryContext } from "../category/categorycontext";
import { ProductContext } from "./productcontext";
// import axios from "axios";
// import BASE_URL from "../../api";
import { getAllproducts } from "./productfunc";
const Allproducts = ({ route, navigation }) => {
  const { catstate } = useContext(CategoryContext);
  const { dispatch } = useContext(ProductContext);
  useEffect(() => {
    getAllproducts(dispatch);
  }, []);

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            Choose your product type
          </ListSubheader>
        }>
        {catstate.categories.map(
          (cat) =>
            cat.parentId &&
            cat.parentId._id.toString() ===
              route.params.subCatid.toString() && (
              <ListItem
                key={cat._id}
                button
                onClick={() => navigation.navigate("Items", { id: cat._id })}
                style={{
                  border: "2px solid #2874f0",
                  margin: "5px 9px",
                  maxWidth: "95%",
                }}>
                <ListItemIcon>
                  <DnsRoundedIcon />
                </ListItemIcon>
                <ListItemText primary={cat.name} />
              </ListItem>
            )
        )}
      </List>
    </View>
  );
};

export default Allproducts;
