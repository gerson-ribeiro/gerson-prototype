import React, { useState } from "react";
import { Text } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";
import CardController from "../../../core/controllers/CardController";
import Card from "../../../core/models/card";
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
