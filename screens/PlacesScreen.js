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
import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { Place } from "../PlaceContext";
import { client } from "../theatre/sanity";

const PlacesScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerStyle: {
        backgroundColor: "#0a0b0f",
      },

      headerLeft: () => (
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            name="chevron-back"
            size={24}
            color="#f7710b"
          />
          <Text style={{ fontSize: 15, letterSpacing: 1, color: "#fff" }}>
            CHANGE LOCATION
          </Text>
        </Pressable>
      ),
    });
  }, []);
  const [cities, setCities] = useState([]);
  const { selectedCity, setSelectedCity, locationId, setLocationId } =
    useContext(Place);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(`
      *[_type == "location"]
      `);
      setCities(result);
    };
    fetchData();
  }, []);
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
  const selectCity = (city, locationId) => {
    setSelectedCity(city);
    setLocationId(locationId);
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 800);
  };
  console.log(cities);
  return (
    <View style={{ backgroundColor: "#0a0b0f", flex: 1 }}>
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
          backgroundColor: "#222222",
        }}
      >
        <TextInput
          placeholder="Search Your City"
          placeholderTextColor="#ffffff"
        />
        <Ionicons name="search-outline" size={24} color="#ffffff" />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#fff" }}>Selected Location</Text>
        <Text style={{ color: "#fff" }}>{selectedCity}</Text>
      </View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={cities}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => selectCity(item.city, item._id)}
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
              borderColor: "#fff",
              borderWidth: 1,
              borderRadius: 10,
            }}
          >
            <ImageBackground
              imageStyle={{ borderRadius: 8 }}
              style={{ width: 160, height: 100, opacity: 0.8 }}
              source={{ uri: item.image }}
            >
              {selectedCity == item.city && (
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
                  {item.city}
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
