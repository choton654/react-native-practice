import React from "react";
import {Modal, View, Text, TouchableHighlight } from "react-native";
const Sort = ({modal, modalWork})=>{
  
  return (
    <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
    
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    modalWork(!modalVisible);
                  }}
                >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          </View>
    
    )
}

export default Sort;