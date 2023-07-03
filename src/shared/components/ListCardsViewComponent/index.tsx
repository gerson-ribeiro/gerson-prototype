import React from "react";
import ListCardAdapter from "../../../components/atoms/adapters/ListCardAdapter";
import ListCardAmountAdapter from "../../../components/atoms/adapters/ListCardAmountAdapter";
import Card from "../../../core/models/card";
import { ListCard, ListCardView } from "./styles";

interface IListCardViewProps {
  cards?: Array<Card>;
  deckList?: Array<{ card: Card; amount: number }>;
  onChangeAmountCallback?: (amount: number) => void;
  onCardPress: (card: Card) => void;
  height?: string;
}

const ListCardViewComponent: React.FC<IListCardViewProps> = ({
  deckList,
  cards,
  onChangeAmountCallback,
  onCardPress,
  height = "100%",
}) => {
  const onChangeAmount = (amount: number) => {
    console.log("quantidade", amount);
    if (onChangeAmountCallback) {
      onChangeAmountCallback(amount);
    }
  };

  return (
    <ListCardView>
      {cards && (
        <ListCard style={{ height }}>
          {cards.map((card, index) => (
            <ListCardAdapter
              key={index}
              card={card}
              onCardPress={onCardPress}
            />
          ))}
        </ListCard>
      )}
      {deckList && (
        <ListCard style={{ height }}>
          {deckList.map(({ card, amount }, index) => (
            <ListCardAmountAdapter
              key={index}
              onCardPress={onCardPress}
              card={card}
              amount={amount}
              callback={onChangeAmount}
            />
          ))}
        </ListCard>
      )}
    </ListCardView>
  );
};
export default ListCardViewComponent;
