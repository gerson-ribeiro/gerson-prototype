import Deck from "../../../models/deck";
import useStorage from "../../storage";

export default function useDeckStorage() {
    const storage = useStorage("decks");

    const getDecks = async () :Promise<Deck[]> => {
        return storage.get();
    }

    const saveDeck = async (deck: Deck) => {
        const decks = await storage.get() || [deck];
        return storage.save(decks);
    }

    return { getDecks, saveDeck };
}