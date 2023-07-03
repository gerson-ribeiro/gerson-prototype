import storageService from "jade-request/src/utils/storageService";

const storage = storageService;

const useStorage = (repoName: string) => {
  const get = () => {
    const json = storage.get(repoName);
    if (json) return JSON.parse(json);
    else throw new Error("Nada encontrado!");
  };

  const save = (item: any) => {
    storage.set(repoName, item);
  };

  return { get, save };
};
export default useStorage;
