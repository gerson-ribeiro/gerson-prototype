import React from "react";
import { Rules, CardRules, CardRuleText, NoRulesText } from "./styles";

const CardRulesComponent: React.FC<any> = (props) => {
  const {
    navigation,
    route: {
      params: {
        card: { rulings },
      },
    },
  } = props;
  return (
    <Rules>
      <CardRules>
        {rulings?.length > 0 ? (
          rulings?.map(
            (rule: { date: string; text: string }, index: number) => (
              <CardRuleText key={index}>
                {rule.date} - {rule.text}
              </CardRuleText>
            )
          )
        ) : (
          <NoRulesText>No Rules</NoRulesText>
        )}
      </CardRules>
    </Rules>
  );
};

export default CardRulesComponent;
