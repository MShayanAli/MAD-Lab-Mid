import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity,Image } from 'react-native';
import { useEffect, useState } from "react";
import {AsyncStorage} from 'react-native';

import CustomButton from './CustomButton';
import CustomFlatlist from './CustomFlatlist';
import CustomHook from './CustomHook';
import CustomSectionlist from './CustomSectionlist';

import axios from 'axios'

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export default function App() {
  const {data} = CustomHook('https://fakestoreapi.com/products')
  return (
    
    <View style={styles.container}>

      <CustomButton data3='top' />
      <CustomButton data3='bottom' />
      <CustomButton data3='left' />
      <CustomButton data3='right' />
     
     <CustomFlatlist data1={data}/> 
     <CustomSectionlist data2={DATA}/>
  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:100
  },
});
