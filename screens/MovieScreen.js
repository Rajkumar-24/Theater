import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect, useState, useContext, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Calender from "../components/Calender";
import moment from "moment";
import { Place } from "../PlaceContext";
import { client } from "../theatre/sanity";

const MovieScreen = ({ title }) => {
  const navigation = useNavigation();
  const { selectedCity, setSelectedCity, locationId, setLocationId } =
    useContext(Place);
  const route = useRoute();
  const movieTitle = route.params.title;
  const today = moment().format("YYY-MM-DD");
  const [selectedDate, setSelectedDate] = useState(today);
  const [mall, setMall] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
      headerStyle: {
        backgroundColor: "#0a0b0f",
        shadowColor: "transparent",
        shadowOpacity: 0.3,
        shadowOffest: { width: -1, height: 1 },
        shadowRadius: 3,
      },
      headerTintColor: "#fff",
    });
  }, []);
  const malls = [
    {
      id: "0",
      place: "Bangalore",
      galleria: [
        {
          id: "10",
          name: "PVR MSR Elements Mall Bengaluru",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "11",
          name: "PVR Vaishnavi Sapphire Bengaluru",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "12",
          name: "PVR Orion Bengaluru",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "13",
          name: "PVR Aura Park Square Bengaluru",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "14",
          name: "PVR The Cinema GT World Bengaluru",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "15",
          name: "PVR VEGA Bengaluru",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "1",
      place: "Hyderabad",
      galleria: [
        {
          id: "20",
          name: "PVR Atrium Gachibowli Hyderabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "21",
          name: "PVR Icon Hitech Madhapur Hyderabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "22",
          name: "PVR Preston Prime, Gachibowli Hyderabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "23",
          name: "PVR Mallapur Hyderabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "24",
          name: "PVR Next Galleria Mall Panjagutta",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "25",
          name: "PVR RK Cineplex Hyderabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "2",
      place: "Delhi-NCR",
      galleria: [
        {
          id: "30",
          name: "PVR Select City Walk Delhi",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "31",
          name: "PVR Anupam Saket Delhi",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "32",
          name: "PVR ECX Chanakyapuri Delhi",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "33",
          name: "PVR Promenade Vasant Kunj Delhi ",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "34",
          name: "PVR Rivoli Delhi",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "35",
          name: "PVR Crown Plaza Faridabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "3",
      place: "Ahmedabad",
      galleria: [
        {
          id: "34",
          name: "PVR Motera Ahmedabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "41",
          name: "PVR Arved Transcube Ahmedabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "42",
          name: "Cinemax Shiv Ahmedabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "43",
          name: "PVR Acropolis Ahmedabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "44",
          name: "Cinemax Dev Arc Ahmedabad",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "4",
      place: "Chennai",
      galleria: [
        {
          id: "50",
          name: "PVR SKLS Galaxy Mall, Red Hills Chennai",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "51",
          name: "SPI S2 Perambur Chennai",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "52",
          name: "PVR VR Chennai Anna Nagar ",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "53",
          name: "PVR Ampa Chennai",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "54",
          name: "SPI Palazzo Nexus Vijaya Mall, Vadapalani Chennai",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "5",
      place: "Kolkata",
      galleria: [
        {
          id: "60",
          name: "PVR Avani Kolkata",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "61",
          name: "PVR Diamond Plaza Jassore Kolkata",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "62",
          name: "PVR Manisquare Kolkata",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "63",
          name: "PVR Uniworld Downtown Mall, New Town",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "6",
      place: "Jaipur",
      galleria: [
        {
          id: "70",
          name: "PVR Mall Of Jaipur",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "71",
          name: "PVR LUXE MALL OF JAIPUR",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "72",
          name: "PVR Manisquare",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "73",
          name: "PVR Uniworld Downtown Mall, New Town",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
    {
      id: "7",
      place: "Lucknow",
      galleria: [
        {
          id: "80",
          name: "PVR Phoenix Lucknow",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "81",
          name: "PVR Sahara Lucknow",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "82",
          name: "PVR Sahu Lucknow",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "83",
          name: "PVR Singapore Lucknow",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
        {
          id: "84",
          name: "PVR SUPERPLEX Lulu Lucknow",
          showtimes: [
            "9:00AM",
            "10:30AM",
            "1:25PM",
            "2:00PM",
            "4:20PM",
            "5:00PM",
            "6:30PM",
            "9:00PM",
            "10:30PM",
          ],
        },
      ],
    },
  ];
  const [reqData, setReqData] = useState([]);

  useEffect(() => {
    const fetchTheatres = async () => {
      const response = await client.fetch(
        `*[_type == "theatre" && location._ref == "${locationId}"]{
          ...,
          "showtimes": *[_type == 'showtimes' && references(^._id) && references('movie', "${route.params.movieId}")]{
            _id,
            time,
            row,
            "theatre": theatre->name,
            "movie": movie->name,
          }
        }`
      );
      setReqData(response);
    };
    fetchTheatres();
  }, []);

  console.log(reqData);
  return (
    <View style={{ backgroundColor: "#0a0b0f" }}>
      <ScrollView
        contentContainerStyle={{ marginLeft: 10, backgroundColor: "#0a0b0f" }}
      >
        <Calender selected={selectedDate} onSelectedDate={setSelectedDate} />
      </ScrollView>
      {reqData.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => setMall(item.name)}
          style={{
            marginHorizontal: 20,
            marginVertical: 10,
            backgroundColor: "#0a0b0f",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500", color: "#fff" }}>
            {item.name}
          </Text>

          {mall.includes(item.name) ? (
            <FlatList
              style={{ backgroundColor: "#0a0b0f" }}
              numColumns={3}
              data={item.showtimes}
              renderItem={({ item, index }) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate("Theatre", {
                      showtime: item.time,
                      mall: mall,
                      data: selectedDate,
                      name: route.params.title,
                      row: item.row,
                      docId: item._id,
                      showtimeId: index,
                    })
                  }
                  style={{
                    borderColor: "#efae28",
                    borderWidth: 0.7,
                    padding: 5,
                    width: 70,
                    borderRadius: 3,
                    margin: 8,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#efae28",
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    {item.time}
                  </Text>
                </Pressable>
              )}
            />
          ) : null}
        </Pressable>
      ))}
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
