import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen' 
import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen'
import WorldScreen from './screens/WorldScreen'
import IndiaScreen from './screens/IndiaScreen'
import IndiaTable from './screens/IndiaTable'
import WorldTable from './screens/WorldTable'
import IndiaGraph from './screens/IndiaGraph';
import WorldGraph from './screens/WorldGraph'
import Hospital from './screens/Hospital';
import Contacts from './screens/Contacts';
const Stack = createStackNavigator();

export default function App(props){
  useEffect(()=>{
    SplashScreen.hide()
  })
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen props={props} name="Home" component={HomeScreen} options={{
          headerShown:false
          }}/>
        
        <Stack.Screen props={props} name="World" component={WorldScreen} options={{
          headerStyle:{backgroundColor:'#6002EE'},
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen props={props} name="WorldTable" component={WorldTable} options={{
          headerStyle:{backgroundColor:'#6002EE'},
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen props={props} name="WorldGraph" component={WorldGraph} options={{
          headerStyle:{backgroundColor:'#6002EE'},
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen props={props} name="India" component={IndiaScreen} options={{
          headerStyle:{backgroundColor:'#ee6002'
          }}}/>
        <Stack.Screen props={props} name="IndiaTable" component={IndiaTable} options={{
          headerStyle:{backgroundColor:'#ee6002'
          }}}/>
        <Stack.Screen props={props} name="IndiaGraph" component={IndiaGraph} options={{
          headerStyle:{backgroundColor:'#ee6002'
          }}}/>
        <Stack.Screen props={props} name="Hospital" component={Hospital} options={{
          headerStyle:{backgroundColor:'#ee6002'
          }}}/>
          <Stack.Screen props={props} name="Contacts" component={Contacts} options={{
          headerStyle:{backgroundColor:'#ee6002'
          }}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};




