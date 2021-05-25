import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "@";

export const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(prefix + key, jsonValue);
    return true;
  } catch (e) {
    return e;
  }
};

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(prefix + key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return e;
  }
};
