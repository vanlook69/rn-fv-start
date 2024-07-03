import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
// import { DateTime } from "luxon";
// import "intl";
// import "intl/locale-data/jsonp/en-US";
import MyButtonCircle from "../../components/button/myButtonCircle";
import { Colors } from "../../utils/colors/colors";

import { AuthenticatedUserContext } from "../../context/AuthUser/AuthUser";

export default function cerrar() {
  const { userFull, logout } = useContext(AuthenticatedUserContext);
  const { birth } = userFull;
  const vbirth = new Date(birth.seconds * 1000);
  //console.log("xxx", vbirth);
  let idioms = "en";
  let show = false;
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let vname = month[vbirth.getMonth()];
  //let vname = "July";
  //let name = month[vbirth.getMonth()];
  //const { uid, photoURL, displayName, email } = user;
  //console.log(vname);
  return (
    <View style={styles.viewUserInfo}>
      <View
        style={{
          backgroundColor: Colors.lightGray,
          width: "80%",
          paddingHorizontal: 20,
          paddingVertical: 15,
          shadowColor: Colors.Gray,
          borderRadius: 10,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.9,
          shadowRadius: 7,
          marginRight: 0,
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            paddingBottom: 3,
            fontFamily: "Futura",
          }}
        >
          {userFull.displayName}
        </Text>
        <Text style={styles.text}>Email: {userFull.email}</Text>
        <Text style={styles.text}>Username: {userFull.username}</Text>
        <Text style={styles.text}>Nickname: {userFull.nickname}</Text>
        <Text style={styles.text}>Gender: {userFull.gender}</Text>
        {show ? (
          <Text style={styles.text}>
            Birth: {vname}, {vbirth.getDate()}
          </Text>
        ) : (
          <Text style={styles.text}>
            Birth: {vname}, {vbirth.getDate()} - {vbirth.getUTCFullYear()}.
            {/* Birth: {name}, {vbirth.getDate()} - {vbirth.getUTCFullYear()}. */}
          </Text>
        )}

        {/* <Text style={styles.text}>
          Birth: {vbirth.getDate()}/{name}/{vbirth.getUTCFullYear()}.
        </Text> */}
        {/* <Text style={styles.text}>
          {DateTime.fromISO(birth.GraytoISOString())
            .setLocale(idioms)
            .toLocaleString(DateTime.DATE_HUGE)}
        </Text> */}
        <Text style={styles.text}>Age: {userFull.age}</Text>
      </View>

      <MyButtonCircle
        //title="Cerrar"
        type={"material-community"}
        name={"power"}
        size={24}
        color={"grey"}
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    flex: 1,
    // alignItems: "flex-start",
    alignItems: "center",
    //justifyContent: "flex-start",
    justifyContent: "center",
    //flexDirection: "row",
    //backgroundColor: "#f2f2f2",
    backgroundColor: "#f2f2f2",
    //backgroundColor: "red",
    paddingTop: 50,
    paddingBottom: 30,
  },
});
