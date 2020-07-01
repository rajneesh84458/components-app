import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Input = ({ label, placeholder, value, widthHalf }) => {
  return (
    <View
      style={{
        height: wp("20%"),
        marginBottom: 8,
        padding:10
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          color: "gray",
          paddingVertical:5,
        }}
      >
        {label}
      </Text>

      
        <TextInput
          style={[
            {
              height: wp("11%"),
              fontSize: 18,
              fontWeight: "500",
              paddingVertical: 10,
              paddingLeft: 20,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 4
            },
            widthHalf
              ? {
                  width: wp("43%")
                }
              : null
          ]}
          value={value}
          placeholder={placeholder}
        />
    
    </View>
  );
};

export default Input;