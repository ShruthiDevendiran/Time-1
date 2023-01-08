import React,{Component} from 'react';
import {
View, 
Text, 
StyleSheet,
Image,
ImageBackground
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';

export default class SettingsScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          dropdownHeight:40,
          ringtone:'',
          defaultSong:"ringtone1",
        }
    }

    ringtoneSet =()=>{
        firebase
               .database()
               .ref('/dingDong')
               .set({
                alarmMusic:this.state.ringtone
               })
    }

    render(){
       let ringtones = {
         ringtone1:require('../assets/alarm_clock_1.mp3'),
         ringtone2:require('../assets/alarm_clock.mp3'),
         ringtone3:require('../assets/best_alarm.mp3'),
         ringtone4:require('../assets/carol_of_bells.mp3'),
         ringtone5:require('../assets/morning_flower.mp3'),
         ringtone6:require('../assets/ringtone.mp3')
       }

        return(
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
               <View style={styles.appLogo}>
                 <Image source={require('../assets/1.png')} style={styles.logo}/>
               </View>
               <View style={styles.textContainer}>
                  <Text style={styles.text}>Ding dong</Text>
               </View>
               <View>
                 <ImageBackground source={require('../assets/setting.png')} style={styles.alarm}/>
               </View>
               <View style={styles.dropDownContainer}>
                  <DropDownPicker
                  items={[
                    {label:"digital_alarm_clock", value:"ringtone1"},
                    {label:"alarm_clock", value:"ringtone2"},
                    {label:"Morning_dew", value:"ringtone3"},
                    {label:"carol_of_bells", value:"ringtone4"},
                    {label:"morning_flower", value:"ringtone5"},
                    {label:"blooming_flowers", value:"ringtone6"},
                  ]}
                   defaultValue={this.state.defaultSong}
                   open={this.state.dropdownHeight=== 180? true:false}
                   onOpen={()=>{this.setState({dropdownHeight:180})}}
                   onClose={()=>{this.setState({dropdownHeight:40})}}
                   style={styles.dropDown}
                   textStyle={{color:"black", fonstSize:20, fontStyle:"italic"}}
                   onSelectItem={(item)=>{this.setState({ringtone:item.value})}}                
                  />
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  appLogo:{
    right:10,
    left:30,
    top:10,
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

 alarm: {
   flex: 1,
   resizeMode: 'cover',
   height: RFValue(180),
   width: RFValue(180),
   bottom:300,
   opacity:0.3,
},

  dropDown:{  
      width:200,
      height:50,
      backgroundColor:"#895787",
      borderRadius:50,
      alignItems:"center",
  },

  dropDownContainer:{
   bottom:100,
  },
})