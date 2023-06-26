

export const useStorage = (repoName: string) => {
    const get = () => {
        const json = localStorage.getItem(repoName);
        if (json) return JSON.parse(json);
        else throw new Error("Nada encontrado!");
    }

    const save = (item: any) => {
        localStorage.setItem(repoName, item);
    }

    return { get, save };
}