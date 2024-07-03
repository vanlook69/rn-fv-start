import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// interface IUseAsyncStorage {
//   key?: string
//   initialValue?: unknown
// }

export const useAsyncStorage = ({ token, initialValue }) => {
  const [data, setData] = useState(initialValue);
  const [retrievedFromStorage, setRetrievedFromStorage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (!value) {
          return;
        }
        setData(JSON.parse(value) || initialValue);
        setRetrievedFromStorage(true);
      } catch (error) {
        console.error(`useAsyncStorage getItem ${token} error:`, error);
      }
    };

    fetchData();
  }, [key, initialValue]);

  const setNewData = async () => {
    try {
      await AsyncStorage.setItem("token", token);
      setData(value);
    } catch (error) {
      console.error(`useAsyncStorage setItem ${token} error:`, error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("token");
    } catch (error) {
      console.error(`useAsyncStorage removeItem ${token} error:`, error);
    }
  };

  const clearData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error(`useAsyncStorage clear error:`, error);
    }
  };

  if (key !== undefined && initialValue !== undefined) {
    return [data, setNewData, retrievedFromStorage, removeData, clearData];
  } else if (token !== undefined) {
    return [removeData, clearData];
  } else {
    return [clearData];
  }
};
