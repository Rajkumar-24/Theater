import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={{ marginBottom: 55, backgroundColor: "#564533" }}>
      <ImageBackground
        style={{
          height: 200,
          resizeMode: "contain",
        }}
        source={require("../assets/imgg.jpg")}
      >
        <Pressable
          style={{
            height: 90,
            backgroundColor: "#0a0b0f",
            padding: 10,
            borderRadius: 10,
            width: "90%",
            top: 160,
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#0a0b0f",
            }}
          >
            <View style={{ backgroundColor: "#0a0b0f" }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#ebe6bf",
                  fontWeight: "500",
                  alignItems: "center",
                  marginLeft: "50%",
                }}
              >
                New Release{" "}
              </Text>
              <Text
                style={{
                  marginVertical: 5,
                  fontSize: 16,
                  fontWeight: "700",
                  color: "#ebe6bf",
                }}
              >
                Oppenheimer
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "gray",
                  fontWeight: "500",
                  color: "#ebe6bf",
                }}
              >
                U.A * English
              </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: "#efae28",
                padding: 10,
                borderRadius: 5,
                marginRight: 10,
              }}
            >
              <Text
                style={{ color: "black", fontSize: 14, fontWeight: "bold" }}
              >
                BUY
              </Text>
            </Pressable>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
