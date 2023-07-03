import React, { useEffect, useState } from "react";
import OkSVG from "../../../../assets/done_black_24dp.svg";
import {
  ButtonAddLife,
  ButtonApplyLife,
  ButtonGroup,
  ButtonRemoveLife,
  Container,
  CounterLifeText,
  InputDeck,
  InputName,
  LastLifeText,
  LifeScrowView,
  TempLife,
  TextButton,
} from "./styles";

interface ManagerLifeCounterProps {
  placeholderName?: string;
  placeholderDeck?: string;
  historyLifeState: Array<number>;
  callbackLifeApply: (e: React.SetStateAction<number[]>) => void;
}

const ManagerLifeCounter: React.FC<ManagerLifeCounterProps> = ({
  placeholderName,
  placeholderDeck,
  historyLifeState,
  callbackLifeApply,
}) => {
  const [tempLife, setTempLife] = useState(20);
  const [lastLife, setLastLife] = useState(20);

  useEffect(() => {
    callbackLifeApply((oldHistoryLifeState) => [
      ...oldHistoryLifeState,
      lastLife,
    ]);
  }, [lastLife]);

  useEffect(() => {
    if (historyLifeState.length == 0) {
      setTempLife(20);
      setLastLife(20);
    }
  }, [historyLifeState]);
  return (
    <Container>
      <InputName placeholder={placeholderName} />
      <InputDeck placeholder={placeholderDeck} />

      <LifeScrowView>
        {historyLifeState.map((life, index) =>
          index + 1 != historyLifeState.length ? (
            <CounterLifeText key={index}>{life}</CounterLifeText>
          ) : (
            <LastLifeText key={index}>{life}</LastLifeText>
          )
        )}
      </LifeScrowView>
      <TempLife>{tempLife}</TempLife>
      <ButtonGroup>
        <ButtonAddLife onPress={() => setTempLife(tempLife + 1)}>
          <TextButton>+</TextButton>
        </ButtonAddLife>
        <ButtonApplyLife onPress={() => setLastLife(tempLife)}>
          <OkSVG />
        </ButtonApplyLife>
        <ButtonRemoveLife onPress={() => setTempLife(tempLife - 1)}>
          <TextButton>-</TextButton>
        </ButtonRemoveLife>
      </ButtonGroup>
    </Container>
  );
};
export default ManagerLifeCounter;
