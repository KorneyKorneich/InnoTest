import React from "react";
import {View, Text, Button, StyleSheet, ActivityIndicator} from "react-native";
import {useAppDispatch, useAppSelector} from "@/shared/config";
import {clearUser, setIsLoading} from "@/entity/user/model/userSlice";
import {logOutHandler} from "../api/auth";
import {getIsLoading} from "@/entity/user/api/selectors/getIsLoading";

export const LogOut = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);

  const handleLogOut = async () => {
    dispatch(setIsLoading(true));
    try {
      await logOutHandler();
      dispatch(clearUser());
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you sure you want to log out?</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Log Out" onPress={handleLogOut} color="#FF0000" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});
