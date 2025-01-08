import { updateUserProfileImage } from "@/api/profile";
import { setUserImage } from "@/store/entities/user/userSlice";
import { AppDispatch } from "@/store/store";
import { ImagePickerResponse } from "react-native-image-picker";

export const imageApply = async (response: ImagePickerResponse, dispatch: AppDispatch, uid: string) => {
  if (response.assets && uid) {
    const base64Image = response.assets[0].base64;
    if (base64Image) {
      await updateUserProfileImage(uid, base64Image)
      dispatch(setUserImage(base64Image));
    } else if (response.didCancel) {
      console.log("User cancelled image picker");
    }
  }
}