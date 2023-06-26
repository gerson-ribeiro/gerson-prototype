import { useEffect, useState } from "react";
import React from "react";
import CardController from "../../../core/controllers/CardController";
import Card from "../../../core/models/card";
import { Container, Loading, Search } from "./styles";
import ListCardAdapter from "../../adapters/ListCardAdapter";
import ListCardViewComponent from "../../../shared/components/ListCardsViewComponent";

const cards_res = new CardController();

export const ListCardComponent: React.FC<any> = ({ navigation }) => {
    const [cards, setListCards] = useState(new Array<Card>());
    const [card, setCard] = useState(new Card());
    const [loading, setLoading] = useState(false);

    const getCards = () => {     
        cards_res.filter = card;   
        cards_res.getCards(data => setListCards(cards_res.cards),e=> setListCards(new Array<Card>()),() => setLoading(false));
    };

    const onChangeCardName = (value: any) => {
        card.name = value;
        if (value == "") {
            setCard(new Card());
        } else {
            setCard(card);
        }
        setLoading(true);
        setTimeout(() => getCards(), 3000);
    };

    const avancar = (card: Card) => {
        navigation.navigate("CardView", { card: card });
    };

    useEffect(() => {
        if (card.name) getCards();
    }, [card]);

    return (
        <Container>
            <Search onChangeText={onChangeCardName} />
            {loading ? (
                <Loading>Carregando...</Loading>
            ) : (
                <ListCardViewComponent cards={cards} onCardPress={avancar} />
            )}
        </Container>
    );
};
