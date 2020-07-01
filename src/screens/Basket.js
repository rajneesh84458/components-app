import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/Ionicons";
import BasketItem from "../components/BasketItem";
import BasketTotalList from "../components/BasketTotalList";
import CustomHeader from "../components/CustomHeader";

class Basket extends Component {
  render() {
    const { imageUri, name, color, size, price } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#EFF0F1"
        }}
      >
          <CustomHeader navigation ={this.props.navigation} headerName ="Basket"/>
        {/* ItemLists_upper */}
        <View
          style={{
            flex: 2
          }}
        >
          <ScrollView>
            <BasketItem
              editIcon={true}
              imageUri={{uri:'https://images.unsplash.com/photo-1584957857166-7669e8459e02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'}}
               name= "Dress Helena"
              color="Black"
              size="F"
              price={120}
              {...this.props}
            />
            <BasketItem
              editIcon={true}
              imageUri={{uri:'https://images.unsplash.com/photo-1568166460861-fcaf9bb7c1a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'}}
              name="Dress Marie"
              color="Black"
              size="M"
              price={180}
              {...this.props}
            />
            <BasketItem
              editIcon={true}
              imageUri={{uri:'https://images.unsplash.com/photo-1575978108872-9b1429a19a0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'}}
              name="Dress Betruschka"
              color="Black"
              size="M"
              price={80}
              {...this.props}
            />
          </ScrollView>
        </View>
        {/* ItemLists_upper */}
        {/* total_lower */}
        <View
          style={{
            flex: 1,
            paddingTop: wp("10%")
          }}
        >
          <BasketTotalList label="Shipping" price={6} />
          <BasketTotalList label="Your total" price={380} />
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              justifyContent: "flex-end",
              paddingBottom: 15
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("Checkout")}
              style={{
                flexDirection: "row",
                backgroundColor: "#1C2850",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                shadowOffset: { width: 1, height: 2 },
                shadowColor: "#000",
                shadowOpacity: 0.4,
                elevation: 4,
                paddingVertical: 10
              }}
            >
              <View
                style={{
                  marginRight: 15
                }}
              >
                <Icon name="md-cart" size={20} color="white" />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "white"
                }}
              >
                Place your order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* total_lower */}
      </View>
    );
  }
}

export default Basket;

{
  /* <Button
          title="go to Checkout"
          onPress={() => this.props.navigation.navigate("Checkout")}
        />
        <Button
          title="go to EditBasket"
          onPress={() => this.props.navigation.navigate("EditBasket")}
        /> */
}