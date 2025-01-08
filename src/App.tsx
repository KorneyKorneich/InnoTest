import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {StyleSheet} from "react-native";
import {Provider} from "react-redux";
import {NavigationProvider} from "@/navigation/StackNavigator/root";
import {store} from "./store/store";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <NavigationProvider />
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default App;
