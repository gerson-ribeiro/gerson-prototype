import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DrawerNavigatorComponent from "./src/components/menu/DrawerNavigatorComponent";

const myTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 255, 255)",
    background: "rgb(255, 255, 255)",
    card: "rgb(255, 132, 0)",
    text: "rgb(0, 0, 0)",
    border: "rgb(255, 132, 132)",
    notification: "rgb(255, 251, 0)",
  },
};

const App = () => {
  return (
    <NavigationContainer theme={myTheme}>
      <DrawerNavigatorComponent />
      {/* <TabNavigatorComponent /> */}
    </NavigationContainer>
  );
};
export default App;
