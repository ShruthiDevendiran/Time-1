import React,{Component} from 'react';
import 
{View,
 Text, 
 StyleSheet,
 TouchableOpacity,
 ImageBackground,
 Image
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import SetTimeScreen from './SetTimeScreen';
import HomeScreen from './HomeScreen';

export default class ScheduleScreen extends Component{
   constructor(props){
     super(props);
     this.state={}
   }
       render(){
        return(
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
              <View>
                 <Image source={require('../assets/1.png')} style={styles.logo}/>
               </View>
               <View style={styles.textContainer}>
                  <Text style={styles.text}>Ding dong</Text>
               </View>
               <View style={styles.scheduleContainer}>
                  <Text style={styles.schedule}>Your Schedule:</Text>
               </View>
               <View>
                 <ImageBackground source={require('../assets/wall.jpg')} style={styles.backgroundImage}/>
               </View>
               <View style={styles.buttonContainer}>
                 <TouchableOpacity style={styles.button1} onPress={this.props.navigation.navigate("SetTimeScreen")}>
                    <Text style={styles.day}>Monday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button2} onPress={this.props.navigation.navigate("SetTimeScreen")}>
                    <Text style={styles.day}>Tuesday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button3} onPress={this.props.navigation.navigate("SetTimeScreen")}>
                    <Text style={styles.day}>Wednesday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button4} onPress={this.props.navigation.navigate("SetTimeScreen")}>
                    <Text style={styles.day}>Thursday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button5} onPress={this.props.navigation.navigate("SetTimeScreen")}>
                    <Text style={styles.day}>Friday</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button6} onPress={this.props.navigation.navigate("SetTimeScreen")}>
                    <Text style={styles.day}>Saturday</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button7} onPress={this.props.navigation.navigate("SetTimeScreen")}>
                    <Text style={styles.day}>Sunday</Text>
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

   backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      height: RFValue(30),
      width: RFValue(30),
      opacity:0.6,
      bottom:1000,
      opacity:0.2,
  },

  day:{
   fontSize: 30,
   fontStyle:'italic',
   justifyContent:"center",
   alignItems:"center",
},

 button1:{
   justifyContent: 'center',
   alignSelf: 'center',
   borderWidth: 2,
   borderRadius: 20,
   marginTop: 10,
   width: 200,
   height: 50,
   backgroundColor: 'purple',
   alignItems:"center"
 },
 
 button2:{
   justifyContent: 'center',
   alignSelf: 'center',
   borderWidth: 2,
   borderRadius: 20,
   marginTop: 10,
   width: 200,
   height: 50,
   backgroundColor: 'pink',
   alignItems:"center"
 },

 button3:{
   justifyContent: 'center',
   alignSelf: 'center',
   borderWidth: 2,
   borderRadius: 20,
   marginTop: 10,
   width: 200,
   height: 50,
   backgroundColor: 'green',
   alignItems:"center"
 },

 button4:{
   justifyContent: 'center',
   alignSelf: 'center',
   borderWidth: 2,
   borderRadius: 20,
   marginTop: 10,
   width: 200,
   height: 50,
   backgroundColor: 'yellow',
   alignItems:"center"
 },

 button5:{
   justifyContent: 'center',
   alignSelf: 'center',
   borderWidth: 2,
   borderRadius: 20,
   marginTop: 10,
   width: 200,
   height: 50,
   backgroundColor: 'blue',
   alignItems:"center"
 },

 button6:{
   justifyContent: 'center',
   alignSelf: 'center',
   borderWidth: 2,
   borderRadius: 20,
   marginTop: 10,
   width: 200,
   height: 50,
   backgroundColor: 'orange',
   alignItems:"center"
 },

 button7:{
   justifyContent: 'center',
   alignSelf: 'center',
   borderWidth: 2,
   borderRadius: 20,
   marginTop: 10,
   width: 200,
   height: 50,
   backgroundColor: 'red',
   alignItems:"center"
 },

buttonContainer:{
 bottom:200
},

 scheduleContainer:{
   bottom:241,
   right:5,
 },

 schedule:{
   fontSize:40,
   color:"black",
   fontStyle:"italic",
 },
})