import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#d2d1d0"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5
  },
  title: {
    marginTop: 125,
    marginLeft: 50
  },
  titleText: {
    fontSize: 18,
    fontWeight: "500"
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "85%",
    opacity: 0.7,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10
  },
  textInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 10
  },
  searchIcon: {
    padding: 20,
    paddingLeft: 5
  },
  postSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 200,
    width: "85%"
  },
  postText: {
    fontWeight: "500"
  },
  carousel: {
    marginTop: -30,
    marginLeft: 40,
    width: 300,
    height: 325
  }
});
