import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import MaterialCommunityIcons from'react-native-vector-icons/FontAwesome'
import {addCommas} from '../logic/LogicFunctions'
export default function Card(props){
    const styles = StyleSheet.create({
        container:{
            backgroundColor: props.color,
            marginHorizontal: 10,
            marginVertical: 5,
            flex:1,
            borderRadius:20,
            elevation:3
        },
        header:{
            flex:1,
            borderBottomColor:'#FFFFFF',
            borderBottomWidth:5,
            justifyContent:'center'
        },
        title:{
            letterSpacing:1.5,
            fontWeight:'bold',
            paddingLeft:10,
            fontSize:26,
            color:'#FFFFFF'
        },
        data:{
            flex:4,
            borderBottomColor:'#FFFFFF',
            borderBottomWidth:5,
            
        },
        total:{
            flex:1,
            alignItems:'center',
            backgroundColor:props.bgcolor,
            flexDirection:'row'
        },
        totalCases:{
            flex:2,
            fontSize:36,
            letterSpacing:1.5,
            color:'black'           
        },
        details:{
            flex:1,
            fontSize:22,
            textAlign:'left',
            paddingLeft:10

        },
        deaths:{
            flex:1,
            backgroundColor:'#D32F2F',
            borderBottomColor:'#FFFFFF',
            borderBottomWidth:5,
            justifyContent:'center'
        },
        deathCases:{
            color:'#FFFFFF',
            fontSize:24,
            textAlign:'center',
            fontWeight:'bold'
        },
        recovered:{
            flex:1,
            justifyContent:'center',
            backgroundColor:'#388E3C'
        },
        recoveredCases:{
            color:'#FFFFFF',
            fontSize:24,
            textAlign:'center',
            fontWeight:'bold'
        },
        more:{
            flex:1,
            backgroundColor:props.color,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            justifyContent:'space-between',
            alignItems:'center',
            paddingHorizontal:10,
            flexDirection:'row',
        },
        moreText:{
            fontSize:18,
            color:'#FFFFFF',
            textAlign:'left',
            fontWeight:'bold',
        }

    })
    return(
        <TouchableHighlight onPress={props.onPress} style={{flex:1,}} underlayColor='white'>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                <View style={styles.data}>
                    <View style={styles.total}>
                        <Text style={styles.details}>Cases</Text>
                        <Text style={styles.totalCases}> : {addCommas(props.mode == 'all'?props.data.cases.total:props.data.data.total.confirmed)}</Text>
                    </View>
                        <View style={styles.total}>
                            <Text style={styles.details}>Deaths</Text>
                            <Text style={styles.totalCases}> : {addCommas(props.mode == 'all'?props.data.deaths.total:props.data.data.total.deaths)}</Text>
                        </View>
                        <View style={styles.total}>
                            <Text style={styles.details}>Recovered</Text>
                            <Text style={styles.totalCases}> : {addCommas(props.mode == 'all'?props.data.cases.recovered:props.data.data.total.recovered)}</Text>
                        </View>
                    
                </View>
                
                    <View style={styles.more}>
                        <Text style={styles.moreText}>Statistics,Graphs & More...</Text>
                        <MaterialCommunityIcons  name='arrow-circle-right' size={24} color='#FFFFFF'></MaterialCommunityIcons>
                    </View>
                
                
            </View>
        </TouchableHighlight>
    )
}



