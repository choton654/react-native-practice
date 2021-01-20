import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import BASE_URL from "../../api";
import { CategoryContext } from "./categorycontext";
const Category = () => {
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
  return (
    <View>
      {catstate.categories.length !== 0 ? (
        <View>
          <Text>From Categoty</Text>
          {catstate.categories.map(
            (cat) => cat.parentId === undefined && <Text>{cat.name}</Text>
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
