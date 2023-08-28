import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, Ionicons, Feather, Entypo } from "@expo/vector-icons";
import PlacesScreen from "../screens/PlacesScreen";
import MovieScreen from "../screens/MovieScreen";
import TheatreScreen from "../screens/TheatreScreen";
import FoodScreen from "../screens/FoodScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";
import TicketScreen from "../screens/TicketScreen";
import MovieDetailScreen from "../screens/MovieDetailScreen";

const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
function HomeStacksScreens() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "" }}
      />
      <HomeStack.Screen name="Places" component={PlacesScreen} />
      <HomeStack.Screen name="Movie" component={MovieScreen} />
      <HomeStack.Screen name="Theatre" component={TheatreScreen} />
      <HomeStack.Screen name="Food" component={FoodScreen} />
      <HomeStack.Screen
        name="Confirmation"
        component={ConfirmationScreen}
        options={{
          headerStyle: {
            backgroundColor: "#0a0b0f",
          },
          headerTintColor: "#fff",
        }}
      />
      <HomeStack.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          title: "Ticket Details",
          headerStyle: {
            backgroundColor: "#0a0b0f",
          },
          headerTintColor: "#fff",
        }}
      />
      <HomeStack.Screen
        name="MovieD"
        component={MovieDetailScreen}
        options={{
          title: "Movie Details",
          headerStyle: {
            backgroundColor: "#0a0b0f",
          },
          headerTintColor: "#fff",
        }}
      />
    </HomeStack.Navigator>
  );
}
function ProfileStackScreens() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStacksScreens}
          options={{
            tabBarInactiveBackgroundColor: "#0a0b0f",
            tabBarActiveBackgroundColor: "#0a0b0f",
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#ebe6bf" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#64748e" />
              ) : (
                <Feather name="home" size={24} color="#ebe6bf" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreens}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#ebe6bf" },
            headerShown: false,
            tabBarActiveBackgroundColor: "#0a0b0f",
            tabBarInactiveBackgroundColor: "#0a0b0f",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#64748e" />
              ) : (
                <Ionicons name="person-outline" size={24} color="#ebe6bf" />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
