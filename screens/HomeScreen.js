import React,{Component} from 'react';
import{
View, 
Text, 
StyleSheet, 
Image,
ImageBackground,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { FullWindowOverlay } from 'react-native-screens';

export default class HomeScreen extends Component{
    constructor(props){
       super(props);
       this.state={
         date:'',
         hours:'',
         time:'',
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
     if(this.state.hours <18 && this.state.hours > 6){  
        return(
              <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
                <View style={styles.backgroundContainer}>
                  <ImageBackground source={require('../assets/sun.jpg')} style={styles.backgroundImage}/>
               </View>
               <View style={styles.appLogo}>
                  <Image source={require('../assets/1.png')} style={styles.logo}/>                 
               </View>
               <View style={styles.textContainer}>
                  <Text style={styles.text}>Ding Dong</Text>
               </View>
               <View style={styles.dayContainer}>
                  <Text style={styles.day}>{this.state.date}</Text>
               </View>
               <View style={styles.timeContainer}>
                  <Text style={styles.time}>{this.state.time}</Text>
               </View>
            </View>
        )
    }

    else{
      return(
         <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
           <View>
             <ImageBackground source={require('../assets/moon.jpeg')} style={styles.backgroundImage}/>
          </View>
          <View style={styles.appLogo}>
             <Image source={require('../assets/1.png')} style={styles.logo}/>                 
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Ding Dong</Text>
          </View>
          <View style={styles.dayContainer}>
            <Text style={styles.day}>{this.state.date}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>{this.state.time}</Text>
          </View>
       </View>
   )
    }
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
      right:30,
   },

   textContainer:{
      height:200,
      width:500,
      right:5,
      bottom:50,
      left:140
   },

   text:{  
      color: "black",
     fontSize: 50,
     fontStyle:'italic',
   },

   backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      height: 750,
      width: 900,
      opacity:0.6,
  },

   day:{
      color: "blue",
      fontSize: 40,
      fontStyle:'italic',
      justifyContent:"center",
      alignItems:"center",
   },

   time:{
      color: "turquoise",
      fontSize: 40,
      fontStyle:'italic',
      justifyContent:"center",
      alignItems:"center",
   },

   dayContainer:{
     right:5,
     bottom:180
   },

   timeContainer:{
     bottom:180,
   },
})
