import React from "react";
import { ScrollView } from "react-native";
import ListCardAdapter from "../../../components/atoms/adapters/ListCardAdapter";
import ListCardAmountAdapter from "../../../components/atoms/adapters/ListCardAmountAdapter";
import Card from "../../../core/models/card";
import { ListCardView } from "./styles";

interface IListCardViewProps {
  cards?: Array<Card>;
  deckList?: Array<{ card: Card; amount: number }>;
  onChangeAmountCallback?: (amount: number) => void;
  onCardPress: (card: Card) => void;
  height?: string;
  ScrollComponent?: React.ComponentType<any>;
}

const ListCardViewComponent: React.FC<IListCardViewProps> = ({
  deckList,
  cards,
  onChangeAmountCallback,
  onCardPress,
  height = "100%",
  ScrollComponent = ScrollView,
}) => {
  const onChangeAmount = (amount: number) => {
    if (onChangeAmountCallback) {
      onChangeAmountCallback(amount);
    }
  };

  return (
    <ListCardView>
      {cards && (
        <ScrollComponent style={{ flex: 1 }}>
          {cards.map((card, index) => (
            <ListCardAdapter
              key={index}
              card={card}
              onCardPress={onCardPress}
            />
          ))}
        </ScrollComponent>
      )}
      {deckList && (
        <ScrollComponent style={{ flex: 1 }}>
          {deckList.map(({ card, amount }, index) => (
            <ListCardAmountAdapter
              key={index}
              onCardPress={onCardPress}
              card={card}
              amount={amount}
              callback={onChangeAmount}
            />
          ))}
        </ScrollComponent>
      )}
    </ListCardView>
  );
};
export default ListCardViewComponent;
