import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import Button from '../components/Button';
import { ScrollView } from 'react-native-gesture-handler';


const Home = ({navigation}) => {


    return (
        <View style ={{flex:1,backgroundColor:"#F78104",}}>
             

             <ScrollView style={{flex:1}}>

        <View style={{ flexDirection:'row',
                  flexWrap:'wrap',
                  justifyContent:'space-around',
                    backgroundColor:'pink'}}>

          
           <Button 
                 onPress ={()=>navigation.navigate("Details" ,{
                  itemid:1,
                  name:"Rajneesh",
                  age:26,
                  address:"Aligarh",
                //fun :myapp
            })}
                title="Go To Details"
                textColor ="white"
                color="red"
                
                />
            <Button  
                        onPress ={()=>navigation.navigate("Gallery")}
                            title="Go To Gallery"
                            textColor ="white"
                            color ="grey"
                            
            />
            <Button  
                        onPress ={()=>navigation.navigate("Carousel")}
                            title="Go To Carousel"
                            textColor ="white"
                            color ="skyblue"
                            
            />
            <Button  
                        onPress ={()=>navigation.navigate("OTP")}
                            title="Go To OTP Screen"
                            textColor ="white"
                            color ="brown"
                            
            />
            <Button  
                        onPress ={()=>navigation.openDrawer()}
                            title="Custom Drawer"
                            textColor ="white"
                            color ="tomato"
                            
            />
            <Button  
                        onPress ={()=>navigation.navigate("Music")}
                            title="Music Player"
                            textColor ="white"
                            color ="blue"
                            
            />
            <Button  
                        onPress ={()=>navigation.navigate("video")}
                            title="Video Player"
                            textColor ="white"
                            color ="green"
                            
            />
            <Button  
                        onPress ={()=>navigation.navigate("Local Storage")}
                            title="Local Storage"
                            textColor ="blue"
                            color ="#EAF0F1"
                            
            />
            <Button  
                        onPress ={()=>navigation.navigate("Loading")}
                            title="Activity Indicator"
                            textColor ="white"
                            color ="#badc57"
                            
            />
            <Button  
                        onPress ={()=>navigation.navigate("appstate")}
                            title="Check AppState"
                            textColor ="white"
                            color ="#3C40C6"
                            
            />
            <Button  
                        onPress ={()=>navigation.navigate("switch")}
                            title="Switch Button"
                            textColor ="white"
                            color ="#3C40C6"
                            
            />
            <Button  
                        onPress ={()=>navigation.navigate("captcha")}
                            title="Captcha Validation"
                            textColor ="white"
                            color ="#3C40C6"
                            
            />
            <Button  
                        onPress ={()=>navigation.navigate("remove")}
                            title="Remove Duplicates"
                            textColor ="white"
                            color ="#3C40C6"
                            
            />


        </View>
        </ScrollView>
        </View>
    )
}

export default Home


