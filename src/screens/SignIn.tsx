import React, {useState} from "react";
import {View, Text, Button, StyleSheet, ActivityIndicator} from "react-native";
import {signIn} from "@/api/SignIn";
import {useAppSelector, useAppDispatch} from "@/store/hooks/reduxHooks";
import {getIsLoading} from "@/store/entities/user/selectors/getIsLoading";

const SignIn = () => {
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.title}>Google Sign In</Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Button
            title="Sign in with Google"
            onPress={() => signIn(dispatch)}
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
