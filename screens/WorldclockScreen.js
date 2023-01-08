import React,{Component} from 'react';
import {
View, 
Text, 
StyleSheet, 
Alert,
ImageBackground,
Image
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

export default class WorldclockScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          dropdownHeight:40,
          worldTime:'',
          IST:'',
          time:'',
        }
    }

    getTime =(country)=>{
      axios
          .get("https://worldtimeapi.org/api/timezone/" + country)
          .then(response=>{
            var world= response.data;
            var d= world.datetime
            var f= d.slice(11,16)
            console.log(f)
            this.setState({worldTime:f})
          .catch(error=>{
           alert(error.message)
          })
          })
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
               <View style={styles.worldTextContainer}>
                 <Text style={styles.worldText}>WORLD CLOCK</Text>
               </View>
               <View style={styles.captionContainer}>
                  <Text style={styles.captions}>*Calculated using Indian standard time</Text>
               </View>
               <View style={styles.dropdownContainer}>
                  <DropDownPicker
                  items={[
                    {label:"Kolkata",value:"Asia/Kolkata"},  //+10 hours 30 minute
                    {label:"London",value:"Europe/London"}, // -4 hours 30 minutes
                    {label:"Nairobi",value:"Africa/Nairobi"}, //-3 hours 30 minutes
                    {label:"Sydney",value:"Australia/Sydney"}, //+7 hours 30 minutes
                    {label:"Winnipeg",value:"America/Winnipeg"}, // +5hours 30 minues
                    {label:"New York",value:"America/New_York"}, // - 9 hours 30 minutes
                    {label:"Singapore",value:"Asia/Singapore"},//-6 hours 30 minutes
                    {label:"Tokyo",value:"Asia/Tokyo"}//+7 hours 30 minutes                   
                  ]}
                  open={this.state.dropdownHeight=== 180? true:false}
                  defaultValue={"India"}
                  onOpen={()=>{this.setState({dropdownHeight:180})}}
                  onClose={()=>{this.setState({dropdownHeight:40})}}
                  style={styles.dropdownPicker}
                  textStyle={{color:"black", fonstSize:20, fontStyle:"italic",alignSelf:"center"}}
                  onSelectItem={(item)=>{
                    this.getTime(item.value)
                  }}
                  />
               </View>
               <View>
                  <Text style={{fontSize:50}}>{this.state.worldTime}</Text>
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

 worldTextContainer:{
  bottom:241,
  right:5,
},

 worldText:{
  fontSize:40,
  color:"black",
  fontStyle:"italic",
},
 captionContainer:{
    top:230,
 },

 captions:{
   color:"red",
   fontStyle:"italic"
 },

 dropdownContainer:{
   bottom:80,
 },

 dropdownPicker:{
  width:200,
  height:50,
  backgroundColor:"#2598d3",
  borderRadius:50,
  alignItems:"center",
 },


})