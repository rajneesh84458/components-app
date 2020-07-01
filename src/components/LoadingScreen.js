import React from 'react'
import { StyleSheet, Text, View,ActivityIndicator,Button,Modal,FlatList } from 'react-native'

class  LoadingScreen extends React.Component {

    state={
           loading:true,
           list:[]
    }
   


    componentDidMount(){
        const url ="https://jsonplaceholder.typicode.com/users"; 
           fetch(url)
           .then(res=>res.json())
           .then(data=>{
               console.log(data)
                 this.setState({loading:false})
                 this.setState({
                       list:data
                 })
           })
 
    }

    _renderItem = ({item}) =>{

        return (
                 <View style ={{width:'95%',height:170,borderWidth:1,borderColor:'#3498DB',borderRadius:10,marginBottom:10,marginHorizontal:10,padding:20}}>
                     <Text style={styles.textStyle}>Credit :{item.username}</Text>
                     <Text style={styles.textStyle}>Debit :{item.username}</Text>
                     <Text style={styles.textStyle}>Description :{item.username}</Text>
                     <Text style={styles.textStyle}>Receipt No. :{item.username}</Text>
                     <Text style={styles.textStyle}> Transaction Dt :{item.username}</Text>
                 </View>
        )
 }

    render(){

    return (
        <View style={{flex:1,}}>
            
             
                {
                         this.state.loading ? <Modal animated 
                                        transparent ={true}
                                        visible ={this.state.loading}
                                    >
             <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator
                    animating={this.state.loading}
                
                    size ="large"
                    />
    
               </View>
                 </View> 
                </Modal> :

                         <View style={{flex:1}}>
        
                      <FlatList
                       data={this.state.list}
                       renderItem ={this._renderItem}
                       keyExtractor ={(item,index) =>index.toString()}
                       />
                     </View>
                     }
                      
        </View>
    )
}
}




export default LoadingScreen

const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
      backgroundColor: '#FFFFFF',
      height: 100,
      width: 100,
      borderRadius: 10,
      //display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  });