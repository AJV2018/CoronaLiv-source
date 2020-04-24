import React, { useState, useEffect } from 'react'
import {View, ScrollView, Dimensions,Text, StyleSheet} from 'react-native'
import {WorldHistory} from '../api/worldapi'
import {
    LineChart,
    BarChart,
    PieChart,
  } from "react-native-chart-kit";
  
export default function WorldGraph({route}){  
    const {states} = route.params
    console.log(states)
    const[history,setHistory] = useState([])
    const[ready,setReady] = useState(false)
    const[labels,setLabels]=useState([])
    const[deaths, setDeaths]=useState([])
    const[recovered,setRecovered]=useState([])
    const[confirmed,setConfirmed] = useState(true)
    const[error,setError] = useState('Loading....')
    useEffect(()=>{
        
        if(history.length<2){
            console.log('control here')
            WorldHistory().then(data=>{
                setHistory(data)
                if(history==0 || history == undefined){
                    setError('')
                }
                console.log('Data received')
                console.log(history.length)
                
            })
        }else if(history.length>1&&confirmed){
            console.log('history',history)
            setConfirmed(false)
            var temp1=[]
            var temp2=[]
            
            for(let i=history.length-1;i>0;i--){
              
                temp1.push(history[i-1].cases.total-history[i].cases.total)
                temp2.push(history[i-1].deaths.total-history[i].deaths.total)
                
                if(i==1){
                    
                    console.log(labels)
                    
                    setRecovered(temp1)
                    setDeaths(temp2)
                   
                    setReady(true)
                }
            }
        }
    }) 
    
    const barData = {
        labels: states.map(item=>item.country),
        datasets: [
            {
            data: states.map(item=>item.cases.total)
            }
        ]
    }
    const colors = ['red','green','blue','yellow','orange']
    var names = states.map(item=>item.country)
    var population = states.map(item=>item.deaths.total)
    const pieData = [
        {
            name:names[0],
            population:population[0],
            color:colors[0],
            legendFontColor: "#7F7F7F" ,
            legendFontSize: 15
        },
        {
            name:names[1],
            population:population[1],
            color:colors[1],
            legendFontColor: "#7F7F7F" ,
            legendFontSize: 15
        },
        {
            name:names[2],
            population:population[2],
            color:colors[2],
            legendFontColor: "#7F7F7F" ,
            legendFontSize: 15
        },
        {
            name:names[3],
            population:population[3],
            color:colors[3],
            legendFontColor: "#7F7F7F" ,
            legendFontSize: 15
        },
        {
            name:names[4],
            population:population[4],
            color:colors[4],
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        
    ]
    const chartConfig = {
        
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#6002ee",
            backgroundGradientTo: "#efe5fd",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "2",
                strokeWidth: "1",
                stroke: "#ffa726"
            }
            
      };
    return(
        <ScrollView>
            <View style={styles.container}>
                
            <Text style={styles.head1}>Top 5 Countries by Confirmed Cases</Text>
                

                <BarChart
                style={{
                    marginBottom: 10,
                    borderRadius: 16
                }}
                decimalPlaces={1}
                data={barData}
                fromZero={true}
                width={Dimensions.get("window").width-20}
                height={250}
                yLabelsOffset={-8}
                chartConfig={chartConfig}
                />

                <Text style={styles.head1}>Deaths Recorded</Text>
                <PieChart
                data={pieData}
                width={Dimensions.get("window").width}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
                />
                <Text style={styles.head1}>Live Stats</Text>
                {ready?
                <>
                <LineChart

                    data={{
                    labels: ['                    10 hours ago','                    7 hours ago','                    4 hours ago', '                    2 hour ago'],
                    datasets: [
                        
                        {
                        data: recovered,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
                            strokeWidth: 5
                        },
                        
                        
                        
                    ],
                    legend: [ "New Cases" ]
                    }}
                    width={Dimensions.get("window").width-20} // from react-native
                    height={250}
                    fromZero={true}
                    xLabelsOffset={-10}
                    segments={6}
                    yAxisLabel='+'
                    chartConfig={chartConfig}
                    style={{
                    marginBottom: 10,
                    borderRadius: 16,
                    }}
                />
                <LineChart

                    data={{
                    labels: ['                    10 hours ago','                    7 hours ago','                    4 hours ago', '                    2 hour ago'],
                    datasets: [
                        
                       
                        {
                            data: deaths,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
                            strokeWidth: 5
                        },
                        
                        
                    ],
                    legend: [ "New Deaths" ]
                    }}
                    width={Dimensions.get("window").width-20} // from react-native
                    height={250}
                    fromZero={true}
                    xLabelsOffset={-10}
                    segments={6}
                    yAxisLabel='+'
                    chartConfig={chartConfig}
                    style={{
                    marginBottom: 10,
                    borderRadius: 16,
                    }}
                />
                </>
                :
                <Text>{error}</Text>
                }

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    head1:{
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:10,
        paddingTop:5,
    }
})