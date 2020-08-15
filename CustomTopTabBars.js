import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';

const tabs = [
  {
    status: 'All',
  },
  {
    status: 'Purple',
  },
  {
    status: 'Green',
  },
];

const data = [
  {
    name: 'Dibu',
    status: 'Yellow',
  },
  {
    name: 'Rajneesh',
    status: 'navyBlue',
  },
  {
    name: 'Rinku',
    status: 'Purple',
  },
  {
    name: 'Rahul',
    status: 'Green',
  },
  {
    name: 'Ajay',
    status: 'Purple',
  },
];

const App = () => {
  const [status, setStatus] = useState('All');
  const [dataList,setDataList] = useState(data)
  const setStatusFilter = (status) => {
    if(status !== 'All') // purple and green
    {
      setDataList([...data.filter(e =>e.status == status)])
    }
    else{
      setDataList(data)
    }
    setStatus(status);
  };

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <View style={styles.ImageLogo}>
          <Image
            style={styles.ItemImage}
            source={{
              uri:
                'https://images.unsplash.com/photo-1525828024186-5294af6c926d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            }}
          />
        </View>
        <View style={styles.itemBody}>
        <Text style={styles.itemName}>{item.name}</Text>

        </View>
        <View style={[styles.itemStatus,{backgroundColor:item.status ==='Purple' ?'#e584Be':'#69c080'}]}>
        <Text style={styles.itemStatus}>{item.status}</Text>

        </View>
      </View>
    );
  };
const separator = () =>{
  return <View style={{height:1,backgroundColor:'#f1f1f1'}}/>
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {tabs.map((e) => (
          <TouchableOpacity
            onPress={() => setStatusFilter(e.status)}
            style={[styles.btnTab, status == e.status && styles.btnActive]}>
            <Text
              style={[
                styles.textTab,
                status == e.status && styles.textTabActive,
              ]}>
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(i) => i.toString()}
        ItemSeparatorComponent={separator}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab: {
    alignSelf: 'center',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.5,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#cccc',
    padding: 10,
    justifyContent: 'center',
  },
  textTab: {
    fontSize: 16,
    color: '#000',
  },
  btnActive: {
    backgroundColor: 'green',
  },
  textTabActive: {
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  ImageLogo: {
    paddingVertical: 16,
  },
  ItemImage: {
    width: 50,
    height: 50,
  },
  itemBody:{
    flex:1,
    paddingHorizontal:18,
    justifyContent:'center'
  },
  itemName:{
    fontSize:18
  },
  itemStatus:{
    // backgroundColor:'green',
    paddingHorizontal:5,
    justifyContent:'center',

  }
});
