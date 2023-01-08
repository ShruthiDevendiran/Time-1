import { StatusBar } from 'expo-status-bar'; 
import React,{Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AlarmScreen from './screens/AlarmScreen';
import DashboardScreen from './screens/DashboardScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import SetTimeScreen from './screens/SetTimeScreen';
import SettingsScreen from './screens/SettingsScreen';
import SnoozeScreen from './screens/SnoozeScreen';
import StopwatchScreen from './screens/StopwatchScreen';
import TimerScreen from './screens/TimerScreen';
import WorldclockScreen from './screens/WorldclockScreen';
import TabNavigator from './navigation/TabNavigator'
import DrawerNavigator from './navigation/DrawerNavigator';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import firebase from "firebase";
import { firebaseConfig } from "./config";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  DashboardScreen: DashboardScreen,
  HomeScreen:HomeScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}