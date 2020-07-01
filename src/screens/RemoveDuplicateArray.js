import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'

const RemoveDuplicateArray = () => {

 const tempArray = [
        { id: 1, name: "Sumit" },
        { id: 2, name: "Amit" },
        { id: 3, name: "Sumit" },
        { id: 4, name: "Rakesh" },
        { id: 5, name: "Nitish" },
        { id: 6, name: "Sumit" },
        { id: 7, name: "Sumit" },
        { id: 8, name: "Amit" },
        { id: 9, name: "Amit" },
        { id: 10, name: "Neeraj" },
        { id: 11, name: "Rakesh" },
        { id: 12, name: "Sunil" },
        { id: 13, name: "Anil" },
        { id: 14, name: "Neeraj" },
      ];

const newArray = [];
tempArray.forEach(obj => {
      if (!newArray.some(o => o.name === obj.name)) {
        newArray.push({ ...obj })
      }
    });   
    return (
        <View style={styles.Container}>

        <ScrollView>
          {
            newArray.map((item, key) => (
              <TouchableOpacity key={key}>
                <Text style={styles.text} > ID = {item.id} </Text>
                <Text style={styles.text} > Name = {item.name} </Text>
                <View style={{ width: '100%', height: 2, backgroundColor: '#e91e63' }} />
              </TouchableOpacity>
            ))
          }
        </ScrollView>

      </View>
    )
}

export default RemoveDuplicateArray

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      justifyContent: 'center',   
    }, 
    text: {
      color: '#000',
      fontSize: 20,
      textAlign: 'center',
      padding: 5,
      textAlign: 'left',
    }
  });
  