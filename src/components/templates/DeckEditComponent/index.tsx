import React, { useEffect, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Card from "../../../core/models/card";
import Deck from "../../../core/models/deck";
import ListCardViewComponent from "../../../shared/components/ListCardsViewComponent";
import RedFloatButtonComponent from "../../../shared/components/RedFloatButtonComponent";
import AddCardBottomSheet from "../../../shared/modals/AddCardModal";
import OptionsModal from "../../../shared/modals/OptionsModal";
import {
  CardAddButton,
  CardAddText,
  Container,
  DeckFormat,
  DeckInfo,
  DeckName,
} from "./styles";
import useDeckStorage from "../../../core/services/data/useDeckStorage";

interface IDeckEditProps {
  oldDeck: Deck;
  navigation: any;
  setIsNewDeck: (b:boolean) => void;
}
const DeckEditComponent: React.FC<IDeckEditProps> = ({
  oldDeck,
  navigation, setIsNewDeck = () => {}
}) => {
  const [deckName, setDeckName] = useState("");
  const [deckFormat, setDeckFormat] = useState("");
  const [deck, setDeck] = useState<Deck>(new Deck());
  const [modalSelectCard, setModalSelectCard] = useState<boolean>(false);
  const [card, setCard] = useState<Card>(new Card());
  const [selectedCard, setSelectedCard] = useState<{
    card: Card;
    amount: number;
  }>({
    card: new Card(),
    amount: 0,
  });
  const [updatedCard, setUpdatedCard] = useState<{
    card: Card;
    amount: number;
  }>({
    card: new Card(),
    amount: 0,
  });
  const addCardSheetRef = useRef<BottomSheetModal>(null);
  const {saveDeck : save} = useDeckStorage();


  const toggleCardSelectModalHandler = (selectedCard: Card) => {
    setCard(selectedCard);
    setModalSelectCard(true);
  };
  const dismissSelectCard = () => {
    setModalSelectCard(false);
  };
  const saveDeck = () => {    
    if(!deckName || !deckFormat){
      alert("Preencha o nome e formato do deck");
      return;
    }
    const new_deck = { ...deck };
    new_deck.name = deckName;
    new_deck.format = deckFormat;
    
    save(new_deck).then(() => {
      alert("Deck salvo com sucesso!");
      setIsNewDeck(true);
      if (navigation?.route?.params?.setIsNewDeck) {
        navigation.route.params.setIsNewDeck(true);
      }
      if(navigation){
        navigation?.goBack();        
      }
    }).catch((error) => {
      alert("Erro ao salvar o deck!");
      console.error("error", error);
    });
  };

  const openAddCardSheet = () => {
    addCardSheetRef.current?.present();
  };
  const dismissAddCardSheet = () => {
    addCardSheetRef.current?.dismiss();
  };
  const selectCardModal = (_card: Card, amount: number) => {
    setSelectedCard({ card: _card, amount });
    dismissAddCardSheet();
  };
  const handleUpdateCard = (_card: Card) => {
    setUpdatedCard({ card: _card, amount: 0 });
    addCardSheetRef.current?.present();
  };
  const removeCard = (_card: Card) => {
    if (!deck.cards?.length) return;
    const new_deck = { ...deck };
    new_deck.cards = deck.cards.filter(({ card }) => card.name !== _card.name);
    setDeck(new_deck);
  };
  const viewCard = (_card: Card) => {
    navigation.navigate("CardView", { card: _card });
  };

  useEffect(() => {
    if (oldDeck) setDeck(oldDeck);
  }, [oldDeck]);

  useEffect(() => {
    if (!selectedCard.card.name) return;

    let new_deck = { ...deck } as Deck;

    if (deck.cards.length && deck.cards.length > 0) {
      const card_index = deck.cards.findIndex(
        ({ card }) => card.id === selectedCard.card.id,
      );
      if (card_index === -1) {
        new_deck.cards.push({
          card: selectedCard.card,
          amount: selectedCard.amount,
        });
      } else {
        new_deck.cards[card_index].amount = selectedCard.amount;
      }
    } else {
      new_deck.cards.push({
        card: selectedCard.card,
        amount: selectedCard.amount,
      });
    }

    setDeck(new_deck);
    dismissAddCardSheet();
    return () => {};
  }, [selectedCard]);

  return (
    <Container>
      <DeckInfo>
        <DeckName
          value={deckName}
          onChangeText={setDeckName}
          placeholder="Nome do Deck"
          returnKeyType={"next"}
        />
        <DeckFormat
          value={deckFormat}
          placeholder="Formato"
          onChangeText={setDeckFormat}
        />
        <CardAddButton onPress={openAddCardSheet}>
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
      <AddCardBottomSheet
        ref={addCardSheetRef}
        onSelectCard={selectCardModal}
        dismiss={dismissAddCardSheet}
        cardName={updatedCard.card.name}
        amount={updatedCard.amount}
      />
      <OptionsModal
        modalVisible={modalSelectCard}
        onRequestClose={() => {}}
        arrayOptionsWithCallback={[
          {
            option: "Remover Card",
            callback: removeCard,
            item: card,
          },
          { option: "Ver Card", callback: viewCard, item: card },
          { option: "Alterar Card", callback: handleUpdateCard, item: card },
        ]}
        dismiss={dismissSelectCard}
        transparent
      />
    </Container>
  );
};
export default DeckEditComponent;
