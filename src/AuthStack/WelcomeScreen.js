import React from 'react'
import { StyleSheet, Text, View, ImageBackground,StatusBar,Image } from 'react-native'
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Button from '../components/Button';

const WelcomeScreen = ({navigation}) => {

    const onRegister = () =>{
        navigation.navigate("register");
    }
    const onLogin = () =>{
        navigation.navigate("login");
    }
    const onFbLogin = () =>{
        navigation.navigate("fb");
    }
    const onGoogleLogin = () =>{
        navigation.navigate("GoogleS");
    }
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <View style={{flex:1, }}>

            <ImageBackground style={{flex:1,resizeMode:'contain'}}
                         source ={{uri:'https://images.unsplash.com/photo-1505312328309-775d39e681df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}} >
                <View style={styles.layeredView}>
             <View style={styles.heading}>
                <Text style={styles.headText}>Big Mart</Text>
                <Text style={{fontSize:20,fontWeight:'400',color:'white'}}> your 24h Bigmart.store
                </Text>
             </View>

              <View style={styles.imgContainer}>
                  
               
             
                    
                    <View style={{flex:1,justifyContent:'flex-end',}}>
                        <View style={styles.buttonContainer}>

                             <View>
                             <Button onPress ={onRegister}
                                    fullWidth  
                                    backgroundColor='rgba(15, 15, 87,0.5)'
                                    text="Register" 
                            />
                             </View>
                            <View style={{marginTop:8}}>
                            <Button onPress ={onLogin}
                                     fullWidth
                                     backgroundColor='rgba(15, 15, 87,0.5)'
                                    text ="Login"/>

                            </View>
                            
                            <View style={{marginTop:8}}>
            
                            <Button onPress ={onGoogleLogin}
                                    logo ={require('../assets/google.png')} 
                                    fullWidth
                                    backgroundColor='rgba(15, 15, 87,0.5)'
                                    text ="Login With Google "/>
                            </View>
                            
                            <View style={{marginTop:8,}}>
                         
                            <Button onPress ={onFbLogin}
                                    logo ={require('../assets/facebook.png')}
                                    fullWidth
                                    backgroundColor='rgba(15, 15, 87,0.5)'
                                    text ="Login With Facebook" />
                            </View>
                            
                        </View>
                    </View>
                    </View>
                    </View>
                    </ImageBackground>
              </View>

            {/* <Button title ="go to Home" onPress ={()=>navigation.navigate('Home')}/> */}
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(15, 15, 87,0.5)'
    },
    heading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
    headText:{
        fontSize: 50,
        fontWeight: "bold",
        color:'white'
    },
    imgContainer:{
        flex:2,
       // backgroundColor: "#fff",
    },
    
    buttonContainer:{
        
         marginBottom:10,
        paddingBottom:hp('2%'),
        paddingHorizontal:hp('3%'),
        
    },
    layeredView:{
        flex:1,
        backgroundColor:'rgba(15, 15, 87,0.5)'
      },
     
})
