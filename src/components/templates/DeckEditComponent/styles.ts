import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;
`;
export const DeckInfo = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const DeckName = styled.TextInput`
    padding: 10px;
    font-size: 20px;
    border-bottom-color: black;
    border-bottom-width: 2px;
    width: 50%;
`;
export const DeckFormat = styled.TextInput`
    padding: 10px;
    font-size: 20px;
    border-bottom-color: black;
    border-bottom-width: 2px;
    width: 50%;
`;
export const CardAmount = styled.TextInput`
    padding: 10px;
    font-size: 20px;
    border-bottom-color: black;
    border-bottom-width: 2px;
    width: 50%;
`;
export const CardName = styled.TextInput`
    padding: 10px;
    font-size: 20px;
    border-bottom-color: black;
    border-bottom-width: 2px;
    width: 50%;
`;
export const CardAddButton = styled.TouchableOpacity`
    background-color: #ddd;
    margin-top:15px;
    font-size: 20px;
    width: 50%;
    border-radius:3px;
`;
export const CardAddText = styled.Text`
    padding: 10px;
    text-align: center;
    width: 100%;
    font-size: 20px;
`;
