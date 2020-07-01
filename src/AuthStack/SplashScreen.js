import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Dimensions ,StatusBar} from 'react-native'
import { useNavigation } from '@react-navigation/native'
const {width,height} = Dimensions.get('window')


const SplashScreen = () => {

React.useEffect(()=>{
     setTimeout(()=>{
           goToMusic()
     },3000)
})
         const   goToMusic = () =>{
            navigation.replace('welcome')
         }

    const navigation = useNavigation()

    
    return (
        <View style={styles.container}>
        <StatusBar hidden />   
           <ImageBackground style={styles.splash}
             source ={{uri:'https://images.unsplash.com/photo-1581684802902-4fd3bae960dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}}
           >
                            
           </ImageBackground>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    splash:{
        width,
        height
    }
})
