import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import React, { useContext } from "react";
import { View, Text } from "react-native";
import { CategoryContext } from "../category/categorycontext";

const Allproducts = ({ route, navigation }) => {
  const { catstate, catdispatch } = useContext(CategoryContext);

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
              <ListItem button>
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
