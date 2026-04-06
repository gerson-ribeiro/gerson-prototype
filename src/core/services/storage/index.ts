import AsyncStorage from "@react-native-async-storage/async-storage";

const { getItem, setItem } = AsyncStorage;

const useStorage = (repoName: string) => {
  const get = async () => {
    try {
      const json = await getItem(repoName);
      if (json) return JSON.parse(json);
      else return;
    } catch (e) {
      console.error("Error while fetching data from storage", e);
    }
  };

  const save = <T>(item: T) => {
    setItem(repoName, JSON.stringify(item));
  };

  return { get, save };
};
export default useStorage;
