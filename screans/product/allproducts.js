import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { CategoryContext } from "../category/categorycontext";
import axios from "axios";
import BASE_URL from "../../api";
const Allproducts = ({ route, navigation }) => {
  const { catstate, catdispatch } = useContext(CategoryContext);
  useEffect(() => {
    getAllproducts();
  }, []);

  const getAllproducts = () => {
    axios
      .get(`${BASE_URL}/product/api/getallproducts`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Choose your product type
          </ListSubheader>
        }
      >
        {catstate.categories.map(
          (cat) =>
            cat.parentId &&
            cat.parentId._id.toString() ===
              route.params.subCatid.toString() && (
              <ListItem
                key={cat._id}
                button
                style={{
                  border: "2px solid #2874f0",
                  margin: "5px 9px",
                  maxWidth: "95%",
                }}
              >
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
