import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LifeCounterComponent from "../../templates/LifeCounterComponent";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigatorComponent from "../StackNavigatorComponent";
import DecksStackNavigatorComponent from "../DecksStackNavigatorComponent";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigatorComponent: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="ListCardComponent">
      <Drawer.Screen
        name="Search"
        component={StackNavigatorComponent}
        options={{ title: "Busca de Cards" }}
      />
      <Drawer.Screen
        name="Meus Decks"
        component={DecksStackNavigatorComponent}
      />
      <Drawer.Screen name="Marcador de Vida" component={LifeCounterComponent} />
      <Drawer.Screen name="Minha Want" component={LifeCounterComponent} />
      <Drawer.Screen name="Minhas Passantes" component={LifeCounterComponent} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorComponent;
