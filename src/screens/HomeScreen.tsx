import {getUserData} from "@/store/entities/user/selectors/getUserData";
import {useNavigation} from "@react-navigation/native";
import React, {useCallback, useEffect} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {useAppDispatch, useAppSelector} from "@/store/hooks/reduxHooks";
import {NavigationProp} from "@/navigation/config";
import {setUserImage} from "@/store/entities/user/userSlice";
import {getUserProfileImage} from "@/api/profile";

export const HomeScreen = () => {
  const userData = useAppSelector(getUserData);
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();

  const fetchUserImg = useCallback(async () => {
    if (userData?.uid) {
      const image = await getUserProfileImage(userData.uid);
      console.log("homescreen", image);
      dispatch(setUserImage(image));
    }
  }, [userData?.uid]);

  useEffect(() => {
    fetchUserImg();
  }, [userData?.uid]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen</Text>
      <Text style={styles.title}>{userData?.displayName}</Text>
      <Button onPress={() => navigation.navigate("Profile")} title="Profile" />
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
