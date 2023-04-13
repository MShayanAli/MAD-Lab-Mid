import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";

export default function CustomButton(props) {

// useEffect(()=>{
//     console.log(props.data3)
//     })

  if(props.data3=='top'){
    return (
        <View>
          <TouchableOpacity style={{backgroundColor:'grey', width:100, height:30, alignSelf:'centre', justifyContent:'center'}}>
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      );
  }else  if(props.data3=='bottom'){
    return (
        <View style={styles.container}>
          <TouchableOpacity style={{backgroundColor:'green', width:100, height:30}}>
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      );
  }else{
    return (
        <View style={styles.container}>
          <TouchableOpacity style={{backgroundColor:'yellow', width:100, height:30}}>
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
