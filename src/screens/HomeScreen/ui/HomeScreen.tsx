import {NavigationProp} from "@/shared/config";
import {useNavigation} from "@react-navigation/native";
import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("SignIn")}
        title="Go to SignIn"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});

export default HomeScreen;
