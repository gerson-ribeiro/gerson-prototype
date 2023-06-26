import React, { useState } from "react";
import {
    Container,
    EnemyView,
    MyView,
} from "./styles";
import ManagerLifeCounter from "../../../shared/components/managerLifeComponent";
import RedFloatButtonComponent from "../../../shared/components/RedFloatButtonComponent";

const LifeCounterComponent = () => {
    const [enemyHistoryLife, setEHistoryLife] = useState(new Array<number>());
    const [myHistoryLife, setMyHistoryLife] = useState(new Array<number>());

    const resetGame = () => {
        setEHistoryLife(new Array<number>());
        setMyHistoryLife(new Array<number>());
    };

    return (
        <Container>
            <RedFloatButtonComponent
                callback={resetGame}
                text="Reset"
            />
            <EnemyView>
                <ManagerLifeCounter
                    placeholderName="Nome"
                    placeholderDeck="Deck"
                    historyLifeState={enemyHistoryLife}
                    callbackLifeApply={setEHistoryLife}
                />
            </EnemyView>
            <MyView>
                <ManagerLifeCounter
                    placeholderName="Nome do Oponente"
                    placeholderDeck="Deck do Oponente"
                    historyLifeState={myHistoryLife}
                    callbackLifeApply={setMyHistoryLife}
                />
            </MyView>
        </Container>
    );
};
export default LifeCounterComponent;
