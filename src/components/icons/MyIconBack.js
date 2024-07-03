import { TextInput, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

//import Colors from "../../utils/colors/colors";
export default function MyIconBack({ name, type, size, color, onPress }) {
  return (
    <View
      style={{
        justifyContent: "left",
        alignItems: "left",
        paddingLeft: 20,
      }}
    >
      <Icon
        name={name}
        type={type}
        size={size}
        color={color}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: "row",
    width: "95%",
    height: 40,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    // backgroundColor: Colors.ligth,
    backgroundColor: "#F9FFFF",

    borderRadius: 10,
    borderWidth: 1,
    //borderColor: Colors.primary,
    borderColor: "#00bcd4",
  },
  inputStyle: {
    flex: 1,
  },
  container: {
    width: "95%",
    height: 40,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    // backgroundColor: Colors.ligth,
    backgroundColor: "#F9FFFF",

    borderRadius: 10,
    borderWidth: 1,
    //borderColor: Colors.primary,
    borderColor: "#00bcd4",
  },
  input: {
    width: "95%",
    height: 40,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    // backgroundColor: Colors.ligth,
    backgroundColor: "#F9FFFF",

    borderRadius: 10,
    borderWidth: 1,
    //borderColor: Colors.primary,
    borderColor: "#00bcd4",
  },
});
