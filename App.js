import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/splash";
import HomeScreen from "./screens/home";
import ChatDetailScreen from './screens/chat';
import ContactScreen from './screens/contacts';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: { 
            backgroundColor: '#131313ff', 
            height: 120, 
             
          },
          headerTintColor: '#fff',
          headerTitleStyle: { fontSize: 26 }
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "My Chats" }} />
        <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
        <Stack.Screen name="Contacts" component={ContactScreen} options={{title : "Contacts"}}/>
        <Stack.Screen name="Contacts" component={ContactScreen} options={{title : "Contacts"}}/>
        <Stack.Screen name="Contacts" component={ContactScreen} options={{title : "Contacts"}}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
