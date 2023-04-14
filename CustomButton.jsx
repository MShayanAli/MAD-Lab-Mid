import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";
//import Icons

export default function CustomButton(props) {
 return( 
    <TouchableOpacity>
      <Text>{props.shayan}</Text>
    </TouchableOpacity>
 )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
