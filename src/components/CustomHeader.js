import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const CustomHeader = ({navigation,headerName}) => {
    return (
        <View style={styles.header}>
              <Icon name="ios-menu" 
                size={30} 
                color="black"
                onPress={() =>navigation.openDrawer()}
                style={{paddingLeft: 10}}
                />
               
                <Text style={styles.text}>{headerName}</Text>
               
           
            {/* <Icon name="md-cart" size={30}  color="black"
                onPress={() => navigation.navigate('basket')}
                style={{paddingRight:  10}}
                /> */}
        </View>
    )
}

export default CustomHeader

const styles =StyleSheet.create({
    header:
    {
    height:wp("15%"),
    backgroundColor:'white',
    //justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
},
text:{
    fontSize:20,
    color:'black',
    marginHorizontal:130
   
}
})
