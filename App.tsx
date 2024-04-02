import * as React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wellcome from "./screens/Wellcome";
import CreateAddWallet from "./screens/CreateAddWallet";
import { RootStackParamList } from "./type";
import Backup from "./screens/Backup";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Wellcome">
        <Stack.Screen name="Wellcome" component={Wellcome}/>
        <Stack.Screen name="CreateAddWallet" component={CreateAddWallet}/>
        <Stack.Screen name="Backup" component={Backup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};