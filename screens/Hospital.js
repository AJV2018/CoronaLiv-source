import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import {View, Text, StatusBar, StyleSheet, ProgressBarAndroid} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {HospitalData} from '../api/worldapi'
export default function Hospital(){
    const [table,setTable] = useState()
    useEffect(()=>{
        if(!table){
            HospitalData().then(data=>{
                var temp = [data[data.length-1]]
                var temp1 = data.slice(0,data.length-2)
                setTable(temp.concat(temp1))
                
            })
        }
    })
    return(
        <>
        <StatusBar backgroundColor='#e54304' barStyle='light-content'/>
        {table?
        <>
        <View style={{flexDirection:'row'}}>
            <View style={styles.stateHead}>
                <Text style={styles.stateTextHead}>
                    STATE
                </Text>
            </View>
            <View style={styles.caseHead}>
                <Text style={styles.caseTextHead}>
                    HOSPITAL
                </Text>
            </View>
            <View style={styles.deathsHead}>
                 <Text style={styles.deathsTextHead}>
                    BEDS
                </Text>
            </View>
        </View>
        <FlatList
        data={table}
        renderItem={({item})=> <Item a={item.state} b={item.totalHospitals} c={item.totalBeds}/>}
        keyExtractor={item=>item.loc}
        />
        </>
        :
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" style={{width:200}}/>
        </View>
}
        </>
    )
}

function Item({a,b,c}){
    return(
        <View style={{flexDirection:'row'}}>
            <View style={styles.state}>
                <Text style={styles.stateText}>
                    {a}
                </Text>
            </View>
            <View style={styles.case}>
                <Text style={styles.caseText}>
                    {b}
                </Text>
            </View>
            <View style={styles.deaths}>
                 <Text style={styles.deathsText}>
                    {c}
                </Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    state:{
        flex:3,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center',
        backgroundColor:'grey',
        borderRadius:5
    },
    stateText:{
        fontSize:14,
        fontWeight:'bold',
        color:'#FFFFFF'
    },
    stateHead:{
        flex:3,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center',
        borderColor:'#000000',
        borderWidth:2,
        borderRadius:5,
        backgroundColor:'#FFFFFF'
    },
    stateTextHead:{
        fontSize:14,
        fontWeight:'bold',
        color:'#000000',
        textAlign:'center'
    },
    case:{
        flex:2,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center',
        backgroundColor:'#c7006e',
        borderRadius:5
    },
    caseText:{
        fontWeight:'bold',
        textAlign:'center',
        color:'#FFFFFF',
        fontSize:12
    },
    caseHead:{
        flex:2,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center',
        borderColor:'#c7006e',
        borderWidth:2,
        borderRadius:5,
        backgroundColor:'#FFFFFF',
        
    },
    caseTextHead:{
        color:'#c7006e',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:12
    },
    deaths:{
        flex:2,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center',
        backgroundColor:'#f47100',
        borderRadius:5
    },
    deathsText:{
        fontWeight:'bold',
        color:'#FFFFFF',
        textAlign:'center',
        fontSize:12
    },
    deathsHead:{
        flex:2,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center',
        borderColor:'#f47100',
        borderWidth:2,
        borderRadius:5,
        backgroundColor:'#FFFFFF'
    },
    deathsTextHead:{
        color:'#f47100',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:12
    },
    recoveredHead:{
        flex:1,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center'
    },
    recoveredTextHead:{
        color:'green',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:12
    },
    recovered:{
        flex:1,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center',
        backgroundColor:'green',
        borderRadius:5
    },
    recoveredText:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#FFFFFF',
        fontSize:12
    },

})
