import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    padding: 10px;
    margin: 5px 0px;
`;
export const ClickMe = styled.TouchableOpacity`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const CardImage = styled.Image`
    height: 80px;
    width: 60px;
    align-self: flex-start;
`;
export const CardInfo = styled.View`
    display: flex;
    align-self: center;
`;
export const CardName = styled.Text`
    text-align: right;
    font-size: 14px;
`;
export const CardEdition = styled.Text`
    text-align: right;
`;
export const CardType = styled.Text`
    text-align: right;
    color: gray;
    font-size: 12px;
`;
