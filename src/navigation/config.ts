import type { StaticScreenProps } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  LogOut: undefined;
  Profile: undefined;
};
export type Props = StaticScreenProps<{
  Home: undefined;
  SignIn: undefined;
  LogOut: undefined;
  Profile: undefined;
}>;
