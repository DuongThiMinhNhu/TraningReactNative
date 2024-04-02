import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types';

export type RootStackParamList = {
  Wellcome: undefined;
	CreateAddWallet: undefined;
	Backup: undefined;
};

export type RootScreenNavigationProps = NativeStackNavigatorProps<
	RootStackParamList, 
	Wellcome, 
	CreateAddWallet,
	Backup,
	>;