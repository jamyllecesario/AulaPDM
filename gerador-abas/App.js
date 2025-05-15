import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'react-native';
import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';
import { customTheme } from './src/theme';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerStyle: {
              backgroundColor: '#4CAF50', // Verde principal
              elevation: 4, // Sombra no Android
              shadowOpacity: 0.3, // Sombra no iOS
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Jogo do Bicho') {
                return (
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
                    }}
                    style={{
                      width: focused ? 28 : 24,
                      height: focused ? 28 : 24,
                      tintColor: focused ? '#4CAF50' : '#aaa',
                    }}
                  />
                );
              }

              // Ícone para Mega Sena
              return (
                <MaterialCommunityIcons
                  name="numeric"
                  size={focused ? 28 : 24}
                  color={focused ? '#4CAF50' : '#aaa'}
                />
              );
            },
            tabBarActiveTintColor: '#4CAF50',
            tabBarInactiveTintColor: '#aaa',
            tabBarStyle: {
              backgroundColor: '#fff',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              elevation: 10,
              height: 65,
              paddingBottom: 8,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -3 },
              shadowOpacity: 0.1,
              shadowRadius: 5,
            },
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: '600',
            },
          })}
        >
          <Tab.Screen name="Mega Sena" component={MegaSenaScreen} />
          <Tab.Screen name="Jogo do Bicho" component={JogoDoBichoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
