import Card from "./card";

class Deck {
    constructor() {
        this.cards = new Array<{ card: Card; amount: number }>();
        this.format = "";
        this.name = "";
        this.date = new Date();
    }
    public cards: Array<{ card: Card; amount: number }>;
    public format?: string;
    public name: string;
    public date: Date;
}
export default Deck;
