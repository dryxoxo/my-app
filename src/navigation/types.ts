import { StackNavigationProp } from '@react-navigation/stack';
import { StackScreenProps } from '@react-navigation/stack';

// Definisikan tipe param list
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  OTP: undefined;
  Pin: undefined;
};

// Tipe navigasi untuk `useNavigation`
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

// Tipe untuk Screen Props
export type RootStackScreenProps<RouteName extends keyof RootStackParamList> = 
  StackScreenProps<RootStackParamList, RouteName>;
