import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DateTime } from "luxon";
//import Intl from "intl";
import "intl";
import "intl/locale-data/jsonp/en-US";
import { useNavigation } from "@react-navigation/native";

import Title from "../../components/Title";
import MyButtonCircle from "../../components/button/myButtonCircle";

import { AuthenticatedUserContext } from "../../context/AuthUser/AuthUser";

export default function App() {
  const [datePicker, setDatePicker] = useState(true);
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(0);

  const [birthday, setBirthday] = useState(0);
  const [birthdayMonth, setBirthdayMonth] = useState(0);
  const [birthdayYear, setBirthdayYear] = useState(0);

  const { xBirth } = useContext(AuthenticatedUserContext);

  const navigation = useNavigation();

  let idioms = "en";
  //let idioms = "es";

  useEffect(() => {
    onCurrent;
  }, []);

  // const [timePicker, setTimePicker] = useState(false);

  // const [time, setTime] = useState(new Date(Date.now()));

  function showDatePicker() {
    setDatePicker(true);
  }

  // function showTimePicker() {
  //   setTimePicker(true);
  // }

  function onCurrent() {
    //setDate(value);
    setBirthday(new Date().getDate());
    setBirthdayMonth(new Date().getMonth() + 1);
    setBirthdayYear(new Date().getFullYear());
    //setDatePicker(false);
  }

  function onDateSelected(e, value) {
    const fechaActual = new Date();

    setDate(value);
    setBirthday(value.getDate());
    setBirthdayMonth(value.getMonth() + 1);
    setBirthdayYear(value.getFullYear());

    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    const anoNacimiento = parseInt(value.getFullYear());
    const mesNacimiento = parseInt(value.getMonth() + 1);
    const diaNacimiento = parseInt(value.getDate());

    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
      edad--;
    } else if (mesActual === mesNacimiento) {
      if (diaActual < diaNacimiento) {
        edad--;
      }
    }
    setYear(edad);

    //setDatePicker(false);
  }

  const handleSubmit = async () => {
    if (year === 0) {
      Alert.alert("feedvback", "La edad debe ser mayor a 0 año...", [
        {
          text: "OK",
          onPress: () => {},
        },
      ]);
    } else {
      xBirth(date, year);
      navigation.navigate("Username");
    }
  };

  // const calcularEdad = (e, value) => {
  //   const fechaActual = new Date();
  //   const anoActual = parseInt(fechaActual.getFullYear());
  //   const mesActual = parseInt(fechaActual.getMonth()) + 1;
  //   const diaActual = parseInt(fechaActual.getDate());

  //   const anoNacimiento = parseInt(value.getFullYear());
  //   const mesNacimiento = parseInt(value.getMonth() + 1);
  //   const diaNacimiento = parseInt(value.getDate());

  //   let edad = anoActual - anoNacimiento;
  //   if (mesActual < mesNacimiento) {
  //     edad--;
  //   } else if (mesActual === mesNacimiento) {
  //     if (diaActual < diaNacimiento) {
  //       edad--;
  //     }
  //   }
  //   setYear(edad);
  // };

  // const onChange = (e, type) => {
  //   setDate({ ...date, [type]: e.nativeEvent.value });
  // };

  // const onChange = (e, value) => {
  //   setDate({ ...date, [value]: e.nativeEvent.value });
  // };

  // function onTimeSelected(event, value) {
  //   setTime(value);
  //   setTimePicker(false);
  // }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Title
        title={"FeedVBack"}
        subtitle={"Selecciona tu fecha de nacimiento."}
      />
      <View style={styleSheet.MainContainer}>
        <View
          style={{
            flex: 1,
            //backgroundColor: "#808000",
            //backgroundColor: "grey",
            width: "100%",
          }}
        >
          {/* <Text style={styleSheet.text}>Date: {date.toDateString()}</Text> */}
          {/* {datePicker && (
            <Text style={styleSheet.text}>
              Date: {date.toLocaleDateString()}
            </Text>
          )} */}
          {/* <TouchableOpacity
            // onPress={showDatePicker1}
            style={{ width: "40%" }}
          >
            <Text style={styles.text}>{date.toLocaleDateString()}</Text>
          </TouchableOpacity> */}

          {/* <Text style={styleSheet.text}>Date: {date.toLocaleDateString()}</Text> */}
          {/* <View
            style={{
              width: "100%",
              height: 50,
              // backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              //borderBottomColor: "grey",
              //borderBottomWidth: 1,
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 24, fontWeights: "700" }}>Birthday</Text>
          </View> */}
          <View style={styleSheet.viewBotton}>
            <TouchableOpacity
              // onPress={showDatePicker1}
              style={{ width: "80%" }}
            >
              <Text style={styleSheet.text}>
                {DateTime.fromISO(date.toISOString())
                  .setLocale(idioms)
                  .toLocaleString(DateTime.DATE_HUGE)}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              //  onPress={showDatePicker2}
              style={{ width: "20%" }}
            >
              <Text style={styleSheet.text}>{year}</Text>
            </TouchableOpacity>
          </View>

          <View style={styleSheet.EditContainer2}>
            {/* <MyButtonCircle
              name={"transfer-left"}
              type={"material-community"}
              size={24}
              color={"#66CC99"}
              onPress={() => navigation.navigate("Gender")}
            /> */}
            <MyButtonCircle
              name={"transfer-right"}
              type={"material-community"}
              size={24}
              color={"#66CC99"}
              onPress={() => handleSubmit()}
            />
          </View>

          {/* <Text>
            {DateTime.now()
              .setLocale(idioms)
              .toLocaleString(DateTime.DATE_HUGE)}
          </Text> */}

          {/* <View
            style={styleSheet.viewText}
            // style={[styleSheet.viewText, { width: 350, alignItems: "center" }]}
          >
            <Text>
              Date: 
              {DateTime.now().toLocaleString(DateTime.DATE_HUGE)} 
              {DateTime.fromISO(date.toISOString()).toLocaleString(
                DateTime.DATE_HUGE
              )}
              {DateTime.now().toFormat("MMMM dd, yyyy")} 
            </Text>
            <Text>50</Text>
          </View> */}

          {/* <Text style={styleSheet.text}> */}
          {/* Date: */}

          {/* {DateTime.fromISO(date.toISOString()).toLocaleString(
              DateTime.DATE_MED
            )}
          </Text> */}

          {/* <Text style={styleSheet.text}>
            {DateTime.fromISO(date.toISOString()).toFormat("MMMM dd, yyyy")}
          </Text> */}

          {/* <Text style={styleSheet.text}>
            Date:{" "}
            {DateTime.fromISO(date.toISOString()).toFormat("MMMM dd, yyyy")}
            {DateTime.fromISO(date.toISOString()).toFormat("MMMM dd, yyyy")}
            {DateTime.fromISO(date.toISOString()).toFormat("yyyy/LL/dd")}
          </Text> */}

          {/* <Text style={styleSheet.text}>Day: {birthday}</Text>
          <Text style={styleSheet.text}>Month: {birthdayMonth}</Text>
          <Text style={styleSheet.text}>Year: {birthdayYear}</Text> */}

          {/* <Button
            title="Show Date"
            color="blue"
            onPress={() => onDateSelected()}
          /> */}
        </View>
        <View
          style={{
            flex: 1,
            //backgroundColor: "#00FF00",
            backgroundColor: "#fff",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          {datePicker && (
            <DateTimePicker
              value={date}
              mode={"date"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              is24Hour={true}
              //onChange={setDate}
              //onChange={(e) => onChange(e, "value")}
              onChange={onDateSelected}
              //onChange={calcularEdad}
              //disabled={false}
              //display={true}
              //onPress={onDateSelected}
              //onpr
              style={styleSheet.datePicker}
            />
          )}

          {/* {timePicker && (
          <DateTimePicker
            value={time}
            mode={"time"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={false}
            onChange={onTimeSelected}
            style={styleSheet.datePicker}
          />
        )} */}

          {!datePicker && (
            <View style={{ margin: 10 }}>
              <Button
                title="Show Date Picker"
                color="green"
                onPress={showDatePicker}
              />
            </View>
          )}
        </View>

        {/* <Text style={styleSheet.text}>
          Time = {time.toLocaleTimeString("en-US")}
        </Text> */}

        {/* {!timePicker && (
          <View style={{ margin: 10 }}>
            <Button
              title="Show Time Picker"
              color="green"
              onPress={showTimePicker}
            />
          </View>
        )} */}
        <View style={{ flex: 1, alignItems: "center" }}>
          <CreateAccount />
        </View>
      </View>
    </SafeAreaView>
  );
  function CreateAccount() {
    const navigation = useNavigation();

    return (
      <View style={styleSheet.Container4}>
        <Text
          style={styleSheet.register}
          onPress={() => navigation.navigate("LoginForm")}
        >
          ¿Ya tienes una cuenta?{" "}
          <Text style={styleSheet.btnRegister}>Iniciar Sesión.</Text>
        </Text>
      </View>
    );
  }
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "white",
    // backgroundColor: "red",
  },
  viewBotton: {
    flexDirection: "row",
    width: "100%",

    //padding: 10,
    //alignItems: "center",
    //justifyContent: "center",
    // backgroundColor: "yellow",
    backgroundColor: "#fff",
  },

  text: {
    // width: "90%",
    height: 45,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "#F9FFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00bcd4",
    textAlign: "center",
    color: "grey",
  },

  text2: {
    fontSize: 25,
    color: "red",
    padding: 3,
    marginBottom: 10,
    textAlign: "center",
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 320,
    height: 260,
    display: "flex",
  },
  EditContainer2: {
    marginTop: 15,
    //padding: 6,
    height: 60,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "red",
    // marginHorizontal: 15,
    flexDirection: "row",
  },
  Container4: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 10,
    backgroundColor: "#fff",
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
});
