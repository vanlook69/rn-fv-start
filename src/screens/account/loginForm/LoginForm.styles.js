import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  formContainer: {
    flex: 1,
  },
  control: {
    flex: 0.2,
    alignItems: "left",
    justifyContent: "center",
    marginHorizontal: 30,
    //backgroundColor: "red",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boddy: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },

  login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginTop: 5,
  },
  btnRegister: {
    color: "#82B1FF",
    //color: "#FF5722",

    fontWeight: "bold",
  },
  iconContainer: {
    marginTop: 20,
    width: "20%",
    alignSelf: "center",
  },
  textRegister: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#82B1FF",
    fontWeight: "bold",
  },
  // inputStyle: {
  //   flex: 1,
  //   backgroundColor: "blue",
  //   color: "red",
  //   fontWeight: "bold",
  // },
  passwordContainer: {
    flexDirection: "row",
    width: "85%",
    height: 40,
    //justifyContent: "center",
    margin: 10,
    padding: 10,
    paddingRight: 0,
    // backgroundColor: Colors.ligth,
    backgroundColor: "#F9FFFF",
    //backgroundColor: "#F9FF",

    borderRadius: 10,
    borderWidth: 1,
    //borderColor: Colors.primary,
    borderColor: "#00bcd4",
    //backgroundColor: "red",
  },
});
