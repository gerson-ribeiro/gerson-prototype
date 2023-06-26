import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 5px;
`;

export const InputName = styled.TextInput`
    border-bottom-color: black;
    border-bottom-width: 1px;
    font-size: 23px;
    width: 100%;
`;
export const InputDeck = styled.TextInput`
    border-bottom-color: black;
    border-bottom-width: 1px;
    font-size: 23px;
    width: 100%;
`;

export const LifeScrowView = styled.ScrollView`
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 5px;
`;

export const CounterLifeText = styled.Text`
    text-decoration: line-through;
    color: gray;
    font-size: 25px;
    width: 100%;
    text-align:center;
`;
export const LastLifeText = styled.Text`
    color: black;
    font-size: 40px;
    width:100%;
    text-align:center;
`;
export const TempLife = styled.Text`
    color: green;
    font-size: 20px;
`;
export const ButtonGroup = styled.View`
    width: 100%;
    margin:auto;
    display: flex;
    align-items: center;
    align-self: flex-end;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    padding:0px 20px;
`;
export const TextButton = styled.Text`
    color: black;
    font-size: 22px;
`;
export const ButtonAddLife = styled.TouchableOpacity`
    border-radius: 50px;
    padding: 5px 15px;
    background-color: gray;
    margin: 0;
`;
export const ButtonApplyLife = styled.TouchableOpacity`
    border-radius: 3px;
    padding: 10px;
    background-color: green;
    color: white;
    margin: 0;
`;
export const ButtonRemoveLife = styled.TouchableOpacity`
    border-radius: 50px;
    padding: 5px 15px;
    background-color: gray;
    margin: 0;
`;
