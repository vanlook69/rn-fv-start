import { size } from "lodash";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { Colors } from "../../../utils/colors/colors";

export default function MyButton({ type, name, size, color, onPress }) {
  return (
    <>
      {/* <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.chatButton}
        onPress={onPress}
        type={type}
        name={name}
        size={size}
        color={color}
      >
        <Icon type={type} name={name} size={size} color={color} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  chatButton: {
    backgroundColor: Colors.lightGray,
    // backgroundColor: colors.gray,
    height: 50,
    width: 50,
    marginVertical: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.Gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginRight: 0,
    marginBottom: 10,
  },
  button: {
    width: "95%",
    height: 45,
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.ligth,
    fontSize: 16,
    fontWeight: "bold",
  },
});
