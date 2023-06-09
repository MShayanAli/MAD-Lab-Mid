import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity,Image } from 'react-native';
import { useEffect, useState } from "react";

import CustomButton from './CustomButton';
import CustomFlatlist from './CustomFlatlist';
import CustomHook from './CustomHook';
import CustomSectionlist from './CustomSectionlist';
import Top from './Top';
import Bottom from './Bottom';

import axios from 'axios'

export default function App() {
  const {data} = CustomHook('https://fakestoreapi.com/products')
  
  return (
    
    <View style={styles.container}>
      <Top data1={data}/>    
      <Bottom data2={data}/>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:100,
    //flexDirection:"row",
    alignItems:"center",
  },
});
