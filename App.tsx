import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import DrawerNavigatorComponent from "./src/components/atoms/menu/DrawerNavigatorComponent";
import { TabNavigatorComponent } from "./src/components/atoms/menu/TabNavigatorComponent";

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
    <GestureHandlerRootView style={styles.flex}>
      <BottomSheetModalProvider>
        <NavigationContainer theme={myTheme}>
          <DrawerNavigatorComponent />
          <TabNavigatorComponent />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
export default App;
