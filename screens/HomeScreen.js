import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import Card from '../components/card'
import AllStats, {IndiaStats, WorldStats} from '../api/worldapi'

export default function HomeScreen(props){
    const [data, setData] = useState()
    const [indData, setIndData] = useState()
    const[worldData, setWorld] = useState()
    useEffect(()=>{
        if(!data){
            AllStats().then(data=>{
                setData(data)
            })
        }
        if(!indData){
            IndiaStats().then(data=>{setIndData(data)})
        }
        if(!worldData){
          WorldStats().then(data=>{
              setWorld(data)
          })
      }
    })
    return(
        <>
        <StatusBar backgroundColor='#FFFFFF' barStyle="dark-content" />
        <View
          style={styles.scrollView}>
          <View style={{flex:1}}>
            <Image source={require('../assets/logo.png')} style={{height:100,width:100,alignSelf:'center', marginTop:5, borderColor:'black', borderWidth:1, borderRadius:20}}/>
          </View>
           <View style={styles.view}>
           {indData?
           <Card onPress={()=>props.navigation.navigate('India',{data:indData.data.statewise})} mode='ind' data={indData} title='INDIA' bgcolor='#A7FFEB' color='#03DAC5'/> 
           :
           <Text style={{textAlign:'center'}}>Loading...</Text>
            }
           {data && worldData?
            <Card  onPress={()=>props.navigation.navigate('World',{data:worldData})} mode='all' data={data} title='WORLD' bgcolor='#E1BEE7' color='#BB86FC'/>
            :
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
              <Text style={{textAlign:'center'}}>Loading...</Text>
            </View>
            
            }
           
         </View>
          
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    scrollView: {
      flex:1,
      backgroundColor:'#FFFFFF'
    },
    view:{
      flex:5,
      justifyContent:'center'
      
    }
  
  });