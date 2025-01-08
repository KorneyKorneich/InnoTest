import {AuthorizedStack} from "@/navigation/StackNavigator/authorizedStack";
import {UnauthorizedStack} from "@/navigation/StackNavigator/UnauthoizedStack";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {getUserData} from "@/store/entities/user/selectors/getUserData";
import {RootStackParamList} from "../config";
import {useAppDispatch, useAppSelector} from "@/store/hooks/reduxHooks";
import {setUser} from "@/store/entities/user/userSlice";
import auth from "@react-native-firebase/auth";
import {useEffect} from "react";

//didnt move auth check to app.tsx because of dispatch that was not wrapped by <Provider />

export const NavigationProvider = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserData);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      dispatch(setUser(user));
    });
  }, [user]);

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user ? AuthorizedStack() : UnauthorizedStack()}
    </Stack.Navigator>
  );
};
