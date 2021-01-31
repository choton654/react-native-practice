import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Menu, Divider, Button } from "react-native-paper";
import axios from "axios";
import BASE_URL from "../../api";
import { CategoryContext } from "./categorycontext";
const Category = ({route,navigation}) => {
  const {catId} = route.params;
  const { catstate, catdispatch } = useContext(CategoryContext);
  const [visible, setVisible] = React.useState(false);
  
  const openMenu = () => setVisible(true);
  
  const closeMenu = () => setVisible(false);
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
  return (
    <View style={{flex:1}}>
      {catstate.categories.length !== 0 ? (
        <View style={{flex:1, flexDirection:"row"}}>
          {catstate.categories.map(
            (cat) => cat.parentId && cat.parentId._id.toString() === catId.toString() && 
          <View style={{flex:1, flexDirection:"row"}}>
           
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={<Button onPress={openMenu}>{cat.name}</Button>}>
              <Menu.Item onPress={() => {}} title="Item 1" />
              <Menu.Item onPress={() => {}} title="Item 2" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
          </View>
          ) 
          }
        </View>
      ) : (
        <View>
          <Text>Loading</Text>
        </View>
      )}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
