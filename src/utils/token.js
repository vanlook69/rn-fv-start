import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt from "expo-jwt";
import { TOKEN } from "./constants";

export const saveData = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN, token);
    alert("¡Datos guardados exitosamente!");
  } catch (e) {
    alert("No se pudieron guardar los datos en el almacenamiento.");
  }
};

// export function setToken(token) {
//   AsyncStorage.setItem(TOKEN, token);
// }

export const readData = async () => {
  try {
    const value = await AsyncStorage.getItem(TOKEN);

    if (value !== null) {
      setInput(value);
    }
  } catch (e) {
    alert("No se pudo recuperar la entrada del almacenamiento.");
  }
};

//return AsyncStorage.getItem(TOKEN);
// export const getToken = async () => {
//   // export function async getToken()  {

//   return await AsyncStorage.getItem("token");
// };

export function decodeToken(token) {
  //return jwt.decode(token);
  return jwt.decode(TOKEN, token);
}

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear(TOKEN);
    alert("¡Almacenamiento borrado exitosamente!");
  } catch (e) {
    alert("No se pudo borrar el almacenamiento asíncrono.");
  }
};

// export function removeToken() {
//   AsyncStorage.removeItem(TOKEN);
// }
