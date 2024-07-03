import { StyleSheet } from "react-native";

export const styles = new StyleSheet.create({
  content: {
    flex: 1,
    margin: 20,
    marginTop: 0,
    // backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  img: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginVertical: 20,
  },
  title: {
    // color: "#fff",
    color: "black",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    // color: "#fff",
    color: "black",
    opacity: 0.6,
    textAlign: "center",
    marginBottom: 20,
  },
  btn: {
    color: "#0891b2",
    fontWeight: "600",
    fontSize: 22,
    textAlign: "center",
    marginTop: 30,
  },
  login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  textRegister: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    //color: "#82B1FF",
    color: "#0891b2",
    fontWeight: "bold",
  },
});
