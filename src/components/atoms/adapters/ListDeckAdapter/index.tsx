import React from "react";
import Deck from "../../../../core/models/deck";
import { Container, DeckDate, DeckFormat, DeckName, Pressable } from "./styles";
interface IListDeckProps {
  deck: Deck;
  navigation: any;
}
const ListDeckAdapter: React.FC<IListDeckProps> = ({ deck, navigation }) => {
  const { name, format, date } = deck;
  const onDeckSelect = () => {
    navigation.navigate("DeckView", { deck: deck, navigation: navigation });
  };
  return (
    <Container>
      <Pressable onPress={onDeckSelect}>
        <DeckName>{name}</DeckName>
        <DeckFormat>{format}</DeckFormat>
        <DeckDate>{date.toLocaleString()}</DeckDate>
      </Pressable>
    </Container>
  );
};

export default ListDeckAdapter;
