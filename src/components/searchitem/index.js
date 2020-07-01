import React, {Component} from 'react';
import {SafeAreaView,View,Image,Text,TouchableOpacity,TextInput,Dimensions,ScrollView} from 'react-native';
import styles from './style';
import NavigationBar from 'react-native-navbar';
import storageManager from '../config/storageManager.js';
import { loginStatusKey, tokenKey, userKey, languagekey } from '../config/keyManager.js';
import GetLocalizedData from '../LocalizedDataGet';
import foodname from './foodname.json'
var { width, height } = Dimensions.get('window')


import SearchInput, { createFilter } from 'react-native-search-filter';

const KEYS_TO_FILTERS = ['titleEn'];

class CustomBack extends Component {
    constructor(props) {
      super(props);
       
    }
  
    render() {
      return (        
          <TouchableOpacity 
            onPress={() => {this.props.navprops.navigation.goBack()}} >
              <Image source={require('../images/backicon.png')} style={{width:30, height:21}}resizeMode='center'/>
          </TouchableOpacity>
        
      );
    }
  }
  
  class Toptitle extends Component {
  
  
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
             {/* <Image source={require('./image/network.png')} style={{
          width: 25,
          height: 25,
          marginRight:10
        }} resizeMode='center' /> */}
          <Text style={{ fontSize: 22, fontWeight: 'normal' , color:'white'}}>{this.props.title}</Text>
        </View>
      );
    }
  }

  function getlocalisedtext(thekey) {

    var langkey, returnedtext;
    storageManager.getData(languagekey).then(
        function (value) {
            if (value) {
                langkey = value;
                // console.log('language key   found' + langkey);
                var languagedata = new GetLocalizedData(langkey);
                returnedtext = languagedata.gettextforkey(thekey);
                // console.log(returnedtext);
                return returnedtext;
            }
        }
  
    ).catch(
        function () {
            console.log('language key not found');
        }
    );
    var languagedata = new GetLocalizedData(langkey);
    var returnedtext = languagedata.gettextforkey(thekey);
    return returnedtext;
  };

  function checkandsettitleValue(thekey, thethis) {
    var langkey, returnedtext;
  
    storageManager.getData(languagekey).then(
        function (value) {
            if (value) {
                langkey = value;
                // console.log('language keyAgain-found' + langkey);
  
                var languagedata = new GetLocalizedData(langkey);
                returnedtext = languagedata.gettextforkey(thekey);
                // console.log(returnedtext);
                thethis.setState({ navtitle2: returnedtext });
  
                if (returnedtext.length > 1) {
                    thethis.setState({ navtitle: returnedtext });
                    clearInterval(thethis.timer);
                }
                
            }
        }
  
    ).catch(
        function () {
            console.log('language key not found');
        }
    );
  
  }

 export default class SearchItem extends Component {
    constructor(props){
        super(props);
        //var item = this.props.navigation.state.params.item;
        this.state = {
            //link:item.link,
            localizedobject: new GetLocalizedData(1),
            navtitle: getlocalisedtext("FoodName"), 
            navtitle2: '', 
            popupshow:false,
            titlename:'',
            measurementType:'',
            Calories:'',
            Fats:'',
            Protein:'',
            Carbs:'',
            Sodium:'',
            Fiber:'',
            Sugar:'',
            searchTerm: ''

        }
       
    }

    componentDidMount() {
        storageManager.getData(languagekey).then((value) => {
            //console.log(value);
           this.setState({ localizedobject: new GetLocalizedData(value) });
    
         });
    
         this.timer = setInterval(
            () => {
              // console.log('dsfas'); 
      
              // this.setState({navtitle:getlocalisedtext2("Ess")});
              checkandsettitleValue("FoodName", this);
      
            },
            0,
          );
    }



    _keyExtractor = (item, index) => item.id + "";

_onPressItem = (item) => {
  console.log(item);
//this.props.navigation.navigate('Popup',{item})

if(item.id==999){
  console.log('fghjk')
  this.props.navigation.navigate('addfood')
}
else{
  this.setState({
    popupshow:true,
    titlename:item.titleEn,
    measurementType:item.measurementType,
    Calories:item.calories,
    Fats:item.fat,
    Protein:item.protein,
    Carbs:item.carbs,
    Sodium:item.sodium,
    Fiber:item.fiber,
    Sugar:item.sugar
  
  })
}




};

searchUpdated(term) {
  this.setState({ searchTerm: term })
}

  render() {
    const navprops = this.props;
    const filtered = foodname.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
     // console.log('okok',foodname)
     // console.log('hello',this.state.link)
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#8BC541'}}>
            <NavigationBar
                title={<Toptitle title={this.state.navtitle}></Toptitle>}
                style={{ borderColor: 'black', borderBottomWidth: 1 }}
                leftButton={ <CustomBack navprops={navprops}/> }
                tintColor="#58585a"
                ref={(navigationbar) => { this.navigationbar = navigationbar }}
              /> 
            <SearchInput 
              onChangeText={(term) => { this.searchUpdated(term) }} 
              style={styles.searchInput}
              placeholder="Type a message to search"
            />
            <ScrollView>
              {filtered.map((item,foodname) => {
                return (
                  <TouchableOpacity onPress={() => { this._onPressItem(item) }} key={item.id} style={styles.Itemview}>
                    <View>
                      <Text>{item.titleEn}</Text>
                    
                    </View>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>

            <View style={{alignItems:'flex-end'}}>
              <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                <Text style={{color:'#2699FA',fontSize:20,marginRight:10,padding:10}}>DONE</Text>
              </TouchableOpacity>
              
            </View>
            {
              this.state.popupshow  ? <SafeAreaView style={styles.popupstyle}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <View style={styles.viewitempopup}>
                    <Text style={{fontSize:20,marginBottom:20,textAlign:'center'}}>{this.state.titlename}</Text>
                    <View style={{flexDirection:'row',width:width-130}}>
                      <Text style={{textAlignVertical:'center',}}>{this.state.localizedobject.gettextforkey("quantity")}({this.state.measurementType}): </Text>
                      <TextInput
                        keyboardType={'numeric'}
                        maxLength={3} 
                        onChangeText={(telephone) => {this.setState({})}}
                        placeholder='2'
                        name="telephone" 
                        value={this.state.telephone}
                        style={{
                          width:40,
                          borderColor:'#000',
                          borderBottomWidth:1,
                          //padding:10,
                          textAlign:'center',
                          padding:1,
                          //margin:10,
                         }}
                        /> 
                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                      <Text>{this.state.localizedobject.gettextforkey("calories")}:<Text>{this.state.Calories}</Text></Text>
                      
                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                      <Text>{this.state.localizedobject.gettextforkey("Fats")}:<Text>{this.state.Fats}</Text></Text>
                      
                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                      <Text>{this.state.localizedobject.gettextforkey("Protein")}:<Text>{this.state.Protein}</Text></Text>
                      
                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                      <Text>{this.state.localizedobject.gettextforkey("Carbs")}:<Text>{this.state.Carbs}</Text></Text>
                      
                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                      <Text>{this.state.localizedobject.gettextforkey("Sodium")}:<Text>{this.state.Sodium}</Text></Text>
                      
                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                      <Text>{this.state.localizedobject.gettextforkey("Fiber")}:<Text>{this.state.Fiber}</Text></Text>
                      
                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                      <Text>{this.state.localizedobject.gettextforkey("Sugar")}:<Text>{this.state.Sugar}</Text></Text>
                      
                    </View>
                    <View style={{flexDirection:'row',marginTop:20}}>
                      <TouchableOpacity style={{alignItems:'center',flex:1}} onPress={()=> this.setState({popupshow:false})}>
                        <Text style={{color:'#145194'}}>{this.state.localizedobject.gettextforkey("cancel")}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{alignItems:'center',flex:1}} onPress={()=> this.setState({popupshow:false})}>
                        <Text style={{color:'#145194'}}>{this.state.localizedobject.gettextforkey("add")}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </SafeAreaView> :
              null
            }
        </SafeAreaView>
    );
  }
}