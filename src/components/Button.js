import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Button = ({color,textColor,onPress,title}) => {
    return (
        <View>
            <TouchableOpacity style={[styles.btnLogin,{backgroundColor:color}]} onPress ={onPress}>
            <Text style={{fontSize:16,color:textColor}} >{title}</Text>
            </TouchableOpacity>
           
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    btnLogin:{
         //backgroundColor:'green',
          width:200,
          height:50,
         justifyContent:'center',
         alignItems:'center',
         borderRadius:8,
         marginHorizontal:20,
         marginVertical:10,
    
         
    },
})
