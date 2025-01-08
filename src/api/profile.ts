import { getDoc, updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { launchImageLibrary, launchCamera, ImagePickerResponse } from "react-native-image-picker";
import { setUserImage } from "@/store/entities/user/userSlice";
import { AppDispatch } from "@/store/store";

export const getUserProfileImage = async (uid: string) => {
  const res = (await getDoc(doc(db, "users", uid)));
  return res.data()?.photo;
};

export const updateUserProfileImage = async (uid: string, image: string) => {
    await updateDoc(doc(db, "users", uid), {photo: image})
    const res = await getUserProfileImage(uid)
    return res
}


const imageApply = (response: ImagePickerResponse, dispatch: AppDispatch, uid: string) => {
  if (response.assets && uid) {
    const base64Image = response.assets[0].base64;
    if (base64Image) {
      updateUserProfileImage(uid, base64Image)
      dispatch(setUserImage(base64Image));
    } else if (response.didCancel) {
      console.log("User cancelled image picker");
    }
  }

}

export const handleImagePick = (uid: string, dispatch: AppDispatch) => {
    launchImageLibrary(
      {
        mediaType: "photo",
        quality: 0.2,
        includeBase64: true,
      },
      async response => {
        imageApply(response, dispatch, uid);
      },
    );
  };

  export const handlePhotoCapture = (uid: string, dispatch: AppDispatch) => {
    launchCamera({ 
      mediaType: "photo",
      quality: 0.2,
      includeBase64: true
    },  
    async response => {    
      imageApply(response, dispatch, uid);
    })
  }

  