import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

const Tab = createBottomTabNavigator();
interface TabNavigationProps {
  tabs?: Array<{ name: string; component: any; svg: any }>;
  headerShown?: boolean;
}

export const TabNavigatorComponent: React.FC<TabNavigationProps> = ({
  tabs,
  headerShown,
}) => {
  return (
    <Tab.Navigator>
      {tabs?.map(({ name, component, svg }) => (
        <Tab.Screen
          name={name}
          component={component}
          options={{
            headerShown: headerShown,
            tabBarIcon: ({ color }) => svg,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
