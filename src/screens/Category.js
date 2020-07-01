import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";
import ItemList from "../components/ItemList";
import CustomHeader from "../components/CustomHeader";

const CATEGORY = [
  "Dresses",
  "Shoes",
  "Shorts",
  "Skirts",
  "Dresses",
  "Shoes",
  "Shorts",
  "Skirts"
];
//
// 
// 
            
const DRESSES = [
  {
    id: 1,
    imageUri:{uri:'https://images.unsplash.com/photo-1584957857166-7669e8459e02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},

    name: "Helena",
    priceOne: 120,
    priceTwo: "$180"
  },
  {
    id: 2,
    imageUri: {uri:'https://images.unsplash.com/photo-1551212765-dce5ee657676?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    name: "Marie",
    priceOne: 180,
    priceTwo: null
  },
  {
    id: 3,
    imageUri: {uri:'https://images.pexels.com/photos/3772506/pexels-photo-3772506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    name: "Christina",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 4,
    imageUri: {uri:'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    name: "Annabelle",
    priceOne: 70,
    priceTwo: null
  },
  {
    id: 5,
    imageUri:{uri:'https://images.unsplash.com/photo-1572679079418-de9c4361425d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},

    name: "Shakira",
    priceOne: 380,
    priceTwo: null
  },
  {
    id: 6,
    imageUri:{uri:'https://images.unsplash.com/photo-1491972690050-ba117db4dc09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    name: "Elena",
    priceOne: 80,
    priceTwo: null
  }
];

const SHOES = [
  {
    id: 1,
    imageUri: require('../assets/shoe1.jpg'),
    name: "Nike",
    priceOne: 120,
    priceTwo: "$180"
  },
  {
    id: 2,
    imageUri: {uri:'https://images.pexels.com/photos/40662/shoes-footwear-hiking-shoes-walking-40662.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
     name: "Addidas",
    priceOne: 180,
    priceTwo: null
  },
  {
    id: 3,
    imageUri: {uri:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    name: "Puma",
    priceOne: 140,
    priceTwo: null
  },
  {
    id: 4,
    imageUri: {uri:'https://images.unsplash.com/photo-1561808843-7adeb9606939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'},
    name: "Reebok",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 5,
    imageUri: {uri:'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    name: "Jordan",
    priceOne: 40,
    priceTwo: null
  },
  {
    id: 6,
    imageUri:  {uri:'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    name: "Vans",
    priceOne: 30,
    priceTwo: null
  }
];

class Category extends Component {
  state = {
    currentIndex: 0
  };

  renderCategory = () => {
    return CATEGORY.map((item, i) => {
      return (
        <Text
          key={i}
          onPress={() => this.setState({ currentIndex: i })}
          style={{
            fontSize: 18,
            color: this.state.currentIndex === i ? "#F08C4F" : "white",
            paddingHorizontal: 10
          }}
        >
          {item}
        </Text>
      );
    });
  };

  renderItemList_Dress = () => {
    return DRESSES.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.priceOne,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.priceOne}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };

  renderItemList_Shoes = () => {
    return SHOES.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.priceOne,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.priceOne}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };

  renderItemList = () => {
    if (this.state.currentIndex === 0) {
      return this.renderItemList_Dress();
    } else if (this.state.currentIndex === 1) {
      return this.renderItemList_Shoes();
    }
  };

  render() {
     const {titleFirst} = this.props.route.params
    return (
      <View
        style={{
          flex: 1
        }}
      >
       <CustomHeader navigation={this.props.navigation} headerName  = {titleFirst}/>
         {/* headerScrollHorizontal */}
        <View
          style={{
            height: hp("8%"),
            backgroundColor: "#804F53",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 4
            }}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "center"
              }}
              ref={node => (this.scroll = node)}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                {this.renderCategory()}
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              onPress={() => {
                this.scroll.scrollTo({ x: wp("80%") });
              }}
              name="ios-arrow-forward"
              size={20}
              color="white"
            />
          </View>
        </View>
        {/* headerScrollHorizontal */}

        {/* itemLists ScrollVertical */}
        <View
          style={{
            flex: 1
          }}
        >
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            {/* ItemList */}
            {this.renderItemList()}
          </ScrollView>
        </View>
        {/* itemLists ScrollVertical */}
      </View>
    );
  }
}

export default Category;






//dressse
//                                  

          

             //shoes
          // 
          // 
          // 