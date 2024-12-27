import { HomeScreen } from "@/screens/HomeScreen";
import { SignIn } from "@/screens/SignIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screenOptions: {
    headerShown: false,
  },
    screens: {
      Home: HomeScreen,
      SignIn: SignIn,
    },
  });