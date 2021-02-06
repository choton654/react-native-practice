import React,{useContext} from "react";
import { View, Text, Image } from "react-native";
import { Card, Title } from "react-native-paper";
import { ProductContext } from "./productcontext";
import BASE_URL from "../../api";

const Items = ({ route, navigation }) => {
  const subcatId = route.params.id;
  const { state, dispatch } = useContext(ProductContext);
  
  return (
    <View>
      <View style={{flex:1}}>
        {state.products.map((prod)=> prod.category._id.toString() === subcatId.toString() &&
        <View style={{flex:1}}>
           <Card style={{marginVertical: 20, marginLeft:30, width: 300}}>
              <Card.Content>
              <Title>{prod.name}</Title>
              </Card.Content>
              <Card.Cover source={{ uri:`${BASE_URL}${prod.photo[0].img}`}}/>
          </Card>
        </View>
        )}
      </View>
    </View>
  );
};

export default Items;
