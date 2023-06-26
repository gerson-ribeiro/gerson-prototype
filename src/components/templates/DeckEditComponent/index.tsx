import React, { useEffect, useState } from "react";
import Card from "../../../core/models/card";
import Deck from "../../../core/models/deck";
import ListCardViewComponent from "../../../shared/components/ListCardsViewComponent";
import RedFloatButtonComponent from "../../../shared/components/RedFloatButtonComponent";
import AddCardModal from "../../../shared/modals/AddCardModal";
import OptionsModal from "../../../shared/modals/OptionsModal";
import {
  CardAddButton,
  CardAddText,
  Container,
  DeckFormat,
  DeckInfo,
  DeckName,
} from "./styles";

interface IDeckEditProps {
  oldDeck: Deck;
  navigation: any;
}
const DeckEditComponent: React.FC<IDeckEditProps> = ({
  oldDeck,
  navigation,
}) => {
  const [deckName, setDeckName] = useState("");
  const [deckFormat, setDeckFormat] = useState("");
  const [deck, setDeck] = useState(new Deck());
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSelectCard, setModalSelectCard] = useState(false);
  const [card, setCard] = useState(new Card());

  useEffect(() => {
    if (oldDeck) setDeck(oldDeck);
  });
  useEffect(() => {
    let newDeck = {};
    if (oldDeck) setDeck(oldDeck);
  }, [deckName]);

  const toggleCardSelectModalHandler = (selectedCard: Card) => {
    setCard(selectedCard);
    dismissSelectCard();
  };
  const dismissSelectCard = () => {
    console.log(modalSelectCard);
    setModalSelectCard(!modalSelectCard);
  };
  const saveDeck = () => {
    console.log("save Deck");
  };

  const toggleModalHandler = () => {
    setModalVisible(!modalVisible);
  };
  const callbackModal = () => {};
  const selectCardModal = (_card: Card, amount: number) => {
    const cardAlreadyInserted = deck.cards?.find(
      ({ card }) => card.name.trim() == _card.name.trim()
    );
    const cardAlreadyInsertedIndex = deck.cards?.findIndex(
      ({ card }) => card.name.trim() == _card.name.trim()
    );

    let new_deck = deck;
    if (cardAlreadyInserted) {
      cardAlreadyInserted.amount = amount;

      new_deck.cards[cardAlreadyInsertedIndex] = cardAlreadyInserted;
      toggleModalHandler();
      return;
    }

    console.log(new_deck);
    if (new_deck?.cards?.length > 0) {
      new_deck.cards = [...new_deck.cards, { card: _card, amount }];
    } else {
      new_deck.cards = [{ card: _card, amount }];
    }

    setDeck(new_deck);
    toggleModalHandler();
  };

  const removeCard = (_card: Card) => {
    let index = deck.cards.findIndex(({ card }) => card.name == _card.name);
    let new_deck = deck;

    if (index < 0) return;
    else {
      delete new_deck.cards[index];
      setDeck(new_deck);
    }
  };
  const viewCard = (_card: Card) => {
    navigation.navigate("CardView", { card: _card });
  };
  return (
    <Container>
      <DeckInfo>
        <DeckName
          value={deckName}
          placeholder="Nome do Deck"
          returnKeyType={"next"}
        />
        <DeckFormat value={deckFormat} placeholder="Formato" />
        <CardAddButton onPress={toggleModalHandler}>
          <CardAddText>Adicionar Cards</CardAddText>
        </CardAddButton>
      </DeckInfo>
      <ListCardViewComponent
        onCardPress={(selectedCard) =>
          toggleCardSelectModalHandler(selectedCard)
        }
        deckList={deck.cards}
        height="100%"
      />
      <RedFloatButtonComponent callback={() => saveDeck()} text="Salvar" />
      <AddCardModal
        modalVisible={modalVisible}
        onRequestClose={callbackModal}
        onSelectCard={selectCardModal}
        dismiss={toggleModalHandler}
        transparent
      />
      <OptionsModal
        modalVisible={modalSelectCard}
        onRequestClose={callbackModal}
        arrayOptionsWithCallback={[
          {
            option: "Remover Card",
            callback: removeCard,
            item: card,
          },
          { option: "Ver Card", callback: viewCard, item: card },
        ]}
        dismiss={dismissSelectCard}
        transparent
      />
    </Container>
  );
};
export default DeckEditComponent;
