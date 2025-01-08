import { getDoc, updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { launchImageLibrary, launchCamera, ImagePickerResponse } from "react-native-image-picker";
import { AppDispatch } from "@/store/store";
import { imageApply } from "@/helpers/profile";

export const getUserProfileImage = async (uid: string) => {
  const res = (await getDoc(doc(db, "users", uid)));
  return res.data()?.photo;
};

export const updateUserProfileImage = async (uid: string, image: string) => {
    await updateDoc(doc(db, "users", uid), {photo: image})
    const res = await getUserProfileImage(uid)
    return res
}

export const handleImagePick = (uid: string, dispatch: AppDispatch) => {
    launchImageLibrary(
      {
        mediaType: "photo",
        quality: 0.2,
        includeBase64: true,
      },
      response => {
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
    response => {    
      imageApply(response, dispatch, uid);
    })
  }

  