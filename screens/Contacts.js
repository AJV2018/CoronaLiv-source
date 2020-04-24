import 'react-native-gesture-handler';
import React from 'react'
import {View, Text, StatusBar, StyleSheet} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import {data} from '../api/worldapi'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Contacts(){
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.mainCard}>
                    <Text style={styles.heading}>All India</Text>
                    <View style={styles.indItem}>
                        <FontAwesome name='phone' size={32} color='orange'/>
                        <Text style={styles.indText}> : {data.contacts.primary["number-tollfree"]}</Text>
                    </View>
                    <View style={styles.indItem}>
                        <FontAwesome name='envelope' size={30} color='red'/>
                        <Text style={styles.indOtherText}> : {data.contacts.primary.email}</Text>
                    </View>
                    <View style={styles.indItem}>
                        <FontAwesome name='facebook-square' size={32} color='blue'/>
                        <Text style={styles.indOtherText}> : {data.contacts.primary.facebook}</Text>
                    </View>
                    <View style={styles.indItem}>
                        <FontAwesome name='twitter' size={32} color='lightblue'/>
                        <Text style={styles.indOtherText}>: {data.contacts.primary.twitter}</Text>
                    </View>
                </View>
                <FlatList
                data={data.contacts.regional}
                renderItem = {({item})=>list(item)}
                />
                
            </View>
        </ScrollView>
    )
}

function list(value){
    return(                    
        <View style={styles.stateCard}>
        <Text style={styles.heading}>{value.loc}</Text>
        <View style={styles.stateItem}>
            <FontAwesome name='phone-square' size={32} color='#ee6002'/>
            <Text style={styles.stateText}>  {value.number}</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        padding:10
    },
    mainCard:{
        height:250,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        elevation:5
    },
    heading:{
        fontSize:18,
        paddingLeft:10,
        letterSpacing:0.5,
        fontWeight:'bold'
    },
    indItem:{
        flexDirection:'row',
        paddingLeft:20,
        marginTop:10,
        justifyContent:'flex-start',
        alignItems:"center"
        
    },
    indText:{
        fontSize:32,
        textAlign:'center',
      
    },
    indOtherText:{
        fontSize:16,
        textAlign:'center',
      
    },
    stateCard:{
        height:100,
        marginTop:10,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        elevation:3
    },
    stateItem:{
        flexDirection:'row',
        paddingLeft:20,
        marginTop:10,
        justifyContent:'flex-start',
        alignItems:"center"
    },
    stateText:{
        fontSize:18
    }
})