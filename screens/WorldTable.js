import 'react-native-gesture-handler';
import React from 'react'
import {View, Text, StatusBar, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {addCommas} from '../logic/LogicFunctions'
export default function WorldTable({route}){
    const {table} = route.params
    return(
        <>
        <StatusBar backgroundColor='#021aee' barStyle='light-content'/>
        <View style={{flexDirection:'row'}}>
            <View style={styles.stateHead}>
                <Text style={styles.stateTextHead}>
                    Country
                </Text>
            </View>
            <View style={styles.caseHead}>
                <Text style={styles.caseTextHead}>
                    CASES
                </Text>
            </View>
            <View style={styles.deathsHead}>
                 <Text style={styles.deathsTextHead}>
                    DEATH
                </Text>
            </View>
            <View style={styles.recoveredHead}>
                <Text style={styles.recoveredTextHead}>
                    CURED
                </Text>
            </View>
        </View>
        <FlatList
        data={table}
        renderItem={({item})=> <Item a={item.country} b={addCommas(item.cases.total)} c={addCommas(item.deaths.total)} d={addCommas(item.cases.recovered)}/>}
        keyExtractor={item=>item.loc}
        />

        </>
    )
}

function Item({a,b,c,d}){
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
            <View style={styles.recovered}>
                <Text style={styles.recoveredText}>
                    {d}
                </Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    state:{
        flex:2,
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
        flex:2,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center',
        
    },
    stateTextHead:{
        fontSize:16,
        fontWeight:'bold',
        color:'#000000',
        textAlign:'center'
    },
    case:{
        flex:1,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center',
        backgroundColor:'#6002ee',
        borderRadius:5
    },
    caseText:{
        fontSize:12,
        fontWeight:'bold',
        textAlign:'center',
        color:'#FFFFFF'
    },
    caseHead:{
        flex:1,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center'
    },
    caseTextHead:{
        color:'#6002ee',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:12
    },
    deaths:{
        flex:1,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center',
        backgroundColor:'#D32F2F',
        borderRadius:5
    },
    deathsText:{
        fontWeight:'bold',
        color:'#FFFFFF',
        textAlign:'center',
        fontSize:12
    },
    deathsHead:{
        flex:1,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center',
        
    },
    deathsTextHead:{
        color:'#D32F2F',
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
        color:'#41c300',
        textAlign:'center',
        fontSize:12,
        fontWeight:'bold'
    },
    recovered:{
        flex:1,
        elevation:1,
        padding:10,
        margin:2.5,
        justifyContent:'center',
        backgroundColor:'#41c300',
        borderRadius:5
    },
    recoveredText:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#FFFFFF',
        fontSize:12
    },

})
