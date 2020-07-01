import React,{useState} from 'react'
import { StyleSheet, Text, View,Switch,Alert } from 'react-native'

const SwitchComponent = () => {
   const [holdValue,setHoldValue] =useState(false)

   const showSwitchButton = (value)=>{
            setHoldValue(value)

            if(value ===true){
                Alert.alert("Switch is on !")
            }
            else {
                Alert.alert("switch is off !")
            }
   }
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'tomato'}}>


             <Switch 
                    value ={holdValue}
                    onValueChange ={(value)=>showSwitchButton(value)}
             />

        </View>
    )
}

export default SwitchComponent

