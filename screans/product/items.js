import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image, Button, TouchableOpacity, Modal, StyleSheet, Pressable } from "react-native";
import { Card, Title } from "react-native-paper";
import { ProductContext } from "./productcontext";
import BASE_URL from "../../api";
import Sort from "./sort"
import { getAllproducts } from "./productfunc";

const Items = ({ route, navigation }) => {
  const subcatId = route.params.id;
  const { state, dispatch } = useContext(ProductContext);
  useEffect(() => {
    getAllproducts(dispatch);
  }, []);
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row", maxHeight: 50 }}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true)
          }}
          style={{ width: "50%", height: "50px", border: "1px solid black" }}
        >
          <Text style={{ margin: "auto" }}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "50%", height: "50px", border: "1px solid black" }}
        >
          <Text style={{ margin: "auto" }}>Filter</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        {state.products.map((prod) => prod.category._id.toString() === subcatId.toString() &&
          <View style={{ flex: 1 }} key={prod._id}>
            <Card style={{ marginVertical: 20, margin: "auto", width: "80%" }} onPress={() => navigation.navigate("SingleItem", { itemId: prod._id })}>
              <Card.Content>
                <Title>{prod.name}</Title>
              </Card.Content>
              <Card.Cover source={{ uri: `${BASE_URL}${prod.photo[0].img}` }} />
            </Card>
          </View>
        )}
      </View>
      {/* <Sort modal={modalVisible} modalWork={setModalVisible} /> */}
    </View>
  );
};



export default Items;
