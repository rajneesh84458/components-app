import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ShippingPartner from "../components/ShippingPartner";

class Shipping extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor:'#fff'
        }}
      >
        <View
          style={{
            height: hp("45%"),
            width: "100%",
            marginTop: 20,
            borderBottomWidth: 1,
            borderBottomColor: "gray"
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
                //marginTop: 5
              }}
            >
              <ShippingPartner
                imageUri={{uri:'https://github.com/kosaikham/ecommerce-app-design/blob/master/assets/logo/logo_1.jpg?raw=true'}}
                name="DHL"
                description="No additional Costs"
              />
              <ShippingPartner
                imageUri={{uri:'https://github.com/kosaikham/ecommerce-app-design/blob/master/assets/logo/logo_2.jpg?raw=true'}}
                name="UPS"
                description="No additional Costs"
              />
              <ShippingPartner
                imageUri={{uri:'https://github.com/kosaikham/ecommerce-app-design/blob/master/assets/logo/logo_3.png?raw=true'}}
                name="FEDEX EXPRESS"
                description="Additional 12.99 $"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 15,
            flex: 1,
            paddingHorizontal: 15
          }}
        >
          <Text
            style={{
              color: "gray",
              fontSize: 14,
              marginBottom: 15
            }}
          >
            Shipping Address
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
           Rajneesh kumar
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
            Naurangabad G.T. Road
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
            Aligarh
          </Text>
          <Text
            style={{
              fontSize: 14
            }}
          >
           Uttar Pradesh,India
          </Text>
         
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("Payment")}
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

export default Shipping;
