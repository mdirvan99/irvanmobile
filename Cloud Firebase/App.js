import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/homescreen';
import Login from './components/login';
import Signup from './components/signup';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'lightskyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={
          { title: 'Homescreen' },
          { headerLeft: null }
        }/>
        <Stack.Screen name="Login" component={Login} options={
          { title: 'Login' },
          { headerLeft: null }
        }/>
        <Stack.Screen name="Signup" component={Signup} options={
          { title: 'Signup' },
          { headerLeft: null }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;