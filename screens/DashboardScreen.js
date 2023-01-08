import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import firebase from 'firebase';

import DrawerNavigator from '../navigation/DrawerNavigator';
import TabNavigator from '../navigation/TabNavigator';

export default class DashboardScreen extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
               <NavigationContainer>
                  <TabNavigator/>
               </NavigationContainer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    appLogo:{
        right:10,
        left:30,
        top:10,
        bottom:10
     },
  
     logo:{
        height:200,
        width:100,
        right:700,
     },
  
     textContainer:{
        height:200,
        width:500,
        right:350,
        bottom:141,
     },
  
     text:{  
        color: "black",
       fontSize: 50,
       fontStyle:'italic',
     },
})