import React from "react";
import { CardImage, Container } from "./styles";

const CardImageComponent: React.FC<any> = (props) => {
  const {
    navigation,
    route: {
      params: { card },
    },
  } = props;

  return (
    <Container>
      <CardImage source={{ uri: card.imageUrl }} />
    </Container>
  );
};
export default CardImageComponent;
