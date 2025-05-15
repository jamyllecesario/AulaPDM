import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerStyle: {
              backgroundColor: '#4CAF50', // Verde
              elevation: 4, // Sombra no Android
              shadowOpacity: 0.3, // Sombra no iOS
            },
            headerTintColor: '#fff', // Cor do texto do header
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Mega Sena') {
                iconName = 'numeric';
              } else if (route.name === 'Jogo do Bicho') {
                iconName = 'paw';
              }

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size + 4}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: '#4CAF50', // Verde
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
