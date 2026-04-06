import React from "react";
import ListDeckAdapter from "../../../components/atoms/adapters/ListDeckAdapter";
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
  console.log("decks", decks);
  return (
    <ListDeckView>
      {decks.length > 0 &&
        decks.map((deck, index) => (
          <ListDeckAdapter key={index} deck={deck} navigation={navigation} />
        ))}
    </ListDeckView>
  );
};
export default ListDeckViewComponent;
