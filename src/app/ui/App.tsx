import {createStaticNavigation} from "@react-navigation/native";
import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {RootStack} from "../model/navigation/config";

const Navigation = createStaticNavigation(RootStack);

const App: React.FC = () => {
  return <Navigation />;
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
