import { StorageService } from "jade-request";

const AsyncStorage = StorageService.default;

const DeckController = async () => {
  try {
    const value = await AsyncStorage.get("TASKS");
    if (value !== null) {
      console.log(value);
    }
  } catch (error) {
    await AsyncStorage.set("@MySuperStore:key", "I like to save it.");
  }
};
export default DeckController;
