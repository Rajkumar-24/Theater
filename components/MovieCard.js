import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const MovieCard = ({ item }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const navigation = useNavigation();
  const movieTitle = item.title.substr(0, 20);
  console.log(item);
  const fetchtrailerdata = async () => {
    try {
      const API_KEY = "AIzaSyCmE8OH70SJc-m5xrvh3fCmqb8DufgQJ00";
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            q: `${movieTitle} trailer`,
            type: "video",
            key: API_KEY,
          },
        }
      );

      if (response.data.items && response.data.items.length > 0) {
        const videoId = response.data.items[0].id.videoId;

        console.log(videoId);
        setTrailerUrl(videoId);
      } else {
        setTrailerUrl("No trailer found");
      }
    } catch (error) {
      console.log("Error fetching movie trailer:", error);
    }
    navigation.navigate("MovieD", {
      title: item.title,
      movieId: item._id,
      language: item.original_language,
      videoId: trailerUrl,
      overview: item.overview,
      posterPath: item.poster_path,
    });
  };
  return (
    <SafeAreaView>
      <Pressable
        onPress={
          fetchtrailerdata
          // () =>
          // navigation.navigate("MovieD", {
          //   title: item.title,
          //   movieId: item._id,
          // })
        }
        style={{
          flex: 1,
          borderRadius: 5,
          marginHorizontal: 17,
          marginVertical: 10,
          justifyContent: "center",
          height: Dimensions.get("window").height / 2.5,
          width: (Dimensions.get("window").width - 80) / 2,
        }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
          }}
          style={{
            width: "100%",
            height: "70%",
            resizeMode: "contain",
            borderRadius: 10,
          }}
        />
        <View>
          <Text
            style={{
              marginTop: 6,
              fontSize: 15,
              fontWeight: "400",
              color: "#ebe6bf",
            }}
          >
            {item.title.substr(0, 20)}
          </Text>
          <Text
            style={{
              marginTop: 4,
              fontSize: 15,
              fontWeight: "400",
              color: "#f0c74b",
            }}
          >
            U/A - {item.original_language}
          </Text>
        </View>
        <Pressable
          onPress={fetchtrailerdata}
          style={{
            backgroundColor: "#ffc40c",
            padding: 10,
            borderRadius: 5,
            marginRight: 10,
            width: 70,
            alignSelf: "flex-end",
            alignItems: "center",
            marginTop: 3,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 15, fontWeight: "500" }}>
            BUY
          </Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
