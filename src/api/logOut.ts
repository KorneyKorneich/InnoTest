import { clearUser } from "@/store/entities/user/userSlice";
import { setIsLoading } from "@/store/entities/user/userSlice";
import { AppDispatch } from "@/store/store";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
export const logOutHandler = async () => {
  try {
    await auth().signOut();
    await GoogleSignin.signOut();

  } catch (error) {
    throw error;
  }
};

export const handleLogOut = async (dispatch: AppDispatch) => {
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
