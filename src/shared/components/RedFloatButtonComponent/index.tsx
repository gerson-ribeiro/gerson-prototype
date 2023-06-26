import React from "react";
import { ButtonAddDeck, ButtonAddDeckText, ButtonAddDeckView } from "./styles";

interface IRedFloatButtonProps {
    callback: () => void;
    text: string;
}

const RedFloatButtonComponent: React.FC<IRedFloatButtonProps> = ({
    callback,
    text,
}) => {
    return (
        <ButtonAddDeckView>
            <ButtonAddDeck onPress={callback}>
                <ButtonAddDeckText>{text}</ButtonAddDeckText>
            </ButtonAddDeck>
        </ButtonAddDeckView>
    );
};
export default RedFloatButtonComponent;