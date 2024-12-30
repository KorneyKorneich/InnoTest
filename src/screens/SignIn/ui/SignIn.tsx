import React, {useState} from "react";
import {View, Text, Button, StyleSheet, ActivityIndicator} from "react-native";
import {onGoogleButtonPress} from "../api/api";
import {NavigationProp, useAppDispatch, useAppSelector} from "@/shared/config";
import {setIsLoading, setUser} from "@/entity/user/model/userSlice";
import {useNavigation} from "@react-navigation/native";
import {getIsLoading} from "@/entity/user/api/selectors/getIsLoading";

const SignIn = () => {
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);

  const signIn = async () => {
    dispatch(setIsLoading(true));
    try {
      const res = await onGoogleButtonPress();
      if (res && res.user) {
        dispatch(setUser(res.user));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.title}>Google Sign In</Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Button
            title="Sign in with Google"
            onPress={signIn}
            color="#4285F4"
          />
        )}
      </>
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
  signInButton: {
    width: 192,
    height: 48,
  },
  error: {
    marginTop: 16,
    color: "red",
  },
});

export default SignIn;
