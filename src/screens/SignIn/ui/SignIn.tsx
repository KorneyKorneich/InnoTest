import React, {useState} from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import {onGoogleButtonPress} from "../api/api";
import {NavigationProp, useAppDispatch, useAppSelector} from "@/shared/config";
import {setUser} from "@/entity/user/model/userSlice";
import {useNavigation} from "@react-navigation/native";

const SignIn = () => {
  // const [userInfo, setUserInfo] = useState<FirebaseAuthTypes.User | null>(null);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();

  const signIn = async () => {
    onGoogleButtonPress().then(res => {
      if (res && res.user) {
        // setUserInfo(res.user);
        dispatch(setUser(res.user));
        // navigation.navigate("Home");
      }
    });
  };

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.title}>Google Sign In</Text>
        <Button title="Sign in with Google" onPress={signIn} color="#4285F4" />
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
