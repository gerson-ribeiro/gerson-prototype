import { DrawerToggleButton } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useLayoutEffect } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ListCardComponent } from "../../lists/listCardsComponent";
import CardViewComponent from "../../templates/CardViewComponent";

const Stack = createStackNavigator();

const StackNavigatorComponent: React.FC<any> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="CardSearch"
        component={ListCardComponent}
        options={{
          title: "Busca de Cards",
          headerLeft: () => (
            <DrawerToggleButton pressOpacity={navigation.toggleDrawer} />
          ),
        }}
      />
      <Stack.Screen name="CardView" component={CardViewComponent} />
    </Stack.Navigator>
  );
};

export default StackNavigatorComponent;
