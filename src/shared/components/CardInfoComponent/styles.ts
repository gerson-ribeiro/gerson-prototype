import styled from "styled-components/native";

//#region CardInfo
export const CardInfo = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
`;
export const CardName = styled.Text`
    font-size: 28px;
    align-self: flex-start;
    text-align: center;
    width: 100%;
`;
export const CardType = styled.Text`
    text-align: center;
    width: 100%;
    font-size: 22px;
`;
export const CMC = styled.Text`
    text-align: center;
    width: 100%;
    font-size: 22px;
`;
export const CardSubtypesView = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const CardSubtypes = styled.Text`
    font-size: 20px;
`;
export const GameFormatView = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const GameFormatText = styled.Text`
    font-size: 26px;
`;
export const CardRuleDescription = styled.View`
    margin-top: 15px;
`;
export const CardRuleDescriptionText = styled.Text`
    line-height: 33px;
    font-size: 22px;
`;

export const CardLegalInfoScroll = styled.ScrollView`
    width: 100%;
`;
export const CardLegalInfoView = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: center; */
`;
export const CardLegalInfoText = styled.Text`
    margin-top: 15px;
    font-size: 22px;
    text-align: center;
    width: 50%;
`;
//#endregion
