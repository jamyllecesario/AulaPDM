import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Escudo"
          screenOptions={{
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#fff',
            drawerActiveTintColor: '#ba0c2f',
            drawerStyle: { backgroundColor: '#f4f4f4' },
          }}
        >
          <Drawer.Screen
            name="Escudo"
            component={EscudoScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="shield" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Jogadores"
            component={JogadoresScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="people" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Títulos"
            component={TitulosScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="trophy" size={size} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}