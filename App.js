import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Dashboard from './screens/Dashboard';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;