import Card from "../models/card";
const CardController = () => {
    url: string;
    public cards: Array<Card>;
    public filter: Card;
    public loading: boolean;

    constructor() {
        this.url = 'https://api.magicthegathering.io/v1/cards';
        this.cards = new Array<Card>();        
        this.filter = new Card();
        this.loading = false;
    }

    getCards(callback: (data: {cards: any})=> void, onFail?: (err:any)=>void, onFinally?: ()=>void){
        this.loading = true;
        this.get(this.filter)
        .then(({ data }) => {
            this.cards= data.cards;
            callback(data);
        })
        .catch(onFail)
        .finally(()=>{
            this.loading = false;
            if(onFinally) onFinally();
        });
    }

    private get(card: Card): Promise<any>{
        return get(this.url,{
            params:{ name: card.name }
        });
    }
    post(card: Card): Promise<any>{
        return get(this.url,{
            params: card
        });
    }
}

export default CardController;