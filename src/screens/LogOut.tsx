import React from "react";
import {View, Text, Button, StyleSheet, ActivityIndicator} from "react-native";
import {useAppDispatch, useAppSelector} from "@/store/hooks/reduxHooks";
import {handleLogOut} from "@/api/logOut";
import {getIsLoading} from "@/store/entities/user/selectors/getIsLoading";

export const LogOut = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you sure you want to log out?</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button
          title="Log Out"
          onPress={() => handleLogOut(dispatch)}
          color="#FF0000"
        />
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
