import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// função priincipal do componente e libs 
export default function App() {
  // lógica do meu componente
  




  // retorno é um código JSX (Template) do que vai ser redenrizado na tela
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text> Meu Texto</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
