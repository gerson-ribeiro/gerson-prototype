import React from "react";
import Deck from "../../../core/models/deck";
import { Container, DeckDate, DeckFormat, DeckName, Pressable } from "./styles";
interface IListDeckProps{
    deck: Deck;
    navigation: any;
}
const ListDeckAdapter: React.FC<IListDeckProps> = ({deck, navigation}) =>{
    const onDeckSelect = () =>{
        navigation.navigate("DeckView", {deck: deck, navigation: navigation});
    }
    return (
        <Container>
            <Pressable
                onPress={onDeckSelect}
            >
                <DeckName>{deck.name}</DeckName>
                <DeckFormat>{deck.format}</DeckFormat>
                <DeckDate>{deck.date}</DeckDate>
            </Pressable>
        </Container>
    );
}

export default ListDeckAdapter;