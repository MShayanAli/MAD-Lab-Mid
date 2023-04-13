import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity,Image } from 'react-native';
import { useEffect, useState } from "react";

import axios from 'axios'

export default function CustomFlatlist (props){
    const [state2 , setdata] = useState(props.data1)
    // console.log(props.data1)
    // console.log(state2)
   return(
  <FlatList
        data={props.data1}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
          (
            <View style={{flex:1,flexDirection:"row",marginTop:5}}>
              <View style={{flex:0.2, backgroundColor:'white',}}>
                    <Image source={{uri:item.image}}
                    style={{ width: 75, height: 100 }}>
                    </Image>
                </View>
               <View style={{flex:0.8, backgroundColor:'white',}}>
                  <Text style={{fontSize:10,fontWeight:"bold"}}>Title:{item.title}</Text>
                  <Text style={{fontSize:10,fontWeight:"bold"}}>Price:{item.price}</Text>
                  <Text style={{fontSize:10,fontWeight:"bold"}}>Description:{item.description}</Text>
                  <Text style={{fontSize:10,fontWeight:"bold"}}>Category:{item.category}</Text>
               </View>        
         </View>
          )
        }  
      />
    )
}