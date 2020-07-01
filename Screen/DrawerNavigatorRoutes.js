import React from 'react';

//Import Navigators
import { createStackNavigator, } from '@react-navigation/stack';
 import {createDrawerNavigator} from '@react-navigation/drawer';
//Import External Screens

import SettingsScreen from './drawerScreens/SettingsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './drawerScreens/HomeScreen';

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();


  const RootStack = ({navigation}) => {
      return (
          <Stack.Navigator   headerMode='none'>
              <Stack.Screen name ="Home" 
              component ={HomeScreen}
              options ={{
                headerTintColor: 'white',
                            headerLeft: ()=><NavigationDrawerHeader navigationProps={navigation} />,
              }}
              />
              <Stack.Screen name ="settings" component ={SettingsScreen}/>
          </Stack.Navigator>
      )
  }
const DrawerNavigatorRoutes = ()=>{
    return (
        <NavigationContainer>
               {/* <StatusBar barStyle ="light-content" backgroundColor = "green"/>  */}
                 <Drawer.Navigator drawerContent = {props =><CustomSidebarMenu {...props}/>}>
                   <Drawer.Screen name ="Home" component ={RootStack}/>
                 </Drawer.Navigator>
            </NavigationContainer>
    )
}


export default DrawerNavigatorRoutes;