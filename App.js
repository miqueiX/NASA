import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Inicial from './screens/inicial';
import Meteoros from './screens/meteoros';
import Rastreador from './screens/rastreador';

const Stack = createStackNavigator() 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="inicial" component={Inicial}/>
        <Stack.Screen name="meteoros" component={Meteoros}/>
        <Stack.Screen name="Rastreador EEI" component={Rastreador}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

