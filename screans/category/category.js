import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Menu, Divider, Button, Card, Title } from "react-native-paper";
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
    <View style={{ flex: 1 }}>
      {catstate.categories.length !== 0 ? (
        <View style={{ flexDirection: "cloumn", flex: 1 }}>
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
                  <Card style={{ marginVertical: 20, width: 300 }}
                    onPress={() => navigation.navigate("AllProducts", { subCatid: cat._id })}
                  >
                    <Card.Content>
                      <Title>{cat.name}</Title>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' }}
                    />
                  </Card>
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
