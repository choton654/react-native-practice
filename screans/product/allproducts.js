import React from "react";
import { View, Text } from "react-native";

const Allproducts = ({route, navigation}) => {
  return (
    <View>
      <Text>From allproducts {route.params.subCatid}</Text>
    </View>
  );
};

export default Allproducts;
