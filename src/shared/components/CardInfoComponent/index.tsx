import React from "react";
import {
  CardInfo,
  CardLegalInfoScroll,
  CardLegalInfoText,
  CardLegalInfoView,
  CardName,
  CardRuleDescription,
  CardRuleDescriptionText,
  CardSubtypes,
  CardSubtypesView,
  CardType,
  CMC,
  GameFormatText,
  GameFormatView,
} from "./styles";

const CardInfoComponent: React.FC<any> = (props) => {
  const {
    navigation,
    route: {
      params: {
        card: {
          name,
          originalType,
          manaCost,
          types,
          colors,
          text,
          legalities,
          rarity,
        },
      },
    },
  } = props;

  return (
    <CardInfo>
      <CardName>{name}</CardName>
      <CardType>{originalType}</CardType>
      <CMC>{manaCost}</CMC>
      <CardSubtypesView>
        {types?.map((subtype: string, index: number) => (
          <CardSubtypes key={index}>{subtype}</CardSubtypes>
        ))}
      </CardSubtypesView>
      <GameFormatView>
        <GameFormatText>{rarity}</GameFormatText>
      </GameFormatView>
      <CardRuleDescription>
        <CardRuleDescriptionText>{text}</CardRuleDescriptionText>
      </CardRuleDescription>
      <CardLegalInfoScroll>
        {legalities.map(
          (
            {
              format,
              legality,
            }: {
              format: string;
              legality: string;
            },
            index: number
          ) => (
            <CardLegalInfoView key={index}>
              <CardLegalInfoText>{format}</CardLegalInfoText>
              <CardLegalInfoText
                style={{ color: legality == "Legal" ? "green" : "red" }}
              >
                {legality}
              </CardLegalInfoText>
            </CardLegalInfoView>
          )
        )}
      </CardLegalInfoScroll>
    </CardInfo>
  );
};

export default CardInfoComponent;
