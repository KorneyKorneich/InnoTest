import SignIn from "@/screens/SignIn";
import {RootStackParamList} from "../config";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export const UnauthorizedStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Group>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Group>
  );
};
