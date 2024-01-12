import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "../Styles/Styles";
import { Data } from "../Data";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface TimeSlot {
  id: string;
  time: string;
  date: string;
  available: boolean;
  serviceName: string;
  price: number;
}

interface Navigation {
  navigation: NativeStackNavigationProp<any>;
}

const HomeScreen = ({ navigation }: Navigation) => {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(Data);

  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleSlotPress = (id: string) => {
    const updatedSlots = timeSlots.map((slot) => {
      if (slot.id === id) {
        return { ...slot, available: !slot.available };
      }
      return slot;
    });
    setTimeSlots(updatedSlots);
    setSelectedSlot(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Select a service and time slot:</Text>
      <FlatList
        data={timeSlots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              handleSlotPress(item.id);
              navigation.navigate("BookingForm", { item: item.serviceName });
            }}
            style={[
              styles.listItem,
              {
                backgroundColor: item.id === selectedSlot ? "#DDDDDD" : "white",
              },
            ]}
          >
            <View style={styles.slotDetails}>
              <View>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold" }}
                >{`${item.serviceName} `}</Text>
                <Text>{`Available: ${item.available ? "Yes" : "No"}`}</Text>
              </View>
              <View>
                <Text>{`${item.time} - ${item.date} `}</Text>
                <Text
                  style={{ textAlign: "right" }}
                >{`$ ${item?.price.toFixed()}`}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
