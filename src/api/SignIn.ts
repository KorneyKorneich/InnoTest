import {setUser} from "@/store/entities/user/userSlice";

import {setIsLoading} from "@/store/entities/user/userSlice";
import {AppDispatch} from "@/store/store";
import auth from "@react-native-firebase/auth";
import {GoogleSignin} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId: process.env.WEB_CLIENT_ID,
});
export async function onGoogleButtonPress() {
  try {
    const userInfo = await GoogleSignin.signIn();
    if (!userInfo.data) {
      throw new Error("No user info found");
    }
    const idToken = userInfo.data.idToken;

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    throw error;
  }
}

export const signIn = async (dispatch: AppDispatch) => {
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
