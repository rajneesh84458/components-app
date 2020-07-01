import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ShippingPartner from "../components/ShippingPartner";

class Payment extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor:'#fff',
          
        }}
      >
        <View
          style={{
            height: hp("45%"),
            width: "100%",
            marginTop: 20
          }}
        >
          <View
            style={{
              paddingHorizontal: 15
            }}
          >
            <Text
              style={{
                color: "gray",
                fontSize: 14
              }}
            >
              Which shipping partner do you like?
            </Text>
            <View
              style={{
                marginTop: 15
              }}
            >
              <ShippingPartner
                imageUri={{uri:'http://www.pngmart.com/files/3/Credit-Card-Transparent-PNG.png'}}
                name="Creditcard"
                description="Visa, Mastercard, JCB, Amex"
              />
              <ShippingPartner
                imageUri={{uri:'https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-1/51245411_2504694006226769_3621165490799378432_n.png?_nc_cat=102&_nc_sid=dbb9e7&_nc_oc=AQlPYuYBcMZVa6PmoEiOF50sUU7kcyZGEyQ1wsFs8IfOJkm2araR401_C9ioqZ_qXqBcUU5rk3nMx81QI55sHGqN&_nc_ht=scontent.fdel3-1.fna&oh=89a18e81ee035bb6126a9200d5ea9c53&oe=5F063C86'}}
                name="Paypal"
                description="paypalaccount@gmail.com"
              />
              <ShippingPartner
                imageUri= {require('../assets/applepay.png')}
                name="ApplePay"
                description="applepay@gmail.com"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 15,
            flex: 1,
            paddingHorizontal: 15
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("CreditCard")}
              style={{
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
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "white"
                }}
              >
                Next Step
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Payment;

{
  /* <Button
          title="go to TermsAndConditions"
          onPress={() => this.props.navigation.navigate("TermsAndConditions")}
        />
        <Button
          title="go to CreditCard"
          onPress={() => this.props.navigation.navigate("CreditCard")}
        /> */
}
