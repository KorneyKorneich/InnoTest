import {HomeScreen} from "@/screens/HomeScreen";
import {RootStackParamList} from "../config";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LogOut} from "@/screens/LogOut";
import ProfileScreen from "@/screens/ProfileScreen";
export const AuthorizedStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Group>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LogOut" component={LogOut} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Group>
  );
};
