import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity,Image } from 'react-native';
import { useEffect, useState } from "react";

import axios from 'axios'

export default function CustomSectionlist (props){
    const [state1, setstate2] = useState(props.data2)
    // console.log(props.data2)
    // console.log(state)
    return(
  <SectionList
      sections={state1}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={{backgroundColor:'green'}}>
          <Text>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <View style={{backgroundColor:'lightgrey'}}>
        <Text >{title}</Text>
        </View>
      )}
    /> 
    )
}