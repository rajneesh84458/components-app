import React, { Component } from 'react'
import { Text, View,TextInput, StyleSheet } from 'react-native'

export default class OtpScreen extends Component {
    state={
        pin1:'',
        pin2:'',
        pin3:'',
        pin4:'',
    }
   
    render() {
        const {pin1,pin2,pin3,pin4} = this.state;
        return (
            <View style={{flex:1,backgroundColor:'brown'}}>
                <Text style={style.heading}> OTP screen</Text>
                  
                  <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>

                  
                <TextInput  style={style.input}
                   
                     ref={"pin1ref"}
                     maxLength={1}
                    value={pin1}
                    onChangeText={(pin1)=>{
                        this.setState({pin1})
                        if(pin1 != ""){
                          this.refs.pin2ref.focus()
                        }
                    }}

                    />
                <TextInput  style={style.input}
                   
                     ref={"pin2ref"}
                     maxLength={1}

                     value={pin2}
                     onChangeText={(pin2)=>{
                        this.setState({pin2})
                        if(pin2 != ""){
                          this.refs.pin3ref.focus()
                        }
                    }}
                    />
                <TextInput  style={style.input}
                   
                     ref={"pin3ref"}
                     maxLength={1}

                     value={pin3}
                     onChangeText={(pin3)=>{
                        this.setState({pin3})
                        if(pin3 != ""){
                          this.refs.pin4ref.focus()
                        }
                    }}
                    />
                <TextInput  style={style.input}
                   
                     ref={"pin4ref"}
                     maxLength={1}

                     value={pin4}
                     onChangeText={(pin4)=>{
                        this.setState({pin4})
                        if(pin4 != ""){
                         alert('api call')
                        }
                    }}
                    />
                


                    </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    input:{
       borderBottomWidth:0.5,
       borderBottomColor:'white',
        padding:10,
        marginVertical:25,
        borderRadius:5,
        justifyContent:'center',
        fontSize:30,
        alignItems:'center',
        width:'10%',
        height:50,
        color:'white'
    },
    heading:
     { 
         textAlign:'center',
         padding:30,
         fontSize:30,
         color:'white',
         fontWeight:'bold',
         letterSpacing:3,
         
        }
})