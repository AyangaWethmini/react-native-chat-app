import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/splash";
import HomeScreen from "./screens/home";

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: { 
            backgroundColor: '#030303', 
            height: 120, 
            borderBottomWidth: 1, 
            borderBottomColor: '#fff' 
          },
          headerTintColor: '#fff',
          headerTitleStyle: { fontSize: 26 }
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "My Chats" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
