import React, { useState } from "react";
import Card from "../models/card";
import cardService from "../services/requester/card";

const { get } = cardService();
interface ICardProvider {
  endpoint?: string;
  filter?: Card;
  loading?: boolean;
}
interface ICardService {
  loading: boolean;
  get: (
    callback: (data: { cards: any }) => void,
    onFinally?: () => void
  ) => void;
}
function objectToQueryString(obj: any) {
  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
}

const CardController: (args?: ICardProvider) => ICardService = ({
  endpoint = "cards",
  filter = new Card(),
  loading = false,
}: ICardProvider | any) => {
  const [cards, setCards] = useState([]);
  const [_loading, setLoading] = useState(loading);

  async function _get(filter: any): Promise<any> {
    return await get(endpoint + "?" + objectToQueryString(filter));
  }

  const getC = async (
    callback: (data: { cards: any }) => void,
    onFinally?: () => void
  ) => {
    debugger;
    setLoading(true);
    const data = await _get(filter);
    
    setCards(data.cards);
    callback(data);
    setLoading(false);
    if (onFinally) onFinally();

    return data;
  };

  return {
    cards,
    get: getC,
    loading: _loading,
  };
};

export default CardController;
