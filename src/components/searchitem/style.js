import React, { Component } from 'react';
import { StyleSheet,Dimensions } from 'react-native';
var { width, height } = Dimensions.get('window')

const mystyles = StyleSheet.create({
    itemview:{
        flex:1,
        //flexDirection:'row',
        height: 50, 
        //margin: 10,
        //padding:10, 
        borderBottomColor: 'black', 
        borderBottomWidth: 1
    },
    annualImg:{
        width:100,
        height:75,
        padding:10
    },
    headingtext:{
        width:width,
        //marginLeft:10,
        fontSize:15
    },
    popupstyle:{
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        justifyContent:'center',
        //opacity: 0.7,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: width,
        height:height
    },
    viewitempopup:{
        backgroundColor:'#fff',
        padding:10,
        width:width-100,
        marginRight:50,
        marginLeft:50,
        borderRadius:8,
        elevation: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    subheding:{
        fontSize:15,
        color:'#145194'
    },
    Itemview:{
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10,
        //backgroundColor:'#8BC541'
      },
      searchInput:{
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1,
        //backgroundColor:'#8BC541'
      }

});

export default mystyles