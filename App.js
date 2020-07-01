// import React from 'react'
// import { View, Text,StatusBar,Image,TouchableOpacity } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import Home from './src/screens/Home';
// import Details from './src/screens/Details';
// import PhotoSelector from './src/components/PhotoSelector';
// import Carousel from './src/components/Carousel';
// import OtpScreen from './src/screens/OtpScreen';
// import DrawerContent from './src/screens/DrawerContent';
// import MusicPlayer from './src/components/MusicPlayer';
// import VideoPlayer from './src/components/VideoPlayer';
// import LocalStorage from './src/components/LocalStorage';
// import LoadingScreen from './src/components/LoadingScreen';
// import SwitchComponent from './src/components/SwitchComponent';
// import AppStateScreen from './src/components/AppStateScreen';
// import CaptchaValidation from './src/components/CaptchaValidation';
// import RemoveDuplicateArray from './src/screens/RemoveDuplicateArray';



// const Stack = createStackNavigator()
// const Drawer = createDrawerNavigator()
// const App = () => {
//   return (
//     <NavigationContainer>
//         <StatusBar barStyle ="light-content" backgroundColor = "green"/> 
//         <Drawer.Navigator drawerContent = {props =><DrawerContent {...props}/>}>
//           <Drawer.Screen name ="Home" component ={RootStack}/>
//         </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }

  // const RootStack = ({navigation})=> {
  //       return (
  //         <Stack.Navigator  screenOptions={{
  //           headerTintColor: 'white',
  //           headerLeft: ()=> <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                            
  //                           <Image source ={require('./assets/multimedia.png')} style={{width:30,height:30,marginLeft:10}}/>
  //                           </TouchableOpacity>,
  //           headerStyle: { backgroundColor: 'green' },
  //           headerTitleStyle:{
  //               textAlign:'center',
  //               marginRight:15,
                
  //           }
  //         }}>
  //           <Stack.Screen name="Home" component={Home}/>
  //           <Stack.Screen name="Carousel" component={Carousel} />
  //          <Stack.Screen name="Details" component={Details} />
  //           <Stack.Screen name="Gallery" component={PhotoSelector} />
  //           <Stack.Screen name="OTP" component={OtpScreen} />
  //           <Stack.Screen name="Music" component={MusicPlayer} />
  //           <Stack.Screen name="video" component={VideoPlayer} />
  //           <Stack.Screen name="Local Storage" component={LocalStorage} />
  //           <Stack.Screen name="Loading" component={LoadingScreen} />
  //           <Stack.Screen name="switch" component={SwitchComponent} />
  //           <Stack.Screen name="appstate" component={AppStateScreen} />
  //           <Stack.Screen name="captcha" component={CaptchaValidation} />
  //           <Stack.Screen name="remove" component={RemoveDuplicateArray} />
  //         </Stack.Navigator>
  //       )
  // }

// export default App




import * as React from 'react';
import { Button, Text, TextInput, View ,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SplashScreen,HomeScreen,SignInScreen,RegisterScreen,} from './src/screens'
import {AuthContext} from './src/screens/utils'
import AsyncStorage from '@react-native-community/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Carousel from './src/components/Carousel';
import Details from './src/screens/Details';
import PhotoSelector from './src/components/PhotoSelector';
import OtpScreen from './src/screens/OtpScreen';
import MusicPlayer from './src/components/MusicPlayer';
import VideoPlayer from './src/components/VideoPlayer';
import LocalStorage from './src/components/LocalStorage';
import LoadingScreen from './src/components/LoadingScreen';
import SwitchComponent from './src/components/SwitchComponent';
import AppStateScreen from './src/components/AppStateScreen';
import CaptchaValidation from './src/components/CaptchaValidation';
import RemoveDuplicateArray from './src/screens/RemoveDuplicateArray';
import OnboardingScreen from './src/components/OnboardingScreen';
import LoanScreen from './src/screens/LoanScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SettingScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
      <Tab.Screen name="Loan" component={LoanScreen} 
        options ={{

          tabBarIcon : (props)=> (
           
              <FontAwesome 
                      name ="money"
                      size={props.size}
                      color ={props.color}
              />
        )
        }}

        // listeners = {({navigation})=>({
        //     tabPress:event => {
        //       event.preventDefault();
        //       navigation.navigate('Loan')
        //     }
        // })}
      />
    </Tab.Navigator>
  );
}





const AuthStack = createStackNavigator();
function StackAuth() {
  return (
    <AuthStack.Navigator screenOptions ={{headerShown:false}}>

      <AuthStack.Screen name="onboard" component={OnboardingScreen} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
     
    </AuthStack.Navigator>
  );
}


const Stack = createStackNavigator();

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':

        if(action.token){
          AsyncStorage.setItem('userToken',action.token)
        }
         return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
        AsyncStorage.removeItem('userToken')
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
         
             console.log("Sigin data",data)
        
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator  screenOptions ={{headerShown:false}}>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={StackAuth}
              options={{
                title: 'Sign in',
            // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
            
          ) : (
            // User is signed in
            <Stack.Screen name="Home" component={MyTabs} />
            
          )}
          
        </Stack.Navigator>
  
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


