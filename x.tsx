import * as React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SendMoney from "./SendMoney";
import Wellcome from "./screens/Wellcome";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Wellcome" component={Wellcome} />
      {/* <Stack.Screen name="SendMoney" component={SendMoney} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};