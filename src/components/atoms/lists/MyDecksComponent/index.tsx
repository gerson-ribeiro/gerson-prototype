import { Text } from "react-native";
import React, { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Container, Search } from "./styles";
import { useState } from "react";
import Deck from "../../../../core/models/deck";
import ListDeckViewComponent from "../../../../shared/components/ListDeckViewComponent";
import RedFloatButtonComponent from "../../../../shared/components/RedFloatButtonComponent";
import useDeckStorage from "../../../../core/services/data/useDeckStorage";

const MyDecksComponent: React.FC<any> = ({ navigation }) => {
  const [decks, setDecks] = useState<Deck[]>(new Array<Deck>());
  const [deckName, setDeckName] = useState("");
  const [loading, setLoading] = useState(false);
  const [isNewDeck, setIsNewDeck] = useState(false);
  const { getDecks } = useDeckStorage();

  const onChangeText = (value: any) => {
    setDeckName(value);
  };
  const onPressNew = () => {
    navigation.navigate("DeckEdit",{ setIsNewDeck });
  };

  const handleLoadDecks = () => {
    getDecks()
      .then((decks) => {
        if (decks) setDecks(decks);
      })
      .catch(console.log);
  };

  useFocusEffect(
    React.useCallback(() => {
      handleLoadDecks();
      if (isNewDeck) {
        setIsNewDeck(false);
      }
    }, [isNewDeck])
  );

  useEffect(() => {
    if (isNewDeck) {
      handleLoadDecks();
      setIsNewDeck(false);
      return;
    }

    if (deckName.length > 2) {
      setLoading(true);
      setDecks(decks.filter((d) => d.name.trim() === deckName.trim()));
    }
    return () => setLoading(false);
  }, [isNewDeck, deckName]);

  return (
    <Container>
      <Search onChangeText={onChangeText} />
      {!loading ? (
        <ListDeckViewComponent decks={decks} navigation={navigation} />
      ) : (
        <Text>Carregando...</Text>
      )}
      <RedFloatButtonComponent callback={onPressNew} text="Novo" />
    </Container>
  );
};
export default MyDecksComponent;
