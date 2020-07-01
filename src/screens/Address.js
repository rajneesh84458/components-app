import React, { Component } from "react";
import { View, Text, TouchableOpacity,ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../components/Input";
import CustomHeader from "../components/CustomHeader";

class Address extends Component {
  render() {
    return (
         <View style={{flex:1,backgroundColor:'#fff'}}>
      

     
        <ScrollView
          style={{
            flex: 1,
            paddingBottom: 15,
            paddingHorizontal: 15,
            marginTop: 10
          }}
        >
          <KeyboardAwareScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end"
              }}
            >
              <Input label="Your name" value="Rajneesh" widthHalf={true} />
              <Input value="kumar" widthHalf={true} />
            </View>
            <Input label="Address line" value="Naurangabad G.T. Road" />
            <Input label="Address line 2" value="Aligarh" />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end"
              }}
            >
              <Input label="City" value="Aligarh" widthHalf={true} />
              <Input label="Zip" value="202001" widthHalf={true} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end"
              }}
            >
              <Input label="State" value="UP" widthHalf={true} />
              <Input label="Country" value="India" widthHalf={true} />
            </View>
          </KeyboardAwareScrollView>
          <Text
            style={{
              color: "gray",
              fontSize: 14,
              paddingBottom: 5
            }}
          >
            Shipping Options
          </Text>
          <Text
            style={{
              color: "#F08C4F",
              fontSize: 14,
              paddingBottom: 5
            }}
          >
            Please ship to another address
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("Shipping")}
              style={{
                backgroundColor: "#1C2850",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                shadowOffset: { width: 1, height: 5 },
                shadowColor: "#000",
                shadowOpacity: 0.4,
                elevation: 4,
                paddingVertical: 10,
                padding:7,
                marginBottom:5

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
        </ScrollView>
 
      </View>
    );
  }
}

export default Address;