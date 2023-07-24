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
    <View style={{ marginBottom: 55 }}>
      <ImageBackground
        style={{ height: 200, resizeMode: "contain" }}
        source={{
          uri: "https://www.koimoi.com/wp-content/new-galleries/2022/07/oppenheimer-first-poster-highlights-devastation-caused-by-atomic-bomb-0001.jpg",
        }}
      >
        <Pressable
          style={{
            height: 90,
            backgroundColor: "white",
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
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  fontSize: 18,
                  color: "black",
                  fontWeight: "500",
                  alignItems: "center",
                  marginLeft: "50%",
                }}
              >
                New Release{" "}
              </Text>
              <Text
                style={{ marginVertical: 5, fontSize: 16, fontWeight: "700" }}
              >
                Oppenheimer
              </Text>
              <Text style={{ fontSize: 16, color: "gray", fontWeight: "500" }}>
                U.A * English
              </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: "#ffc40c",
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
