import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native'
import {TouchableHighlight, ScrollView } from 'react-native-gesture-handler'
import {IndTests} from '../api/worldapi'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function IndiaScreen({route, navigation}){
    const[tests,setTests] = useState()
   var {data} =  route.params
   var DATA = data.sort(compare);
   useEffect(()=>{
    if(!tests){
        IndTests().then(data=>{
            setTests(data)
        })
    }
   })
    return(
        <>
        <StatusBar backgroundColor='#e54304' barStyle='light-content'/>
            <ScrollView style={styles.scrollview}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Stats (Updated everyday)</Text>
                    <TouchableHighlight style={styles.state} onPress={()=>navigation.navigate('IndiaTable',{table:DATA})}>
                        <View style={styles.state}>
                            <Text style={styles.stateHead}>Table Data</Text>
                            <Text style={styles.stateText}>States & UTs</Text>
                            <Image source={require('../assets/india.png')} style={styles.indImage}/>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.graph} onPress={()=>navigation.navigate('IndiaGraph',{states:DATA.slice(0,5)})}>
                        <View style={styles.graph}>
                            <Text style={styles.stateHead}>Graphs</Text>
                            <Image source={require('../assets/graph.png')} style={styles.graphImage}/>
                        </View>
                    </TouchableHighlight>
                    

                    <TouchableHighlight style={styles.state} onPress={()=>navigation.navigate('Hospital')}>
                        <View style={styles.state}>
                            <Text style={styles.stateText}>Hospital stats</Text>
                            <Image source={require('../assets/bed.png')} style={styles.indImage}/>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.state} onPress={()=>navigation.navigate('Contacts')}>
                        <View style={styles.state}>
                            <Text style={styles.stateText}>Contact & Helpline</Text>
                            <FontAwesome name='phone' size={36} style={styles.icon}/>
                        </View>
                    </TouchableHighlight>

                    {tests?
                        <View style={styles.tests}>
                            <Text style={styles.stateHead}>Testing Data ({tests.day})</Text>
                            <Text style={styles.stateText}>Samples Tested: {tests.totalSamplesTested}</Text>
                            <Text style={styles.stateText}>People Tested: {tests.totalIndividualsTested}</Text>
                            <Text style={styles.stateText}>Positives: {tests.totalPositiveCases}</Text>
                            <Image source={require('../assets/test.png')} style={styles.indImage}/>
                        </View>
                    
                    :
                    <Text>Loading...</Text>
                    }
                    
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
        backgroundColor:'#F57C00'
    },stateHead:{
        position:'absolute',
        top:0,
        textAlign:'left',
        fontSize:24,
        paddingLeft:10
    },
    stateText:{
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
        height:200,
        elevation:4,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        borderRadius:5,
        
    },
    graphImage:{
        height:170,
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

function compare(a, b) {
    const bandA = a.confirmed
    const bandB = b.confirmed
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison * -1;
  }
  
