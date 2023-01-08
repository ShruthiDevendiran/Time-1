import React,{Component} from 'react';
import {
View, 
Text, 
StyleSheet,
TouchableOpacity,
ImageBackground,
Image
} from 'react-native';
import firebase from 'firebase';

export default class SnoozeScreen extends Component{
    constructor(props){
        super(props);
        this.state={}
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
               <View style={styles.snoozeTextContainer}>
                  <Text style={styles.snoozeText}> Snooze your alarm !</Text>
               </View>
               <View style={styles.snoozeButtonContainer}>
                 <TouchableOpacity style={styles.snoozeButton}>
                    <Text style={styles.snoozeButtonText}>5 minutes</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.snoozeButton}>
                    <Text style={styles.snoozeButtonText}>10 minutes</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.snoozeButton}>
                    <Text style={styles.snoozeButtonText}>15 minutes</Text>
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

   snoozeTextContainer:{
      bottom:241,
      right:5,
    },

    snoozeText:{
      fontSize:40,
      color:"black",
      fontStyle:"italic",
    },

    snoozeButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 2,
      borderRadius: 20,
      marginTop: 50,
      width: 200,
      height: 50,
      backgroundColor: 'pink',
      alignItems:"center"
    },

    snoozeButtonText:{
      fontSize: 30,
      fontStyle:'italic',
      justifyContent:"center",
      alignItems:"center",
   },

   snoozeButtonContainer:{
      bottom:200
     },
   
   
})