import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "700",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  slotDetails: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  datePicker: {
    width: 200,
    marginBottom: 20,
  },
});
