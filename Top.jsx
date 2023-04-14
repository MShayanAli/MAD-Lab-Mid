import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity,Image } from 'react-native';
import { useEffect, useState } from "react";

import CustomButton from './CustomButton';
import CustomFlatlist from './CustomFlatlist';
import CustomHook from './CustomHook';
import CustomSectionlist from './CustomSectionlist';

import axios from 'axios'

export default function Top(props){
return(
<View  style={styles.flat1}>
<CustomFlatlist data1={props.data1}/> 
</View>
)
}
const styles = StyleSheet.create({
    flat1:{
      flex:0.5,
     
    },
  });