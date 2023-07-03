import React, { useEffect, useState } from "react";
import { View } from "react-native";
import CardController from "../../../core/controllers/CardController";
import Card from "../../../core/models/card";
import ListCardViewComponent from "../../components/ListCardsViewComponent";

import {
  Amount,
  Background,
  Container,
  Main,
  Search,
  TextArea,
} from "./styles";
interface IAddCardProps {
  modalVisible: boolean;
  onRequestClose: () => void;
  dismiss: () => void;
  onSelectCard: (card: Card, amount: number) => void;
  transparent?: boolean;
}

const AddCardModal: React.FC<IAddCardProps> = ({
  modalVisible,
  onRequestClose,
  onSelectCard,
  dismiss,
  transparent = false,
}) => {
  const [card_name, setCard_name] = useState("");
  const [card_amount, setcard_amount] = useState(1);
  const [listCards, setListCards] = useState(new Array<Card>());
  const card_res = CardController({ filter: { name: card_name } });

  const onCardNameChange = (e: string) => {
    setCard_name(e);
  };
  const onCardAmountChange = (e: string) => {
    setcard_amount(parseInt(e));
  };

  const getCards = () => {
    card_res.get((data) => {
      setListCards(data.cards);
    });
  };

  const onCardPressed = (card: Card) => {
    if (card_amount <= 0) {
      alert("Selecione uma quantidade válida");
      return;
    }
    onSelectCard(card, card_amount);
  };

  useEffect(() => {
    getCards();
  }, [card_name]);

  return (
    <Container
      animationType="slide"
      transparent={transparent}
      visible={modalVisible}
      onRequestClose={onRequestClose}
    >
      <Background onPress={dismiss}>
        <Main>
          <TextArea>
            <Amount
              keyboardType="numeric"
              placeholder="Quantidade"
              onChangeText={onCardAmountChange}
            />
            <Search
              placeholder="Nome do card"
              onChangeText={onCardNameChange}
            />
          </TextArea>
          <ListCardViewComponent
            height="86%"
            onCardPress={onCardPressed}
            cards={listCards}
          />
        </Main>
      </Background>
    </Container>
  );
};

export default AddCardModal;
