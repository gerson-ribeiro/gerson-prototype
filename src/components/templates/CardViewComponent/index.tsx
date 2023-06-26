import React, { useLayoutEffect } from "react";
import Card from "../../../core/models/card";
import ImageSVG from "../../../../assets/image_black_24dp.svg";
import InfoSVG from "../../../../assets/info_black_24dp.svg";
import RulesSVG from "../../../../assets/gavel_black_24dp.svg";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CardImageComponent from "../../../shared/components/CardImageComponent";
import CardInfoComponent from "../../../shared/components/CardInfoComponent";
import CardRulesComponent from "../../../shared/components/CardRulesComponent";
import { NavigationStackScreenProps } from "react-navigation-stack";

const Tab = createBottomTabNavigator();

interface ICardViewProps{
    navigation: any;
    route: {params: {card:Card}}
}

const CardViewComponent: React.FC<ICardViewProps> = ( { navigation, route: { params : { card }}}) => {
    useLayoutEffect(() => {
      navigation.setOptions({title:card.name})
    },[])
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => <ImageSVG fill={color} />,
                }}
                name="Image"
                component={CardImageComponent}
                initialParams={{ card: card }}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => <InfoSVG fill={color} />,
                }}
                name="Informações"
                component={CardInfoComponent}
                initialParams={{ card: card }}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => <RulesSVG fill={color} />,
                }}
                name="Regras"
                component={CardRulesComponent}
                initialParams={{ card: card }}
            />
        </Tab.Navigator>
    );
};

export default CardViewComponent;
