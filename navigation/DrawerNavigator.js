import React,{Component} from 'react'; 
import {StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ScheduleScreen from '../screens/ScheduleScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component{

    render(){
        return(
          <Drawer.Navigator
          drawerContentOptions = {{
            activeTintColor:"blue",
            inactiveTintColor:"black",
            itemStyle:{marginVertical:5},
          }}
          >
            <Drawer.Screen name="Home" component={HomeScreen} options={{unmountOnBlur:true}}/>
            <Drawer.Screen name="Schedule" component={ScheduleScreen} options={{unmountOnBlur:true}}/>
            <Drawer.Screen name="Settings" component={SettingsScreen} options={{unmountOnBlur:true}}/>

          </Drawer.Navigator>
        )
    }
}