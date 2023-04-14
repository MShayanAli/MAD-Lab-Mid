import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity,Image } from 'react-native';
import { useEffect, useState } from "react";
// import { Icon } from 'react-native-vector-icons/icon';
import CustomButton from './CustomButton';
import axios from 'axios'

export default function CustomFlatlist (props){
    //const num =2
    //console.log(props.data1)
    // console.log(state2)
   return(
  <FlatList
        data={props.data1}
        keyExtractor={item => item.id}
        //numColumns={2}
        renderItem={({item}) => 
          (
            <View style={styles.mainview}>
              <View style={styles.iview}>
                    <Image source={{uri:item.image}}
                    style={styles.istyles}>
                    </Image>
                </View>
               <View style={styles.tview}>
                  <Text style={styles.tstyles}>{item.title}</Text>
                  <Text style={styles.tstyles}>{item.price}</Text>
               </View> 
               <CustomButton shayan="Buy Now">
               </CustomButton>       

         </View>
          )
        }  
      />
    )
}
const styles = StyleSheet.create({
  mainview: {
    flex:1,
    marginTop:5,
    alignItems:"center",
  },
  iview:{
    flex:0.7,
    backgroundColor:'white',
  },
  istyles:{
    width: 75,
    height: 100,
  },
  tview:{
    flex:0.3,
    backgroundColor:'white'
  },
  tstyles:{
    fontSize:10,
    textAlign:"center"
  }
})