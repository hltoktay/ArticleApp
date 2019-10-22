import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 75,
    paddingLeft: 10
  },
  backIcon: {
    fontSize: 32,
    marginLeft: 15
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 6
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: 15
  },
  editText: {
    color: "red",
    fontStyle: "italic"
  },
  togglesContainer: {
    marginVertical: 75
  },
  toggles: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    paddingHorizontal: 10
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: "#ffa500",
    width: "30%",
    borderRadius: 20,
    marginLeft: 120,
    alignItems: "center"
  }
});
