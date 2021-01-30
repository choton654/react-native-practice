import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Menu, Divider, Button } from "react-native-paper";
import axios from "axios";
import BASE_URL from "../../api";
import { CategoryContext } from "./categorycontext";
const Category = ({ route, navigation }) => {
  const { catId } = route.params;
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
    <View>
      {catstate.categories.length !== 0 ? (
        <View style={{ flexDirection: "column" }}>
          {catstate.categories.map(
            (cat) =>
              cat.parentId &&
              cat.parentId._id.toString() === catId.toString() && (
                <View
                  key={cat._id}
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                      <Button
                        style={{
                          color: "red",
                          backgroundColor: "pink",
                          marginHorizontal: 20,
                          marginVertical: 20,
                          height: "40px",
                        }}
                        onPress={openMenu}
                      >
                        {cat.name}
                      </Button>
                    }
                  >
                    {catstate.categories.map(
                      (category) =>
                        category.parentId &&
                        category.parentId._id.toString() ===
                          cat._id.toString() && (
                          <Menu.Item
                            key={category._id}
                            onPress={() => navigation.navigate("AllProducts")}
                            title={category.name}
                          />
                        )
                    )}
                  </Menu>
                </View>
              )
          )}
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
