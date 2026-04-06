import { useEffect, useState } from "react";
import React from "react";
import CardController from "../../../../core/controllers/CardController";
import Card from "../../../../core/models/card";
import { Container, Loading, Search } from "./styles";
import ListCardViewComponent from "../../../../shared/components/ListCardsViewComponent";

export const ListCardComponent: React.FC<any> = ({ navigation }) => {
  const [cards, setListCards] = useState(new Array<Card>());
  const [card, setCard] = useState(new Card());
  const cards_res = CardController({
    filter:{
      name: card.name
    }
  });
  const [loading, setLoading] = useState(false);

  const getCards = () => {
    cards_res.get(
      ({ cards: _cards }) => setListCards(_cards)
    );
  };

  const onChangeCardName = (value: any) => {
    card.name = value;
    if (value == "") {
      setCard(new Card());
    } else {
      setCard(card);
    }
    setLoading(true);
    setTimeout(() => getCards(), 3000);
  };

  const avancar = (card: Card) => {
    navigation.navigate("CardView", { card: card });
  };

  useEffect(() => {
    if (card.name) getCards();
  }, [card]);

  useEffect(() => {
    setLoading(cards_res.loading);
  }, [cards_res.loading]);

  return (
    <Container>
      <Search onChangeText={onChangeCardName} />
      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <ListCardViewComponent cards={cards} onCardPress={avancar} height="93%" />
      )}
    </Container>
  );
};
