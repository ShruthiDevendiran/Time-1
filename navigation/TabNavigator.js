import React,{Component} from 'react';
import {StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

import StopwatchScreen from '../screens/StopwatchScreen';
import WorldclockScreen from '../screens/WorldclockScreen';
import TimerScreen from '../screens/TimerScreen';
import DrawerNavigator from './DrawerNavigator';

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <Tab.Navigator
            labeled={true}
            barStyle={styles.bar}
            screenOptions = {({route})=>({
               tabBarIcon:({focussed,color,size})=>{
                let iconName;
                if(route.name === "StopWatch"){
                  iconName= "stopwatch-outline"
                }

                else if(route.name === "Home"){
                   iconName="home-outline"
                }

                else if(route.name === "WorldClock"){
                    iconName = "globe-outline"
                }
                else if(route.name === "Timer"){
                   iconName = "hourglass-outline"
                } 
                return (
                    <Ionicons 
                    name={iconName}
                    size={RFValue(10)}
                    color={color}
                    style={styles.icons}
                    />
                )
               }
            })}
            activeColor={"#11ff79"}
            inactiveColor={"white"} 
            
            >
              <Tab.Screen name="Home" component={DrawerNavigator} options={{unmountOnBlur:true}}/>
              <Tab.Screen name="StopWatch" component={StopwatchScreen} options={{unmountOnBlur:true}}/>
              <Tab.Screen name="WorldClock" component={WorldclockScreen} options={{unmountOnBlur:true}}/>
              <Tab.Screen name="Timer" component={TimerScreen} options={{unmountOnBlur:true}}/>

            </Tab.Navigator>
        )
    }
}

const styles= StyleSheet.create({
    bar:{
        height:80,
        width:1500,
        overflow:'hidden',
       borderTopLeftRadius: RFValue(30),
       borderTopRightRadius: RFValue(30),
       backgroundColor:"#d57cf6",
       position:"relative"
     },

    icons: {
        width: RFValue(5),
        height: RFValue(5),
      },
})