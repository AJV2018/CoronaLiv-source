import 'react-native-gesture-handler';
import React from 'react'
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native'
import {TouchableHighlight, ScrollView } from 'react-native-gesture-handler'
import {compare} from '../logic/LogicFunctions'

export default function WorldScreen({route, navigation}){
    
   var {data} =  route.params
   var DATA = data.sort(compare);
  
    return(
        <>
        <StatusBar backgroundColor='#021aee' barStyle='light-content'/>
            <ScrollView style={styles.scrollview}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Stats (Updated everyday)</Text>
                    <TouchableHighlight style={styles.state} onPress={()=>navigation.navigate('WorldTable',{table:DATA})}>
                        <View style={styles.state}>
                            <Text style={styles.stateText}>Table of Countries</Text>
                            <Image source={require('../assets/world.png')} style={styles.indImage}/>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.graph} onPress={()=>navigation.navigate('WorldGraph',{states:DATA.slice(1,6)})}>
                        <View style={styles.graph}>
                            <Text style={styles.stateHead}>Graphs</Text>
                            <Image source={require('../assets/worldgraph.png')} style={styles.graphImage}/>
                        </View>
                    </TouchableHighlight>
                    
                </View>
                
            </ScrollView>
            
        
        
        </>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'#FFFFFF'
    },
    scrollview:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    heading:{
        fontSize:18,
        fontWeight:'bold',
        paddingLeft:5,
    },
    state:{
        height:100,
        elevation:4,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        borderRadius:5,
        marginVertical:10,
        backgroundColor:'#6002ee'
    },stateHead:{
        position:'absolute',
        top:0,
        textAlign:'left',
        fontSize:24,
        paddingLeft:10
    },
    stateText:{
        color:'#FFFFFF',
        paddingLeft:10,
        fontSize:24,
        fontWeight:'bold',
    },
    indImage:{
        height:80,
        width:80,
        position:'absolute',
        right:10
    },
    graph:{
        height:250,
        elevation:4,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        borderRadius:5,
        
    },
    graphImage:{
        height:200,
        width:300,
        alignSelf:'center'
        
    },
    tests:{
        height:200,
        elevation:1,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        borderRadius:5,
        marginVertical:10
    },
    icon:{
        position:'absolute',
        right:20
    },
})


  
