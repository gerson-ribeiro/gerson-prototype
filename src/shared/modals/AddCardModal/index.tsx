import {
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { StyleSheet } from "react-native";
import CardController from "../../../core/controllers/CardController";
import Card from "../../../core/models/card";
import ListCardViewComponent from "../../components/ListCardsViewComponent";
import { Amount, Search, TextArea } from "./styles";
import { Loading } from "../../../components/atoms/lists/listCardsComponent/styles";

interface IAddCardProps {
  onSelectCard: (card: Card, amount: number) => void;
  dismiss: () => void;
  cardName?: string;
  amount?: number;
}

const AddCardBottomSheet = forwardRef<BottomSheetModal, IAddCardProps>(
  ({ onSelectCard, dismiss, cardName = '', amount = 0 }, ref) => {
    const [card_name, setCard_name] = useState(cardName);
    const [card_amount, setcard_amount] = useState<number>(amount);
    const [listCards, setListCards] = useState(new Array<Card>());
    const card_res = CardController({ filter: { name: card_name } });

    const snapPoints = useMemo(() => ["45%", "90%"], []);

    const onCardNameDone = (e: any) => {
      setCard_name(e.nativeEvent.text);
    };
    const onCardAmountChange = (e: string) => {
      setcard_amount(parseInt(e) || 1);
    };

    const getCards = () => {
      card_res.get(({ cards }) => {
        setListCards(cards);
      });
    };

    const onCardPressed = (card: Card) => {
      if (card_amount <= 0) {
        alert("Selecione uma quantidade válida");
        return;
      }
      onSelectCard(card, card_amount);
      dismiss();
      resetStates();
    };

    const resetStates = () => {
      setCard_name("");
      setcard_amount(0);
      setListCards(new Array<Card>());
    };

    const handleSheetChanges = useCallback(
      (index: number) => {
        if (index === -1) {
          dismiss();
          resetStates();
          return;
        }
      },
      [dismiss],
    );

    useEffect(() => {
      if (card_name.length > 2) getCards();
    }, [card_name]);

    useEffect(()=>{
      if(amount > 0) setcard_amount(amount);
      if(cardName) setCard_name(cardName);
    }, [cardName, amount])

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={false}
        enableDynamicSizing={false}
        enableContentPanningGesture={false}
        backgroundStyle={styles.background}
        handleIndicatorStyle={styles.indicator}
      >
        <BottomSheetView style={styles.container}>
          <TextArea>
            <Amount
              keyboardType="numeric"
              placeholder="Quantidade"
              onChangeText={onCardAmountChange}
            />
            <Search
              placeholder="Nome do card"
              onSubmitEditing={(e: any) => setCard_name(e.nativeEvent.text)}
            />
          </TextArea>
          {!card_res.loading ? (
            <ListCardViewComponent
              onCardPress={onCardPressed}
              cards={listCards}
              ScrollComponent={BottomSheetScrollView}
            />
          ) : (
            <Loading />
          )}
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  indicator: {
    backgroundColor: "#ccc",
    width: 40,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default AddCardBottomSheet;
