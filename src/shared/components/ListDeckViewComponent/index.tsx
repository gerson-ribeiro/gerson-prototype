import React from "react";
import ListDeckAdapter from "../../../components/adapters/ListDeckAdapter";
import Deck from "../../../core/models/deck";
import { ListDeckView } from "./styles";

interface IListDeckViewProps {
    decks: Array<Deck>;
    navigation: any;
}

const ListDeckViewComponent: React.FC<IListDeckViewProps> = ({
    decks,
    navigation,
}) => {
    return (
        <ListDeckView>
            {decks.length > 0 &&
                decks.map((deck) => (
                    <ListDeckAdapter deck={deck} navigation={navigation} />
                ))}
        </ListDeckView>
    );
};
export default ListDeckViewComponent;
