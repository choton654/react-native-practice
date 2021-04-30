import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { Button } from "@material-ui/core";
import { SearchBar } from "react-native-elements";
const HomeScreen = () => {
  const navigation = useNavigation();
  // const [search, setSearch] = useState("");
  return (
    <View>
      {/* <SearchBar
        style={{ backgroundColor: "white", paddingHorizontal: 0 }}
        placeholder="Type Here..."
        onChangeText={(text) => setSearch(text)}
        value={search}
        lightTheme="false"
      /> */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigation.navigate("Details")}>
          <Text style={{ color: "#ffc107" }}>Click me</Text>
        </Button>
      </View>
    </View>
  );
};
export default HomeScreen;
