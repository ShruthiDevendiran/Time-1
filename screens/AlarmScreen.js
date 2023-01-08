import React,{Component} from 'react';
import {
View, 
Text, 
StyleSheet,
ImageBackground,
Image,
TouchableOpacity
} from 'react-native';

import HomeScreen from './HomeScreen';
import SnoozeScreen from './SnoozeScreen';
import ScheduleScreen from './ScheduleScreen';

export default class AlarmScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          alarmTime:'',
          alarmText:'',
          time:'',
          date:'',
          hours:'',
        }
    }

    getTime =()=>{
      var nd = new Date();
      var dd = nd.getDate();
      var mm = nd.getMonth() + 1;
      var yy = nd.getFullYear();
      var hr = nd.getHours();
      var min = nd.getMinutes();
      var sec = nd.getSeconds();
 
      let today= `${dd}-${mm}-${yy}`;
      let time = `${hr}:${min}:${sec}`
 
      this.setState({time:time})
      this.setState({date:today})
      this.setState({hours:hr})
 
     /* const date = new Date().toJSON().slice(0,10)
      this.setState({time:date})*/
     }
 
     componentDidMount(){
       this.getTime()
     }

     componentDidUpdate(){
      setInterval(this.getTime,1000)
     }

    render(){
        return(
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
               <View style={styles.appLogo}>
                 <Image source={require('../assets/1.png')} style={styles.logo}/>
               </View>
               <View style={styles.textContainer}>
                  <Text style={styles.text}>Ding dong</Text>
               </View>
               <View style={styles.background}>
                 <ImageBackground source={require('../assets/wall.jpg')} style={styles.BackgroundImage}/>
               </View>
               <View style={styles.timeContainer}>
                 <Text style={styles.time}>{this.state.time}</Text>
               </View>
               <View style={styles.dayContainer}>
                 <Text style={styles.day}>{this.state.date}</Text>
               </View>
               <View style={styles.alarmTextContainer}>
                 <Text style={styles.alarmText}>{this.state.alarmText}</Text>
               </View>
               <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.stopText} onPress={()=>{this.props.navigation.navigate("HomeScreen")}}>
                    <Text style={styles.buttonText}>Stop</Text>
                  </TouchableOpacity>                  
                     <TouchableOpacity style={styles.snoozeText}>
                       <Text style={styles.buttonText}>Snooze</Text>
                     </TouchableOpacity>
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

 stopText:{
  justifyContent: 'center',
  alignSelf: 'center',
  borderWidth: 2,
  borderRadius: 20,
  marginTop: 50,
  width: 200,
  height: 50,
  backgroundColor: 'yellow',
  alignItems:"center",
  top:190,
  right:500,
},

 snoozeText:{
  justifyContent: 'center',
  alignSelf: 'center',
  borderWidth: 2,
  borderRadius: 20,
  marginTop: 50,
  width: 200,
  height: 50,
  backgroundColor: 'green',
  alignItems:"center",
  right:100,
  left:500,
  top:80,
},

buttonContainer:{
  bottom:200
 },

 buttonText:{
   fontSize: 30,
   fontStyle:'italic',
   justifyContent:"center",
   alignItems:"center",
},
 
 alarmTimeContainer:{
   bottom:200,
 }, 
 
 alarmTextContainer:{
   bottom:200,
 }, 

 alarmTime:{
  color: "red",
  fontSize: 50,
  fontStyle:'italic',
 },

 alarmText:{
  color: "black",
  fontSize: 25,
  fontStyle:'italic',
 },

 day:{
  color: "blue",
  fontSize: 40,
  fontStyle:'italic',
  justifyContent:"center",
  alignItems:"center",
},

dayContainer:{
  left:10,
  bottom:250
},

timeContainer:{
  bottom:150,
},

time:{
  color: "red",
  fontSize: 40,
  fontStyle:'italic',
  justifyContent:"center",
  alignItems:"center",
},

})