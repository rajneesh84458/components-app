// import React, { useState, useEffect } from 'react';

// //Import all required component
// import { ActivityIndicator, View, StyleSheet, Image } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

// export function SplashScreen(props,{navigation}){
//   //State for ActivityIndicator animation
//   let [animating, setAnimating] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setAnimating(false);
//       //Check if user_id is set or not
//       //If not then send for Authentication
//       //else send to Home Screen
//       AsyncStorage.getItem('userToken').then(value =>
//         props.navigation.navigate(
//           value === null ? 'SignIn' : 'HomeScreen'
//         )
//       );
//     }, 5000);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../assets/aboutreact.png')}
//         style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
//       />
//       <ActivityIndicator
//         animating={animating}
//         color="#FFFFFF"
//         size="large"
//         style={styles.activityIndicator}
//       />
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#307ecc',
//   },
//   activityIndicator: {
//     alignItems: 'center',
//     height: 80,
//   },
// });


import React,{useEffect} from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import {useNavigation} from '@react-navigation/native';



export const SplashScreen = () => {


useEffect(()=>{
     setTimeout(()=>{
      gotoLogin()
     },3000)
},[])

  const navigation = useNavigation()
  const gotoLogin = ()=>{
      navigation.navigate('onboard')
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     <ActivityIndicator size="large" color ="blue"/>
    </View>
  )
}


