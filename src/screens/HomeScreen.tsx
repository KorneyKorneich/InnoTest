import {getUserData} from "@/store/entities/user/selectors/getUserData";
import {useNavigation} from "@react-navigation/native";
import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {useAppSelector} from "@/store/hooks/reduxHooks";
import {NavigationProp} from "@/navigation/config";

export const HomeScreen = () => {
  const userData = useAppSelector(getUserData);

  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen</Text>
      <Text style={styles.title}>{userData?.displayName}</Text>
      <Button onPress={() => navigation.navigate("LogOut")} title="Log out" />
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
