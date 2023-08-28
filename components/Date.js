import { StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import { Pressable } from "react-native";

const Date = ({ date, selected, onSelectedDate }) => {
  const day = moment(date).format("ddd");
  const dayNumber = moment(date).format("D");
  const fullDate = moment(date).format("YYY-MM-DD");
  console.log(fullDate);
  return (
    <Pressable
      onPress={() => onSelectedDate(fullDate)}
      style={[
        styles.container,
        selected === fullDate && {
          backgroundColor: "#efae28",
        },
      ]}
    >
      <Text
        style={[
          styles.day,
          selected === fullDate && {
            color: "white",
            fontWeight: "500",
          },
        ]}
      >
        {day}
      </Text>
      <View style={{ height: 15 }} />
      <Text
        style={[
          styles.number,
          selected === fullDate && {
            color: "white",
            fontWeight: "500",
          },
        ]}
      >
        {dayNumber}
      </Text>
    </Pressable>
  );
};

export default Date;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36454F",
    borderRadius: 15,
    borderColor: "#fff",
    padding: 10,
    width: 70,
    height: 70,
    marginHorizontal: 6,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  day: {
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 1,
    color: "#fff",
  },
  number: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
});
