import { useEffect } from "react";
import { AsyncStorage } from "react-native";

const DeckController = async () => {
    try {
      const value = await AsyncStorage.getItem('TASKS');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
        await AsyncStorage.setItem(
          '@MySuperStore:key',
          'I like to save it.'
        );
    }
}
export default DeckController;