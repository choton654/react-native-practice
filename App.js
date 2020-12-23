import {
  StatusBar
} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const App = ()=> {
  
  const birds = ["hen", "peacock", "ostrich","crow", "eagal"];
  const newBirds = birds.map((bird)=> <Text>{bird}</Text>)
  return (
    <View style={styles.container}>
      {newBirds}
      <Text>Hello world</Text>
      <StatusBar style="auto" />
      <Button title="Click me"/>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  
  export default App;