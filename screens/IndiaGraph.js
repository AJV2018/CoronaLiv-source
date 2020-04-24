import React, { useState, useEffect } from 'react'
import {View, ScrollView, Dimensions,Text, StyleSheet} from 'react-native'
import {IndHistory} from '../api/worldapi'
import {
    LineChart,
    BarChart,
    PieChart,
  } from "react-native-chart-kit";
  
export default function IndiaGraph({route}){  
    const {states} = route.params
    console.log(states)
    const[history,setHistory] = useState([])
    const[ready,setReady] = useState(false)
    const[labels,setLabels]=useState([])
    const[deaths, setDeaths]=useState([])
    const[recovered,setRecovered]=useState([])
    const[confirmed,setConfirmed] = useState([])
    useEffect(()=>{
        if(history.length<2){
            console.log('control here')
            IndHistory().then(data=>{
                setHistory(data)
                console.log('Data received')
                console.log(data)
            })
        }else if(history.length>1 && labels.length<10){
            console.log('history',history)
            var length = history.length
            var temp = []
            var temp1=[]
            var temp2=[]
            var temp3 =[]
            for(let i=length-10;i<length;i++){
                temp.push(history[i].day.replace('2020-',''))
                temp1.push(history[i].total.recovered-history[i-1].total.recovered)
                temp2.push(history[i].total.deaths-history[i-1].total.deaths)
                temp3.push(history[i].total.active-history[i-1].total.active)
                if(i==length-1){
                    let tempLength = temp.length
                    temp[tempLength-1]='Today'
                    temp[tempLength-2]='Yesterday'
                    console.log(labels)
                    console.log(length)
                    setConfirmed(temp3)
                    setRecovered(temp1)
                    setDeaths(temp2)
                    setLabels(temp)
                    setReady(true)
                }
            }
        }
    }) 

    
    
    const barData = {
        labels: states.map(value=>{
            if(value.state.search(' ') == -1){
                return value.state
            }else{
                var x = value.state.split(' ')
                var y = x[0].substring(0,1)
                var z = x[1].substring(0,1)
                return y+z
            }
            
        }
            ),
        datasets: [
            {
            data: states.map(item=>item.confirmed)
            }
        ]
    }
    const colors = ['#E91E63','#9C27B0','#0097A7','#009688','#CDDC39']
    var names = states.map(item=>item.state)
    var population = states.map(item=>item.deaths)
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
            backgroundGradientFrom: "#f47100",
            backgroundGradientTo: "#fff2df",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "4",
                strokeWidth: "1",
                stroke: "#ffa726"
            }
            
      };
    return(
        <ScrollView>
            <View style={styles.container}>
                
            <Text style={styles.head1}>Top 5 States by Confirmed Cases</Text>
                

                <BarChart
                style={{
                    marginBottom: 10,
                    borderRadius: 16
                }}
              
                data={barData}
                fromZero={true}
                width={Dimensions.get("window").width-20}
                height={250}
                chartConfig={chartConfig}
                xLabelsOffset={-10}
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
                <Text style={styles.head1}>History (Past 10 Days)</Text>
                {ready?
                <>
                <LineChart
                    bezier
                    data={{
                    labels: labels,
                    datasets: [
                        {
                            data: confirmed,
                            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // optional
                            strokeWidth: 2
                        }
                        
                        
                    ],
                    legend: ['Active' ]
                    }}
                    width={Dimensions.get("window").width-20} // from react-native
                    height={250}
                    fromZero={true}
                    xLabelsOffset={-10}
                    segments={6}
                    verticalLabelRotation={20}// optional, defaults to 1
                    chartConfig={chartConfig}
                    style={{
                    marginBottom: 10,
                    borderRadius: 16,
                    }}
                />
                <LineChart
                    bezier
                    data={{
                    labels: labels,
                    datasets: [
                        {
                        data: recovered,
                            color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // optional
                            strokeWidth: 2
                        },
                        {
                            data: deaths,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
                            strokeWidth: 2
                        },
                        
                        
                    ],
                    legend: ["Recovered", "Deaths" ]
                    }}
                    width={Dimensions.get("window").width-20} // from react-native
                    height={250}
                    fromZero={true}
                    xLabelsOffset={-10}
                    segments={6}
                    verticalLabelRotation={20}// optional, defaults to 1
                    chartConfig={chartConfig}
                    style={{
                    marginBottom: 10,
                    borderRadius: 16,
                    }}
                    />
                </>
                :
                <Text>Loading...</Text>
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
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
        paddingTop:5,
    }
})