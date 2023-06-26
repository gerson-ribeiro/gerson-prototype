import styled from "styled-components/native";

export const Container = styled.Modal`
`;
export const Background = styled.TouchableOpacity`
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.5);
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const Main = styled.View`
    width: 350px;
    height: 400px;
    padding: 10px;
    background-color:#fff;
    border-radius:5px;
    box-shadow: 10px 1px 5px rgba(0, 0, 0, 0.2);
`;
export const TextArea = styled.View`
    width: 100%;
    background-color:#fff;
    border-radius:5px;
    box-shadow: 10px 1px 5px rgba(0, 0, 0, 0.2);
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    flex-direction:row;
`;
export const Search = styled.TextInput`
    padding: 10px;
    font-size: 20px;
    border-bottom-color: black;
    border-bottom-width: 2px;
    width: 60%;
`;
export const Amount = styled.TextInput`
    padding: 10px;
    font-size: 20px;
    border-bottom-color: black;
    border-bottom-width: 2px;
    width: 40%;
`;
