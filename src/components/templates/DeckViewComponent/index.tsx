import React from "react";
import ListCardViewComponent from "../../../shared/components/ListCardsViewComponent";
import { Container, DeckFormat, DeckName } from "./styles";

const DeckViewComponent: React.FC<any> = ({ deck, navigation }) => {
  const onCardPressHandler = (e: any) => {
    console.log(e);
  };
  return (
    <Container>
      <DeckName>{deck.name}</DeckName>
      <DeckFormat>{deck.format}</DeckFormat>
      <ListCardViewComponent
        cards={deck.cards}
        onCardPress={onCardPressHandler}
      />
    </Container>
  );
};
export default DeckViewComponent;
