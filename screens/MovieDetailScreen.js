import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import YoutubeIframe from "react-native-youtube-iframe";

const MovieDetailScreen = () => {
  const navigation = useNavigation();
  const [status, setStatus] = React.useState(false);

  const route = useRoute();

  console.log(route.params);
  return (
    <View style={styles.container}>
      <YoutubeIframe
        height={300}
        play={status}
        videoId={route.params.videoId}
      />
      <View style={{ borderColor: "#fff", borderWidth: 0.5 }}></View>

      <View
        style={{
          alignSelf: "center",
          marginBottom: 12,
          borderBottomWidth: 1.5,
        }}
      >
        <Text style={{ fontSize: 29, fontWeight: "bold", color: "#fff" }}>
          {route.params.title.substr(0, 20)}
        </Text>
      </View>
      <View style={{ marginLeft: 10, flexDirection: "row" }}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${route.params.posterPath}`,
          }}
          style={{
            height: "80%",
            width: "48%",
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 1,
          }}
        />
        <View
          style={{
            marginLeft: 5,
            marginRight: 3,
            maxWidth: "48%",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              marginTop: 8,
              fontWeight: "600",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Title:
          </Text>
          <Text
            style={{
              fontSize: 19,
              textAlign: "center",
              marginTop: 4,
              color: "#ebe6bf",
            }}
          >
            {route.params.title.substr(0, 20)}
          </Text>
          <Text
            style={{
              fontSize: 22,
              marginTop: 8,
              fontWeight: "600",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Language:
          </Text>
          <Text
            style={{
              fontSize: 19,
              textAlign: "center",
              marginTop: 4,
              color: "#ebe6bf",
            }}
          >
            U.A {route.params.language}
          </Text>
          <Text
            style={{
              fontSize: 22,
              marginTop: 8,
              fontWeight: "600",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Overview:
          </Text>
          <ScrollView style={{ maxHeight: "29%" }}>
            <Text
              style={{
                fontSize: 19,
                marginTop: 4,
                textAlign: "center",
                color: "#ebe6bf",
              }}
            >
              {route.params.overview}
            </Text>
          </ScrollView>
        </View>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate("Movie", {
            title: route.params.title,
            movieId: route.params.movieId,
          })
        }
        style={{
          backgroundColor: "#f0c74b",

          marginBottom: 70,
          width: "100%",
          alignSelf: "center",
          height: 50,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 18,
            fontWeight: "500",
            textAlign: "center",
            marginTop: 10,
            color: "#f3f3f3",
            letterSpacing: 2,
          }}
        >
          BUY
        </Text>
      </Pressable>
    </View>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0a0b0f",
  },
});
