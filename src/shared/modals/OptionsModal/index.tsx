import React from "react";
import {
    Background,
    Container,
    ItemsCard,
    ItemsView,
    MainModal,
} from "./styles";

interface IOptionsModalProps {
    arrayOptionsWithCallback: Array<{
        option: string;
        callback: (item: any) => void;
        item: any;
    }>;
    modalVisible: boolean;
    onRequestClose: () => void;
    dismiss: () => void;
    transparent?: boolean;
}
const OptionsModal: React.FC<IOptionsModalProps> = ({
    arrayOptionsWithCallback,
    modalVisible,
    onRequestClose,
    dismiss,
    transparent,
}) => {
    return (
        <MainModal
            visible={modalVisible}
            onRequestClose={onRequestClose}
            transparent={transparent}
        >
            <Background onPress={dismiss}>
                <Container>
                    {arrayOptionsWithCallback.map(
                        ({ option, callback, item }) => (
                            <ItemsView
                                onPress={() => {
                                    callback(item);
                                    dismiss();
                                }}
                            >
                                <ItemsCard>{option}</ItemsCard>
                            </ItemsView>
                        )
                    )}
                </Container>
            </Background>
        </MainModal>
    );
};

export default OptionsModal;
