import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import React, { useCallback, useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { Place } from "../PlaceContext";

const PlacesScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            name="chevron-back"
            size={24}
            color="blue"
          />
          <Text style={{ fontSize: 15, letterSpacing: 1 }}>
            CHANGE LOCATION
          </Text>
        </Pressable>
      ),
      //   headerStyle: {
      //     backgroundColor: "#f5f5f5f5",
      //     shadowColor: "transparent",
      //     shadowOpacity: 0.3,
      //     shadowOffest: { width: -1, height: 1 },
      //     shadowRadius: 3,
      //   },
    });
  }, []);
  const { selectedCity, setSelectedCity } = useContext(Place);
  const places = [
    {
      id: "0",
      place: "Bangalore",
      image:
        "https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "1",
      place: "Ahmedabad",
      image:
        "https://images.pexels.com/photos/6813041/pexels-photo-6813041.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "2",
      place: "Chennai",
      image:
        "https://images.pexels.com/photos/10070972/pexels-photo-10070972.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "3",
      place: "Delhi - NCR",
      image:
        "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "4",
      place: "Hyderabad",
      image:
        "https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "5",
      place: "Kolkata",
      image:
        "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "6",
      place: "Jaipur",
      image:
        "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "7",
      place: "Lucknow",
      image:
        "https://images.pexels.com/photos/15351642/pexels-photo-15351642.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];
  const selectCity = (city) => {
    setSelectedCity(city);
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 800);
  };
  return (
    <View>
      <View
        style={{
          margin: 10,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "#e0e0e0e0",
          borderWidth: 2,
          borderRadius: 30,
        }}
      >
        <TextInput placeholder="Search Your City" />
        <Ionicons name="search-outline" size={24} color="black" />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Selected Location</Text>
        <Text>{selectedCity}</Text>
      </View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={places}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => selectCity(item.place)}
            style={{ marginVertical: 10, marginHorizontal: 20 }}
          >
            <ImageBackground
              imageStyle={{ borderRadius: 8 }}
              style={{ width: 160, height: 100, opacity: 0.8 }}
              source={{ uri: item.image }}
            >
              {selectedCity == item.place && (
                <View
                  style={{
                    flex: 1,
                    marginLeft: 7,
                    marginTop: 7,
                    alignContent: "flex-end",
                  }}
                >
                  <Entypo
                    style={{
                      color: "white",
                    }}
                    name="check"
                    size={35}
                    color="black"
                  />
                </View>
              )}
              <View
                style={{
                  flex: 1,
                  marginLeft: 10,
                  marginBottom: 7,
                  justifyContent: "flex-end",
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
                >
                  {item.place}
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
        )}
      />
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
