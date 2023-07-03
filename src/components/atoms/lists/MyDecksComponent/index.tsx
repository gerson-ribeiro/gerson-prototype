import { Text } from "react-native";
import React, { useEffect } from "react";
import { Container, Search } from "./styles";
import { useState } from "react";
import Deck from "../../../../core/models/deck";
import ListDeckViewComponent from "../../../../shared/components/ListDeckViewComponent";
import RedFloatButtonComponent from "../../../../shared/components/RedFloatButtonComponent";

const MyDecksComponent: React.FC<any> = ({ navigation }) => {
  const [decks, setDecks] = useState(new Array<Deck>());
  const [deckName, setDeckName] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeText = (value: any) => {
    setDeckName(value);
  };
  const onPressNew = () => {
    navigation.navigate("DeckEdit");
  };

  useEffect(() => {
    //buscar decks no local
  });

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
