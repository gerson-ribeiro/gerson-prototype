class Card {
    name!: string;
    names?: string[] | undefined;
    manaCost?: string | undefined;
    cmc?: number | undefined;
    colors?: string[] | undefined;
    colorIdentity?: string[] | undefined;
    type?: string | undefined;
    supertypes?: string[] | undefined;
    types?: string[] | undefined;
    subtypes?: string[] | undefined;
    rarity?: string | undefined;
    set?: string | undefined;
    text?: string | undefined;
    artist?: string | undefined;
    number?: string | undefined;
    power?: string | undefined;
    toughness?: string | undefined;
    layout?: string | undefined;
    multiverseid?: number | undefined;
    imageUrl?: string | undefined;
    rulings?: { date: string; text: string; }[] | undefined;
    foreignNames?: { name: string; language: string; multiverseid: number; }[] | undefined;
    gameFormat?: Object;
    
}
export default Card;