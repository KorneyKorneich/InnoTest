import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    "461307165635-7nnueg6r1ai8ptk7lkp2b97o014aa8ka.apps.googleusercontent.com",
});
export async function onGoogleButtonPress() {
  const userInfo = await GoogleSignin.signIn();
  if (!userInfo.data) {
    throw new Error("No user info found");
  }
  const idToken = userInfo.data.idToken;

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
}
