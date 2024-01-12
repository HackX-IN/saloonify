import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import BookingForm from "./src/Screens/BookingForm";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "white",
            },
            headerTitle: "Saloonify",
            headerShadowVisible: false,
            headerTitleStyle: {
              color: "black",
              fontSize: 24,
              fontWeight: "600",
            },
            headerRight: () => (
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Ionicons name="notifications" size={24} color={"black"} />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="BookingForm"
          component={BookingForm}
          options={{
            headerTitle: "",
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default App;
