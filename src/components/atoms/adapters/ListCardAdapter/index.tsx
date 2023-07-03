import React from "react";
import Card from "../../../../core/models/card";
import {
  CardEdition,
  CardImage,
  CardInfo,
  CardName,
  CardType,
  ClickMe,
  Container,
} from "./styles";
interface IListCardProps {
  onCardPress: (card: Card) => void;
  card: Card;
}
const ListCardAdapter: React.FC<IListCardProps> = ({ card, onCardPress }) => {
  return (
    <Container>
      <ClickMe onPress={() => onCardPress(card)}>
        <CardImage source={{ uri: card.imageUrl }}></CardImage>
        <CardInfo>
          <CardName>{card.name}</CardName>
          <CardType>{card.type}</CardType>
          <CardEdition>{card.set}</CardEdition>
        </CardInfo>
      </ClickMe>
    </Container>
  );
};
export default ListCardAdapter;
