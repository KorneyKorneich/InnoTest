import auth from "@react-native-firebase/auth";
export const logOutHandler = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    throw error;
  }
};
