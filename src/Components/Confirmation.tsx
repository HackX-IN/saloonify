import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ConfirmationProps {
  onClose: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ onClose }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Ionicons name="checkmark-circle" size={50} color="green" />
        <Text style={{ fontSize: 18, marginVertical: 10 }}>
          Submission Successful!
        </Text>
        <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
          <Text style={{ color: "blue" }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Confirmation;
