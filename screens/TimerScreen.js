import React,{Component} from 'react';
import {
View, 
Text, 
StyleSheet,
TouchableOpacity,
ImageBackground,
Image
} from 'react-native';

export default class TimerScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          disable:false,
        }
    }

    timeNowfive =()=>{
       var i = 300;
       var funcNameHere = function(){
        if (i == 0) clearInterval(this);
        else console.log((i--));
    };
    setInterval(funcNameHere, 1000);
    funcNameHere();
    }

    timeNowTen =()=>{
      var i = 600;
      var funcNameHere = function(){
       if (i == 0) clearInterval(this);
       else console.log((i--));
   };
   setInterval(funcNameHere, 1000);
   funcNameHere();
   }

   timeNowThirty =()=>{
    var i = 1800;
    var funcNameHere = function(){
     if (i == 0) clearInterval(this);
     else console.log((i--));
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
               <View style={styles.timerContainer}>
                  <Text style={styles.timer}>TIMER</Text>
               </View>
               <View style={styles.buttonContainer}>
                 <TouchableOpacity 
                 style={styles.button} 
                 activeOpacity={this.state.disable === false? 1:0.7} 
                 disabled={this.state.disable}
                 onPress={()=>{
                              this.timeNowfive
                              this.setState({disable:true})  
                            }}>
                  <Text style={styles.buttonText}>5 minutes</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button} onPress={this.timeNowTen}>
                  <Text style={styles.buttonText}>10 minutes</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.button} onPress={this.timeNowThirty}>
                  <Text style={styles.buttonText}>30 minutes</Text>
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

 timerContainer:{
   bottom:241,
   right:5,
 },

 timer:{
   fontSize:40,
   color:"black",
   fontStyle:"italic",
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

 button:{
   justifyContent: 'center',
   alignSelf: 'center',
   borderWidth: 2,
   borderRadius: 20,
   marginTop: 50,
   width: 200,
   height: 50,
   backgroundColor: '#376583',
   alignItems:"center"
 },

})