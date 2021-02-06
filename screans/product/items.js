import React,{useContext, useState} from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { Card, Title } from "react-native-paper";
import { ProductContext } from "./productcontext";
import BASE_URL from "../../api";
import {Sort} from "./sort";
const Items = ({ route, navigation }) => {
  const subcatId = route.params.id;
  const { state, dispatch } = useContext(ProductContext);
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={{flex:1}}>
    <View style={{flex:1, flexDirection:"row"}}>
         <TouchableOpacity
              style={{width:"50%", height:"50px", border:"1px solid black"}}
              >
              <Text style={{margin:"auto"}}>Sort</Text>
            </TouchableOpacity>
      <TouchableOpacity
        style={{width:"50%", height:"50px", border:"1px solid black"}}
        >
        <Text style={{margin:"auto"}}>Filter</Text>
      </TouchableOpacity>
    </View>
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
      <Sort modal={modalVisible} modalWork={setModalVisible}/>
    </View>
  );
};

export default Items;
