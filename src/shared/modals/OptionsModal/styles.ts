import styled from "styled-components/native";

export const MainModal = styled.Modal`
    width: 100%;
`;

export const Background = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.View`
    width: 350px;
    height: 250px;
    background-color: #fff;
    justify-content:center;
    align-items: center;
`;

export const ItemsView = styled.TouchableOpacity`
    width: 100%;
    padding: 20px;
    
`;

export const ItemsCard = styled.Text`
    width: 100%;
    text-align: center;
    font-size:22px;
`;
