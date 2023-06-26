import { FlatList } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Card from "../../../core/models/card";

export const Container = styled.KeyboardAvoidingView`
    width: 100%;
    height: 100%;
    padding:10px;
`;

export const Search = styled.TextInput`
    width: 100%;
    background-color: #ddd;
    font-size: 25px;
    padding: 5px;
    border-bottom-color: black;
    border-bottom-width: 2px;
`;

export const Loading = styled.Text``;
