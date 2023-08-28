import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const TheatreScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [rows, setRows] = useState([
    {
      row: "A",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
        { seat: "8", bookingStatus: "false" },
        { seat: "9", bookingStatus: "false" },
        { seat: "10", bookingStatus: "false" },
        { seat: "11", bookingStatus: "false" },
      ],
    },
    {
      row: "B",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "C",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
    {
      row: "D",
      seats: [
        { seat: "1", bookingStatus: "false" },
        { seat: "2", bookingStatus: "false" },
        { seat: "3", bookingStatus: "false" },
        { seat: "4", bookingStatus: "false" },
        { seat: "5", bookingStatus: "false" },
        { seat: "6", bookingStatus: "false" },
        { seat: "7", bookingStatus: "false" },
      ],
    },
  ]);
  // console.log(route.params);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            name="chevron-back"
            size={24}
            color="#f7710b"
          />
          <View style={{ justifyContent: "center", alignSelf: "center" }}>
            <Text style={{ fontWeight: "600", fontSize: 16, color: "#fff" }}>
              {route.params.mall}
            </Text>
            <Text style={{ fontSize: 15, marginLeft: 15, color: "#fff" }}>
              {route.params.name}
            </Text>
          </View>
        </Pressable>
      ),
      headerTitle: "",
      headerStyle: {
        backgroundColor: "#0a0b0f",
        shadowColor: "transparent",
        shadowOpacity: 0.3,
        shadowOffest: { width: -1, height: 1 },
        shadowRadius: 3,
      },
    });
  }, []);

  const seatNumbers = selectedSeats.map((seat) => seat.row + seat.seat);
  const result = seatNumbers.join(" ");
  const renderSeats = () => {
    return route.params.row.map((row, rowIndex) => {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
          key={rowIndex}
        >
          <View style={{ width: 30, marginRight: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 15,
                color: "#fff",
              }}
            >
              {row.row}
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {row.seats.map((seat, seatIndex) => (
                <Pressable
                  onPress={() => handleSeatPress(row.row, seat.number)}
                  style={[
                    styles.seat,
                    selectedSeats.some(
                      (selectedSeats) =>
                        selectedSeats.row === row.row &&
                        selectedSeats.seat === seat.number
                    ) && styles.selectedSeat,
                    seat.bookingStatus === "disabled" && styles.bookedSeat,
                  ]}
                  disabled={seat.bookingStatus === "disabled"}
                >
                  <Text>{seat.number}</Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>
      );
    });
  };
  const handleSeatPress = (row, seat) => {
    const isSelected = selectedSeats.some(
      (selectedSeats) =>
        selectedSeats.row === row && selectedSeats.seat === seat
    );
    if (isSelected) {
      setSelectedSeats((prevState) =>
        prevState.filter(
          (selectedSeats) =>
            selectedSeats.row !== row || selectedSeats.seat !== seat
        )
      );
    } else {
      setSelectedSeats((prevState) => [...prevState, { row, seat }]);
    }
  };
  console.log(selectedSeats);
  const pay = () => {
    // const updatedRows = [...rows];
    // selectedSeats.forEach((seat) => {
    //   const rowIndex = updatedRows.findIndex((row) => row.row === seat.row);
    //   const seatIndex = updatedRows[rowIndex].seats.findIndex(
    //     (s) => s.seat === seat.seat
    //   );

    //   updatedRows[rowIndex].seats[seatIndex].bookingStatus = "disabled";
    // });
    // setRows(updatedRows);
    // setSelectedSeats([]);
    navigation.navigate("Food", {
      mall: route.params.mall,
      showtime: route.params.showtime,
      name: route.params.name,
      selectedDate: route.params.selectedDate,
      seats: result,
      rows: route.params.rows,
      selectedSeats: selectedSeats,
      docId: route.params.docId,
    });
  };
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#0a0b0f" }}>
        <View style={{ borderBottomWidth: 9, borderBottomColor: "#24628b" }}>
          <Text
            style={{
              marginTop: 10,
              textAlign: "center",
              fontSize: 15,
              color: "#fff",
            }}
          >
            {" "}
            SCREEN THIS WAY{" "}
          </Text>
        </View>

        <Text
          style={{
            marginTop: 10,
            textAlign: "center",
            fontSize: 15,
            color: "#fff",
            marginBottom: 20,
          }}
        >
          {" "}
          CLASSIC (240){" "}
        </Text>
        {renderSeats()}
        <View
          style={{
            padding: 10,
            marginTop: 25,
            flexDirection: "row",
            justifyContent: "center",

            gap: 20,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              style={{ textAlign: "center", marginBottom: 4 }}
              name="square"
              size={24}
              color="#ffc40c"
            />

            <Text style={{ color: "#ebe6bf" }}>Selected</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
            // style={{
            //   borderWidth: 1,
            //   borderRadius: 5,
            //   marginBottom: 7,
            //   padding: 10,
            //   alignContent: "center",
            //   justifyContent: "center",
            //   borderColor: "#fff",
            // }}
            >
              <FontAwesome
                style={{ textAlign: "center", marginBottom: 4 }}
                name="square"
                size={24}
                color="white"
              />
            </View>
            <Text style={{ color: "#ebe6bf" }}>Vacant</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              style={{ textAlign: "center", marginBottom: 4 }}
              name="square"
              size={24}
              color="gray"
            />
            <Text style={{ color: "#ebe6bf" }}>Booked</Text>
          </View>
        </View>
        {/* <Pressable
          onPress={pay}
          style={{
            marginTop: 300,
            backgroundColor: "#e0e0e0",
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>HEllo</Text>
          <Text>pay 100</Text>
        </Pressable> */}
      </ScrollView>
      <View style={{ backgroundColor: "#0a0b0f" }}>
        {selectedSeats.length > 0 ? (
          <Pressable
            style={{
              backgroundColor: "#FEBE10",
              padding: 20,
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 10,
              marginBottom: 10,
              borderRadius: 10,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              {selectedSeats.length} seat's selected {result}
            </Text>
            <Pressable onPress={pay}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Proceed</Text>
            </Pressable>
          </Pressable>
        ) : (
          <Pressable style={{ backgroundColor: "#36454F", padding: 20 }}>
            <Text style={{ textAlign: "center" }}>0 SEATS SELECTED</Text>
          </Pressable>
        )}
      </View>
    </>
  );
};

export default TheatreScreen;

const styles = StyleSheet.create({
  seat: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
  },
  selectedSeat: {
    backgroundColor: "#ffd700",
    borderColor: "tansparent",
  },
  bookedSeat: {
    backgroundColor: "#989898",
    borderColor: "tansparent",
  },
});
