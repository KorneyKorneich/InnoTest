import {HomeScreen} from "@/screens/HomeScreen";
import {SignIn} from "@/screens/SignIn";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth";
import {getUserData} from "@/entity/user/api/selectors/getUserData";
import {
  RootStackParamList,
  useAppDispatch,
  useAppSelector,
} from "@/shared/config";
import {setUser} from "@/entity/user/model/userSlice";
import {useEffect} from "react";
import {LogOut} from "@/screens/LogOut";

export const NavigationProvider = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const user = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      dispatch(setUser(user));
    });
  }, [user]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LogOut" component={LogOut} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
