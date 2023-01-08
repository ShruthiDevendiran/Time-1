import React,{Component} from 'react';
import {
View, 
Text, 
StyleSheet,
TouchableOpacity,
ImageBackground,
Image
} from 'react-native';

export default class StopwatchScreen extends Component{
    constructor(props){
        super(props);
        this.state={
         seconds:'',
      }
    }

    counter() {
      var i = 0;
      var funcNameHere = function(){
          if (i == 100) clearInterval(this);
          else console.log((i++));
      };
      setInterval(funcNameHere, 1000);
      funcNameHere();
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
               <View style={styles.stopContainer}>
                  <Text style={styles.stop}>{this.state.seconds}</Text>
               </View>
               <View>

               </View>
               <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button1} onPress={this.counter}>
                    <Text style={styles.buttonText}>Start</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText}>Stop</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button3}>
                    <Text style={styles.buttonText}>Reset</Text>
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

 stopContainer:{
   bottom:241,
   right:5,
 },

 stop:{
   fontSize:40,
   color:"black",
   fontStyle:"italic",
 },

 buttonText:{
   fontSize: 30,
   fontStyle:'italic',
   justifyContent:"center",
   alignItems:"center",
},

 buttonContainer:{
   bottom:200
  },

  button1:{
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

 button2:{
   justifyContent: 'center',
   alignSelf: 'center',
   borderWidth: 2,
   borderRadius: 20,
   marginTop: 50,
   width: 200,
   height: 50,
   backgroundColor: 'red',
   alignItems:"center",
   top:90,
   right:30,
 },

 button3:{
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
   bottom:10,
 },


})