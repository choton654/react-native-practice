import React from "react";
import {
  // NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const Header = () => {
  const navigation = useNavigation();

  return (
    <div>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <MenuIcon style={{ color: "#fce4ec", marginLeft: "20px" }} />
      </IconButton>
    </div>
  );
};

export default Header;
