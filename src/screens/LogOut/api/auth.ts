import auth from "@react-native-firebase/auth";
export const logOutHandler = async () => {
  try {
    await auth().signOut().then(() => console.log('User signed out!'));
  } catch (error) {
    throw error;
  }
};
