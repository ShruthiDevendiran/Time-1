import React,{Component} from 'react';
import{
View, 
Text, 
StyleSheet,
TextInput,
TouchableOpacity,
ImageBackground,
Image
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';

import ScheduleScreen from './ScheduleScreen';

var key, yes;

export default class SetTimeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
         dropDownHeight:40,
         alarmTimeMinutes:'',
         alarmTimeHours:'',
         alarmText:'',
        }
    }

    render(){
        return(
            <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
               <View style={styles.appLogo}>
                 <Image source={require('../assets/1.png')} style={styles.logo}/>
               </View>
               <View style={styles.appTitle}>
                  <Text style={styles.title}>Ding dong</Text>
               </View>
               <View style={styles.background}>
                 <ImageBackground source={require('../assets/wall.jpg')} style={styles.backgroundImage}/>
               </View>
               <View style={styles.mainText}>
                  <Text style={styles.theText}>Enter your alarm timing for the day !</Text>
               </View>

               <View> 
               <DropDownPicker
                   items={[
                    {label:"1",value:"1"},
                    {label:"2",value:"2"},
                    {label:"3",value:"3"},
                    {label:"4",value:"4"},
                    {label:"5",value:"5"},
                    {label:"6",value:"6"},
                    {label:"7",value:"7"},
                    {label:"8",value:"8"},
                    {label:"9",value:"9"},
                    {label:"10",value:"10"},
                    {label:"11",value:"11"},
                    {label:"12",value:"12"},
                    {label:"13",value:"13"},
                    {label:"14",value:"14"},
                    {label:"15",value:"15"},
                    {label:"16",value:"16"},
                    {label:"17",value:"17"},
                    {label:"18",value:"18"},
                    {label:"19",value:"19"},
                    {label:"20",value:"20"},
                    {label:"21",value:"31"},
                    {label:"22",value:"22"},
                    {label:"23",value:"23"},
                    {label:"00",value:"00"},
                   ]}
                   defaultValue={"00"}
                   open={this.state.dropDownHeight=== 180? true:false}
                   onOpen={()=>{this.setState({dropDownHeight:180})}}
                   onClose={()=>{this.setState({dropDownHeight:40})}}
                   style={styles.dropDown1}
                   textStyle={{color:"black"}}
                   onSelectItem={()=>{
                    (item)=>{this.setState({alarmTimeHours:item.value})}
                }} 
                 />
                 <View style={styles.dropDownContainer2}>
                 <DropDownPicker
                   items={[
                    {label:"5",value:"5"},
                    {label:"10",value:"10"},
                    {label:"15",value:"15"},
                    {label:"20",value:"20"},
                    {label:"25",value:"25"},
                    {label:"30",value:"30"},
                    {label:"35",value:"35"},
                    {label:"40",value:"40"},
                    {label:"45",value:"45"},
                    {label:"50",value:"50"},
                    {label:"55",value:"54"},
                   ]}
                   defaultValue={"00"}
                   open={this.state.dropDownHeight=== 180? true:false}
                   onOpen={()=>{this.setState({dropDownHeight:180})}}
                   onClose={()=>{this.setState({dropDownHeight:40})}}
                   style={styles.dropDown2}
                   textStyle={{color:"black"}}
                   onSelectItem={()=>{
                    (item)=>{this.setState({alarmTimeMinutes:item.value})}
                }}                    
                 />
                 </View>
                 <View style={styles.inputContainer}>
                  <TextInput
                   placeholder={"Reason"}
                   placeholderTextColor="black"
                   style={styles.inputBox}
                   onChangeText={(item)=>{this.setState({alarmText:item})}}
                   multiline={true}
                   numberOfLines={3}
                  />
               </View>
               <View style={styles.buttonContainer}>
                 <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Enter</Text>
                 </TouchableOpacity>
               </View>
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

 appTitle:{
   height:200,
   width:500,
   right:350,
   bottom:141,
},

 title:{  
   color: "black",
  fontSize: 50,
  fontStyle:'italic',
},

  theText:{
   fontSize:40,
   color:"black",
   fontStyle:"italic",
 },

  mainText:{
   bottom:241,
   right:5,
 },

 background:{
   top:10,
   bottom:10,
   right:10,
   left:10,
},

backgroundImage: {
   flex: 1,
   resizeMode: 'cover',
   height: 1300,
   width: 1500,
   opacity:0.6,
   bottom:1000,
   opacity:0.2,
},

dropDown1:{  
   width:200,
   height:50,
   backgroundColor:"#895787",
   borderRadius:50,
   alignItems:"center",
   bottom:120,
   right:80,
},

dropDown2:{  
   width:200,
   height:50,
   backgroundColor:"#895787",
   borderRadius:50,
   alignItems:"center",
   bottom:170,
   right:300,
},

buttonContainer:{
   bottom:200
  },

  button:{
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

  buttonText:{
   fontSize: 30,
   fontStyle:'italic',
   justifyContent:"center",
   alignItems:"center",
},

  inputContainer:{
    bottom:220,
    left:200
  },

  inputBox:{
   backgroundColor:"#d7b38c",
   borderRadius:20,
   height:60,
   width:300,
   alignItems:"center",
   justifyContent:"center",
   alignContent:"center"
  }
})