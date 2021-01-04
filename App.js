import {
  StatusBar
} from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

const App = ()=> {
  const [input,setInput] = useState("")
  const [goal, setGoal] = useState([])
  const handleInput = (text)=>{
    setInput(text)
  }
  const addInput = ()=>{
    setGoal([...goal,input])
  }
  return (
    <View style={style.screan}>
     <View style={style.innerContent}>
     <TextInput style={style.textContent} placeholder="text" onChangeText={handleInput} value={input}/>
     <Button title="Add" onPress={addInput}/>
     </View>
     <View>
     {goal.map((i)=> <Text>{i}</Text>)}
     </View>
    </View>
  );
}

const style = StyleSheet.create({
  screan:{
    padding:50
  },
  innerContent:{
    flexDirection:"row",justifyContent:"space-between"
  },
  textContent:{
    width:"80%",borderWidth:2, borderColor:"black",paddingLeft:10
  }
})

  
  
 export default App;