import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class LocalStorage extends Component {
    constructor() {
        super();
        this.state = {
          textInputData: '',
          getValue: ''
        }
      }

      setValueLocally = () => {
        AsyncStorage.setItem('UserData', this.state.textInputData);
        Alert.alert("Value Stored Successfully.")
      }

      getValueLocally = () => {
        AsyncStorage.getItem('UserData')
        .then((value) => this.setState({ getValue: value }))
      } 
    render() {
        return (
            <View style={styles.Container}>

        <Text style={styles.text}> Saved Value is :- {this.state.getValue} </Text>

        <TextInput
          placeholder="Enter Some Text here"
          onChangeText={data => this.setState({ textInputData: data })}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyle}
        />

        <TouchableOpacity onPress={this.setValueLocally} activeOpacity={0.7} style={styles.button} >
          <Text style={styles.buttonText}> SAVE VALUE LOCALLY </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.getValueLocally} activeOpacity={0.7} style={styles.button} >
          <Text style={styles.buttonText}> GET VALUE LOCALLY </Text>
        </TouchableOpacity>

      </View>

        )
    }
}


const styles = StyleSheet.create({
    Container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      margin: 10
    },
    TextInputStyle: {
      textAlign: 'center',
      height: 40,
      width: '100%',
      borderWidth: 1,
      borderColor: '#ab47bc',
      borderRadius: 10
    },
    button: {
      width: '100%',
      height: 40,
      padding: 10,
      backgroundColor: '#ab47bc',
      borderRadius: 7,
      marginTop: 10
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',  },
    text: {
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 30
    }
  });
  