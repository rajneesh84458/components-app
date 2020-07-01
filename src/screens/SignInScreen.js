import React from 'react'
import {View,Text,TextInput,Button,StyleSheet, Keyboard,KeyboardAvoidingView} from 'react-native'
import {AuthContext} from './utils'

export function SignInScreen({navigation}) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading,setLoading] = React.useState('');
    const [error,setError] = React.useState('')
  
    const { signIn } = React.useContext(AuthContext);
  
    const {container,textInput}= styles;
     
    return (
      <View style={container}>
        <TextInput 
          style ={textInput}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          
        />
        <TextInput
         style ={textInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={() => signIn({ username, password })} />

        <Button title="Register" onPress={() =>navigation.navigate('Register')} style={{marginTop:40}} />
      </View>
    );
  }

  const styles = StyleSheet.create({
      container:{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
      },
      textInput:{
          width:'90%',
          height:50,
          borderWidth:1,
          borderColor:'grey',
          marginBottom:10
      }
  })
// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   TextInput,
//   View,
//   Text,
//   ScrollView,
//   Image,
//   Keyboard,
//   TouchableOpacity,
//   KeyboardAvoidingView,
// } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import Loader from '../../Screen/Components/loader';

// export function SignInScreen(props){
//   let [userEmail, setUserEmail] = useState('');
//   let [userPassword, setUserPassword] = useState('');
//   let [loading, setLoading] = useState(false);
//   let [errortext, setErrortext] = useState('');

//   const handleSubmitPress = () => {
//     setErrortext('');
//     if (!userEmail) {
//       alert('Please fill Email');
//       return;
//     }
//     if (!userPassword) {
//       alert('Please fill Password');
//       return;
//     }
//     setLoading(true);
//     var dataToSend = { user_email: userEmail, user_password: userPassword };
//     var formBody = [];
//     for (var key in dataToSend) {
//       var encodedKey = encodeURIComponent(key);
//       var encodedValue = encodeURIComponent(dataToSend[key]);
//       formBody.push(encodedKey + '=' + encodedValue);
//     }
//     formBody = formBody.join('&');

//     fetch('https://aboutreact.herokuapp.com/login.php', {
//       method: 'POST',
//       body: formBody,
//       headers: {
//         //Header Defination
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//       },
//     }).then(response => response.json())
//       .then(responseJson => {
//         //Hide Loader
//         setLoading(false);
//         console.log(responseJson);
//         // If server response message same as Data Matched
//         if (responseJson.status == 1) {
//           AsyncStorage.setItem('user_id', responseJson.data[0].user_id);
//           console.log(responseJson.data[0].user_id);
//           props.navigation.navigate('DrawerNavigationRoutes');
//         } else {
//           setErrortext('Please check your email id or password');
//           console.log('Please check your email id or password');
//         }
//       })
//       .catch(error => {
//         //Hide Loader
//         setLoading(false);
//         console.error(error);
//       });
//   };

//   return (
//     <View style={styles.mainBody}>
//       <Loader loading={loading} />
//       <ScrollView keyboardShouldPersistTaps="handled">
//         <View style={{ marginTop: 100 }}>
//           <KeyboardAvoidingView enabled>
//             <View style={{ alignItems: 'center' }}>
//               <Image
//                 source={require('../../assets/aboutreact.png')}
//                 style={{
//                   width: '50%',
//                   height: 100,
//                   resizeMode: 'contain',
//                   margin: 30,
//                 }}
//               />
//             </View>
//             <View style={styles.SectionStyle}>
//               <TextInput
//                 style={styles.inputStyle}
//                 onChangeText={UserEmail => setUserEmail(UserEmail)}
//                 underlineColorAndroid="transparent"
//                 placeholder="Enter Email" //dummy@abc.com
//                 placeholderTextColor="#F6F6F7"
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//                 // ref={ref => {
//                 //    emailinput = ref;
//                 // }}
//                 returnKeyType="next"
//                 // onSubmitEditing={() =>
//                 //   this._passwordinput && this._passwordinput.focus()
//                 // }
//                 blurOnSubmit={false}
//               />
//             </View>
//             <View style={styles.SectionStyle}>
//               <TextInput
//                 style={styles.inputStyle}
//                 onChangeText={UserPassword => setUserPassword(UserPassword)}
//                 underlineColorAndroid="transparent"
//                 placeholder="Enter Password" //12345
//                 placeholderTextColor="#F6F6F7"
//                 keyboardType="default"
//                 // ref={ref => {
//                 //   this._passwordinput = ref;
//                 // }}
//                 onSubmitEditing={Keyboard.dismiss}
//                 blurOnSubmit={false}
//                 secureTextEntry={true}
//               />
//             </View>
//             {errortext != '' ? (
//               <Text style={styles.errorTextStyle}> {errortext} </Text>
//             ) : null}
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               activeOpacity={0.5}
//               onPress={handleSubmitPress}>
//               <Text style={styles.buttonTextStyle}>LOGIN</Text>
//             </TouchableOpacity>
//             <Text
//               style={styles.registerTextStyle}
//               onPress={() => props.navigation.navigate('Register')}>
//               New Here ? Register
//             </Text>
//           </KeyboardAvoidingView>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   mainBody: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#307ecc',
//   },
//   SectionStyle: {
//     flexDirection: 'row',
//     height: 40,
//     marginTop: 20,
//     marginLeft: 35,
//     marginRight: 35,
//     margin: 10,
//   },
//   buttonStyle: {
//     backgroundColor: '#7DE24E',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#7DE24E',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   buttonTextStyle: {
//     color: '#FFFFFF',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   inputStyle: {
//     flex: 1,
//     color: 'white',
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     borderRadius: 30,
//     borderColor: 'white',
//   },
//   registerTextStyle: {
//     color: '#FFFFFF',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   errorTextStyle: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 14,
//   },
// });
