import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
//import {AuthContext} from '../AuthStack/context';

import  * as firebase from 'firebase'
export default function CustomDrawerComponent(props) {
  //const {name,email,img} =props
  //const {signOut} = React.useContext(AuthContext);

  const userLogOut =() =>{
    firebase.auth().signOut()
    
    .catch(error=>{
              Alert.alert(error.message)
    })
}
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, resizeMode: 'contain'}}
        source={{
          uri:
            'https://images.unsplash.com/photo-1505312328309-775d39e681df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        }}>
        <View style={styles.layeredView}>
          <DrawerContentScrollView {...props}>
            <View style={styles.headingContainer}>
              <Text style={styles.text}>Menu</Text>
              <Icon
                name="ios-close"
                size={40}
                color="white"
                onPress={() => props.navigation.closeDrawer()}
              />
            </View>

            <View style={styles.drawerSection}>
              <DrawerItem
                icon={({size, color}) => (
                  <Icon name="ios-home" size={22} color="white" />
                )}
                label="Home"
                labelStyle={{color: 'white', fontSize: 22}}
                //style ={{alignItems:'center'}}
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />

              {/* <DrawerItem icon ={({size,color})=> (
                          <Icon  name ="ios-list-box" size ={22} color ='white'/>
                            )}
                        label ="Category"
                        labelStyle={{color:'white',fontSize:22}}
                        //style ={{alignItems:'center'}}
                        onPress={() => {props.navigation.navigate('Category')}}
                        /> */}
              <DrawerItem
                icon={({size, color}) => (
                  <Icon name="ios-cart" size={22} color="white" />
                )}
                label="Basket"
                labelStyle={{color: 'white', fontSize: 22}}
                //style ={{alignItems:'center'}}
                onPress={() => {
                  props.navigation.navigate('basket');
                }}
              />

              <DrawerItem
                icon={({color, size}) => (
                  <Icon1 name="exit-to-app" color={'white'} size={25} />
                )}
                label="Sign Out"
                labelStyle={{color: 'white', fontSize: 25}}
                onPress={userLogOut()}
              />
            </View>

            <View style={styles.profileStyle}>
              <Image
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                }}
                style={{
                  width: wp('25%'),
                  height: wp('25%'),
                  // resizeMode: "cover",
                  borderRadius: wp('15%'),
                }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  fontWeight: '400',
                  paddingHorizontal: wp('10%'),
                }}>
               {props.name}
              </Text>
            </View>
          </DrawerContentScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  layeredView: {
    flex: 1,
    backgroundColor: 'rgba(15, 15, 87,0.5)',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: wp('14%'),
    paddingHorizontal: wp('9.5%'),
    paddingBottom: wp('7%'),
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
  },
  drawerSection: {
    marginLeft: wp('8.5%'),
  },
  profileStyle: {
    width: wp('80%'),
    height: wp('60%'),
    //backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
