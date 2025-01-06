import {AuthorizedStack} from "@/navigation/StackNavigator/authorizedStack";
import {UnauthorizedStack} from "@/navigation/StackNavigator/UnauthoizedStack";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth";
import {getUserData} from "@/store/entities/user/selectors/getUserData";
import {RootStackParamList} from "../config";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks/reduxHooks";
import {setUser} from "@/store/entities/user/userSlice";

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
      {user ? AuthorizedStack() : UnauthorizedStack()}
    </Stack.Navigator>
  );
};
