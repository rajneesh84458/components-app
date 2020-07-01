import React from 'react'
import { StyleSheet, Text, View,StatusBar,Dimensions,TouchableOpacity } from 'react-native'
import StepIndicator from 'react-native-step-indicator';

const {width,height} = Dimensions.get('window')

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}
const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Track"];

const IndicatorScreen = () => {
    const [currentPosition,setCurrentPosition] = React.useState(0)
    const data =[
        {
            label:"Ordered and approved",
            status:"your order has been placed",
            dateTime:'Mon 4 May 2020 9:00pm'
        },
        {
            label:"packed",
            status:"your order has been packed",
            dateTime:'Mon 6 May 2020 10:00pm'
        },
        {
            label:"Shipped",
            status:"your order has been shipped",
            dateTime:'Mon 7 May 2020 1:00pm'
        },
        {
            label:"Out for delivery",
            status:"your order has been out for delivery",
            dateTime:'Mon 8 May 2020 9:00pm'
        },
        {
            label:" Delivered",
            status:"your order has been out for Delivered",
            dateTime:'Mon 8 May 2020 9:00pm'
        }
      
]

const nextButton = () => {
    setCurrentPosition(currentPosition + 1)
}
console.disableYellowBox =true
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle ="light-content"/>
            <View style={styles.heading}>
            <Text style={{fontSize:20,color:'white'}}>Ordered Summary</Text>
            </View>
          <View style={styles.indicator}>

          <StepIndicator
                 direction ="vertical"
                customStyles={customStyles}
                currentPosition={currentPosition}
                labels={labels}
                renderLabel ={({position,stepStatus,label,curntPosition})=>{
                    return (
                        <View style={styles.lableContainer}>
                            <Text style={styles.labelText}>{data[position].label}</Text>
                            <Text style={styles.status}>{data[position].status}</Text>
                            <Text style={styles.status}>{data[position].dateTime}</Text>
                        </View>
                    )
                }}

            />

            <TouchableOpacity onPress ={()=>nextButton()}
            style={{alignSelf:'flex-end',marginTop:5}}>
                <Text style={{color:'red',fontWeight:'bold'}}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}

export default IndicatorScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1e1e1e'
    },
    heading:{
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        padding:10
    },
    indicator:{
        width:width-30,
       height:height-160,
       paddingTop:0,
       padding:20,
       elevation:8,
       margin:15,
       borderRadius:20,
       backgroundColor:'#000'
       
    },
    lableContainer:{
            marginTop:40,
            paddingLeft:5,
            padding:10,
            width:width-100
    },
    labelText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'

    },
    status:{
        fontSize:13,
        color:'grey'
    }
    
})
