import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity,Switch} from 'react-native'
import {DrawerContentScrollView,DrawerItem,} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const DrawerContent = (props) => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style={styles.container}>
          <DrawerContentScrollView  {...props}>
           
             <View style={styles.userSection}>
                <View style={{flexDirection:'row',marginTop: 15}}>
                            <Image  style={{width:100,height:100,borderRadius:50}}
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1550831858-3c2581fed470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                                }}
                               
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Text style={styles.title}>Cutoo</Text>
                                <Text style={styles.caption}>@cuto@gmail.com</Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                                <View style={styles.section}>
                                <Text style={[styles.paragraph, styles.caption]}>90</Text>
                                <Text style={styles.caption}>following</Text>
                                </View>

                                <View style={styles.section}>
                                <Text style={[styles.paragraph, styles.caption]}>100</Text>
                                <Text style={styles.caption}>followers</Text>
                                </View>
                        </View>

             </View>

             <View style={styles.drawerSection}>
                 <DrawerItem 
                      icon={({color, size}) => (
                        <Icon 
                        name="home-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Home"
                    
                    onPress={() => {props.navigation.navigate('Home')}}
                     />


                <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                 </View>

                 <View>
                     <Text style={[styles.darkTheme,{fontWeight:'bold',fontSize:15,  backgroundColor:'#dddd'}]}>Preferencess</Text>
                     <TouchableOpacity onPress={() => {toggleTheme()}}>
                            <View style={styles.preferences}>
                                 <Text style={styles.darkTheme}>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                          </View>
                     </TouchableOpacity>
                 </View>




          </DrawerContentScrollView>
                    
                    <View style={styles.bottomDrawerSection}>
                    <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    // onPress={() => {signOut()}}
                />
                    </View>



        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    userSection:{
        paddingLeft:20,
       // backgroundColor:'red'
    },
    title:{
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
      },
    row:{
        // backgroundColor:'green',
         marginTop:10,
         flexDirection:'row',
         alignItems:'center'
    },
    section:{
      //  backgroundColor:'blue'
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph:{
        marginRight:10,
        fontWeight:'bold'
   },
   caption:{
    fontSize: 14,
    lineHeight: 14,
   },
   drawerSection:{
    marginTop: 15,
    //backgroundColor:'red'
   },
   bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
},
preferences:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:8
},
darkTheme:{
    fontSize:13,
    padding:10,
  
}

})
