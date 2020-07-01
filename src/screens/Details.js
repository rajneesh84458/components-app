import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const Details = ({route}) => {
    const {itemid,name,age,address,fun} = route.params
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Details Screen</Text>

            <Text>ItemId :{itemid}</Text>
            <Text>Name : {name}</Text>
            <Text>Age : {age}</Text>
            <Text>Address: {address}</Text>
            <TouchableOpacity onPress ={fun}>
                <Text>hey</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({})


////////////////////////////////////////////////////////////////////////////


import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity ,FlatList,Image} from 'react-native'
import HomeDetails from './HomeDetails';
import Profile from './Profile';



const Home = ({navigation}) => {
    const [data,setData] =React.useState([
        {
            id:1,
            name:'Rajneesh',
            age:25,
            address:'Aligarh',
            img:"https://images.unsplash.com/photo-1490414446283-fb5609f1173c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:2,
            name:'Ajay verma',
            age:21,
            address:'Delhi',
            img:"https://images.unsplash.com/photo-1591015685800-eefc82f94635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:3,
            name:'Amar',
            age:32,
            address:'Noida',
            img:"https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:4,
            name:'Priya',
            age:22,
            address:'Mumbai',
            img:"https://images.unsplash.com/photo-1590630244004-48913d660e6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
    ])
// const data =[
             
// ]

// React.useEffect(() => {
//      goToDetails()
// }, [])

// const goToDetails = ({item}) =>{
//       navigation.navigate('Homedetail',item)
// }
 
    return (
        <View style ={{flex:1}}>
              
           <Text style={{color:'blue',fontSize:30}}>HomeScreen</Text>  
              <FlatList 
                       keyExtractor={(item, index) => item.id.toString()}
                        data ={data}
                        renderItem={({item})=>{
                            return (
                                <View style={{flex:1,width:'100%',margin:20}}>
                                {/* <TouchableOpacity onPress ={()=> navigation.navigate('Homedetail',item)}>
                                    <Text>{item.name}</Text>
                                </TouchableOpacity> */}
                                <TouchableOpacity onPress ={()=> navigation.navigate('Profile',item)}>
                                    <Text style={{fontSize:20}}>{item.id}</Text>

                                </TouchableOpacity>
                               
                                
                            </View>
                            )
                        }}
              />
              {/* <TouchableOpacity  onPress={() =>navigation.navigate('Homedetail',item)}>
                 <Text style ={{color:'red'}}>Go To HomeDetails</Text>
              </TouchableOpacity> */}


        </View>
    )
}

export default Home








//***************************************************** */



import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Profile = ({route}) => {
     const {name,age,address,img} =route.params
    return (
        <View style ={{flex:1,margin:20,flexDirection:'row'}}>
         <View>
             <Image source ={{uri:img}}  style={{width:50,height:50,borderRadius:50}}/>
            
             </View>
             
              <View style={{paddingHorizontal:20,paddingVertical:10}}>
                    <Text>Name:{name}</Text>
                    <Text>Age:{age}</Text>
                    <Text>Adress:{address}</Text>
                   
              </View>
             
            
           
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
