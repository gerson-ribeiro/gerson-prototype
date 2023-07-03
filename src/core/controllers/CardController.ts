import React, { useState } from "react";
import Card from "../models/card";
import cardService from "../services/requester/card";
import { QueryFormatter } from "jade-request";

const query = QueryFormatter;
const { get, post, put, delete: deleteCard } = cardService;
interface ICardProvider {
  endpoint?: string;
  filter?: Card;
  loading?: boolean;
}
interface ICardService {
  loading: boolean;
  get: (
    callback: (data: { cards: any }) => void,
    onFail?: (err: any) => void,
    onFinally?: () => void
  ) => void;
}

const CardController: (args?: ICardProvider) => ICardService = ({
  endpoint = "cards",
  filter = new Card(),
  loading = false,
}) => {
  const [cards, setCards] = useState([]);
  const [_loading, setLoading] = useState(loading);

  function _get(filter: any): Promise<any> {
    return get(endpoint + "?" + query(filter));
  }
  useState;

  const getC = (
    callback: (data: { cards: any }) => void,
    onFail?: (err: any) => void,
    onFinally?: () => void
  ) => {
    setLoading(true);
    _get(filter)
      .then(({ data }) => {
        setCards(data.cards);
        callback(data);
      })
      .catch(onFail)
      .finally(() => {
        setLoading(false);
        if (onFinally) onFinally();
      });
  };

  return {
    get: getC,
    loading: _loading,
  };
};

export default CardController;
