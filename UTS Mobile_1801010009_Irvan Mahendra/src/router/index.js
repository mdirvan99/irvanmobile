import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Login, Register, WellcomeAuth, Main, Booking } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} 
            options={{
                headerShown: false,
            }}/>

            <Stack.Screen name="Login" component={Login} 
            options={{
                headerShown: false,
            }}/>

            <Stack.Screen 
            name="Register" 
            component={Register} 
            options={{
                headerShown: false,
            }}/>

            <Stack.Screen 
                name="WellcomeAuth" 
                component={WellcomeAuth} 
                options={{
                    headerShown: false,
            }}/>
            
            <Stack.Screen name="Main" component={Main} 
            options={{
                headerShown: false,
            }}/>

            <Stack.Screen 
                name="Booking" 
                component={Booking} 
                options={{
                headerShown: false,
            }}/>
            
        </Stack.Navigator>
    )
}

export default Router;