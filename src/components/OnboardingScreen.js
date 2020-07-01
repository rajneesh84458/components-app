import React, { Component } from 'react'
import { Text, View,StyleSheet,StatusBar,Image,Dimensions,TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
const {width,height} =Dimensions.get('window')
export default class OnboardingScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
               <StatusBar hidden ={true}/>
                <Swiper autoplay ={true}>
                    <View style={styles.slide}>

                    <View style={styles.titleContainer}>
                      <Text style={styles.textStyle}>About Us</Text>
                    </View>

                    <View style={styles.subHeading}>
                        <Text style={styles.subtitle}>
                        
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                         </Text>
                    </View>
                    {/* <Image
                      style={styles.image}
                     source ={{uri:"https://images.unsplash.com/photo-1554180842-41b1dd69d588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}/>
                    */}
                    </View>
                    <View style={styles.slide}>

                     <View style={styles.titleContainer}>
                      <Text style={styles.textStyle}>Privacy Policy</Text>
                    </View>

                    <View style={styles.subHeading}>
                        <Text style={styles.subtitle}>
                        
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                         </Text>
                    </View>
                    {/* <Image 
                      style={styles.image}
                     source ={{uri:"https://images.unsplash.com/photo-1574788170925-c2586e1c510d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}/>
                    */}
                    </View>
                    <View style={styles.slide}>

                     <View style={styles.titleContainer}>
                      <Text style={styles.textStyle}>Terms and Conditions</Text>
                    </View>

                    <View style={styles.subHeading}>
                        <Text style={styles.subtitle}>
                        
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                         </Text>
                    </View>
                    {/* <Image
                      style={styles.image}
                    source ={{uri:"https://images.unsplash.com/photo-1535533190416-534a491a6ac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}/>
                    */}
                    </View>

                </Swiper>

                {/* <View style={styles.textContainer}>
                    
                </View> */}

                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("SignIn")}>
                    <View style={styles.signinContainer}>
                        <Text style={styles.signin}>SignIn</Text>
                    </View>
                    </TouchableOpacity>

                     <TouchableOpacity onPress={()=>alert("register....")}>
                    <View style={styles.SignUpContainer}>
                        <Text style={styles.signup}>SignUp</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    slide:{
        flex:1,
        // justifyContent:'center',
         alignItems:'center',
         backgroundColor:'#BB651C',
        // opacity:0.5
    },
    image:{
        width,
        height,
        opacity:0.5

    },
    textContainer:{
        position:'absolute',
         //marginLeft:10,
         //backgroundColor:'red',
         //paddingLeft:10,
      },

    titleContainer:{
            width:350,
            height:50,
            padding:10,
           // backgroundColor:'red'
    },
    textStyle:{
        fontSize:24,
        color:'#fff',
        fontFamily:'Helvetica',
        fontWeight:'bold'
    },
    subHeading:{
        width:width-18,
        height:height-140,
        borderRadius:20,
        elevation:8,
        backgroundColor:'#E98C24'

    },
    subtitle:{
        fontSize:18,
        color:'#fff',
        fontFamily:'Helvetica',
        padding:20
        
    },
    buttonContainer:{
        position:'absolute',
        bottom:20,
        width:width,
        height:60,
        padding:15,
        flexDirection:'row',
        marginLeft:5,
        justifyContent:"space-between"
    },
    signinContainer:{
      width:130,
      height:50,
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10
    },
    signin:{
        fontSize:20,
        fontFamily:'Helvetica',
        color:'red'
    },
    SignUpContainer:{
        width:130,
        height:50,
        //backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderWidth:2,
        borderColor:'white'
    },
    signup:{
        fontSize:20,
        fontFamily:'Helvetica',
        color:'red'
    }
})