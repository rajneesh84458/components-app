

// import React from 'react'
// import { View, Text,StyleSheet,TextInput } from 'react-native'
// import { widthPercentageToDP as wp } from "react-native-responsive-screen";
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import Button from '../components/Button';
// const LoginScreen = ({navigation}) => {
//     const [email,setEmail] = React.useState('')
//     const [password,setPass] = React.useState('')
//     const [loading,setLoading] =React.useState(false)
//     let [errortext, setErrortext] = React.useState('');

//     const onLogin =() =>{
//            setErrortext('')
//           if(email ==="" || password === "") {
            
//                // alert('please enterd fields')
//                 setErrortext('Please check your email id or password');
//                 return false
//           }
//         //   else {
//         //     setErrortext('Please check your email id or password');
//         //   }
//            navigation.navigate('Home')
    
//     }
//     return (
//         <View style={styles.container}>
//                 <View style={{margin:30}}>
//                 <Text style={styles.heading}>SignIn</Text>
//                 </View>

          

//             <View style={styles.loginContainer}>
//                 <Text style={{fontSize:20,padding:10}}>Email</Text>
//                 <TextInput 
//                           placeholder ="Enter your Email"
//                           placeholderTextColor ="#ccc"
//                           value ={email}
//                           onChangeText ={(text)=>setEmail(text)}
//                           underlineColorAndroid="transparent"
//                           autoCapitalize="none"
//                          keyboardType="email-address"
//                           style ={styles.textInput}
//                 />
//                 <Text style={{fontSize:20,padding:10}}>PassWord</Text>
//                 <TextInput 
//                           placeholder ="Enter your Password"
//                           placeholderTextColor ="#ccc"
//                           value ={password}
//                           onChangeText ={(text)=>setPass(text)}
//                           secureTextEntry={true}
//                           style ={styles.textInput}
//                           keyboardType="default"
//                 />
//             </View>
//             <View style={{alignItems:'flex-end',paddingHorizontal:20}}>
                
//                                 <TouchableOpacity>
//                                      <Text style={{fontSize:20}}>Forgot Password ?</Text>
//                                  </TouchableOpacity>
//                                  </View>
                       
//                                  {errortext != '' ? (
//                         <Text style={styles.errorTextStyle}> {errortext} </Text>
//                         ) : null}

//             <View style={{justifyContent:'center',alignItems:'center',marginTop:40}}>
//                 <Button
//                             //fullWidth
//                             onPress={onLogin}
//                             backgroundColor="#1C2850"
//                             text="Login"
//                   />
//               </View>
                   

//         </View>
//     )
// }

// export default LoginScreen

// const styles = StyleSheet.create({
//     container:{
//         flex:1
//     },
//     heading:{
//         fontSize:40,
       
//     },
//     loginContainer:{
       
//         padding:10,
       
//     },
//     textInput:{
//         fontSize:20,
//         borderWidth:1,
//         borderColor:'grey',
//         borderRadius:10,
//         width:wp('90%'),
//         marginHorizontal:10,
//         paddingHorizontal:10
//     },
//     button:{
//         backgroundColor:'blue',
//         width:wp('50%'),
//         padding:20,
//         justifyContent:'center',
//         alignItems:'center',
//         marginHorizontal:wp('20%'),
//         borderRadius:10
//     },
//     errorTextStyle: {
//             color: 'red',
//             textAlign: 'center',
//             fontSize: 14,
//             margin:10
//           },
// })





import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,ToastAndroid
} from 'react-native';
import * as firebase from 'firebase'
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import Button from '../components/Button';


const RegisterScreen = ({navigation}) => {
    //const { signIn } = React.useContext(AuthContext);
    // const [data, setData] = React.useState({
    //      email: '',
    //     password: '',
    //     check_textInputChange: false,
    //     secureTextEntry: true,
    //     isValidUser: true,
    //     isValidPassword: true,
    // });

    const[email,setEmail] =React.useState('')
    const[password,setPassword] =React.useState('')
    // const[isValidUser,setValidUser] =React.useState(true)
    //  const[isValidPassword,setValidPassword] =React.useState(true)
    //  const [secureTextEntry,setSecureTextEntry] = React.useState(true)
    const [visibleToast, setvisibleToast] = React.useState(false);

    React.useEffect(() => setvisibleToast(false), [visibleToast]);
  
    const Toast = ({ visible, message }) => {
        if (visible) {
          ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
          return null;
        }
        return null;
      };
 const userSignUp =(email,password) => {
    //console.log(this.state)
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(()=>{    setvisibleToast(true)
                                     navigation.replace('login')} 
                            
                            )
                           
                            
                .catch(error =>{
                     Alert.alert(error.message)  
                })
}
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your  email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) =>setEmail(val)}
                   // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
            
            </View>
           

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={true}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val)=>setPassword(val)}
                />
                           </View>
           
            

        <Toast visible={visibleToast} message="Registration Successfully"/>

            <View style={{marginTop:58}}>
                            <Button onPress ={()=>userSignUp(email,password)}
                                     fullWidth
                                     backgroundColor='#23444B'
                                    text ="Register"/>

                            </View>

        </Animatable.View>
      </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#23444B'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        fontSize:18
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });

