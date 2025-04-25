import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';  
import ReceitaScreen from './screens/ReceitaScreen';  

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RECEITAS">
          <Stack.Screen name="RECEITAS" component={HomeScreen} />
          <Stack.Screen name="Detalhes da Receita" component={ReceitaScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
