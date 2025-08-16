import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { CreateStackNavigator } from "@react-navigation/stack"
import SplashScreen from "./screens/splash"
import HomeScreen from "./screens/home"

const Stack = CreateStackNavigator();


export default App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      
      
      </Stack.Navigator>
    
    </NavigationContainer>
  )
}
