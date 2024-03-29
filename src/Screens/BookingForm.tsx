import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "../Styles/Styles";
import DatePicker from "react-native-date-picker";
import Toast from "react-native-toast-message";
import Confirmation from "../Components/Confirmation";

interface FormData {
  name: string;
  email: string;
  preferredTime: string;
}

const BookingFormScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { handleSlotPress, ...item } = route.params;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    preferredTime: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const showToast = (type: "success" | "error", text: string) => {
    Toast.show({
      type,
      position: "bottom",
      text1: text,
      visibilityTime: 3000,
    });
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.email) {
      console.log("Form submitted:", formData);
      setShowConfirmation(true);
      handleSlotPress(item.id);
      setFormData({ name: "", email: "", preferredTime: "" });
    } else {
      showToast("error", "Please fill in all fields.");
    }
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    navigation.navigate("Home");
  };

  return (
    <>
      {showConfirmation ? (
        <Confirmation onClose={closeConfirmation} />
      ) : (
        <View style={styles.container}>
          <Text style={styles.subtitle}>
            Selected Service : {item.serviceName}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />
          <Text style={styles.subtitle}>Select preferred time:</Text>
          <DatePicker
            date={new Date()}
            mode="time"
            onConfirm={() => {
              const Time = new Date();
              setFormData({
                ...formData,
                preferredTime: Time.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
              });
            }}
          />
          <Button title="Submit" onPress={handleFormSubmit} />
        </View>
      )}
    </>
  );
};

export default BookingFormScreen;
