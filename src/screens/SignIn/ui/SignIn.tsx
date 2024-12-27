import React, {useState} from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import {onGoogleButtonPress} from "../api/api";
import {UserCredential} from "firebase/auth";

interface User {
  name: string;
}

const SignIn = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [error, setError] = useState(null);
  const signIn = async () => {
    onGoogleButtonPress().then(res => {
      if (res) {
        setUserInfo({name: res.user.displayName || ""});
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Google Sign In</Text>
      {userInfo ? (
        <View>
          <Text>Welcome {userInfo.name}</Text>
        </View>
      ) : (
        <Button title="Sign in with Google" onPress={signIn} color="#4285F4" />
      )}
      {error && <Text style={styles.error}>{error}</Text>}
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
