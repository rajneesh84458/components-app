


import React from 'react'
import { View, Text,ImageBackground ,TouchableOpacity,StyleSheet} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";
const HomeCategory = (props) => {
  const {imageUri,titleFirst,titleSecond,subTitle,navigation} =props;
  return (
         
            <TouchableOpacity onPress ={()=>navigation.navigate('Category',{titleFirst})}>
            
              <ImageBackground source ={imageUri}
                              style ={styles.imageStyle}>

                 <View style={styles.textContainer}>
                      <Text style={styles.firstText}>{titleFirst}</Text>
                      <Text style={styles.secondText}>{titleSecond}</Text>
                      <Text style={styles.thirdText}>{subTitle}</Text>
                 </View>
                
           </ImageBackground>
         
           </TouchableOpacity>
          
  )
}

export default HomeCategory

const styles =StyleSheet.create({
  imageStyle:{
    width:wp('100%'),height:hp('40%'),
 
    marginBottom:10
  },
  textContainer:{

  },
  firstText:{
       fontSize:40,
       color:'white'
  },
  secondText:{
       fontSize:30,
       color:'white'
  },
  thirdText:{
       fontSize:20,
       color:'#ccc'
  },
  textContainer:{
    position:'absolute',margin:20
  }
  
})
