import React from "react";
import { View, Text } from "react-native";

const Items = ({ route, navigation }) => {
  const subcatId = route.params.id;
  return (
    <View>
      <Text>From items {subcatId}</Text>
    </View>
  );
};

export default Items;
