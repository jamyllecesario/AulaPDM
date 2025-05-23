import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ListaProdutosScreen from './screens/ListaProdutosScreen';
import ProdutoScreen from'./screens/ProdutoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Categorias' }} />
        <Stack.Screen name="ListaProdutosScreen" component={ListaProdutosScreen} options={{ title: 'Produtos' }} />
        <Stack.Screen name="ProdutoScreen" component={ProdutoScreen} options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
