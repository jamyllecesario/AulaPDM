// Imports
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// Componente principal
// Ele deve retornar o que será redenrizado na tel (Template feito com JSX)
export default function App() {
  //Lógica do meu componente
  const nome = "Álvaro"

  function alerta() {
    alert("Você aceitou o jesus da Marvel")
  }

  // Retorno com JSX
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Comentário dentro do template JSX */}
      {/* Código javascript */}
      <Text style={{color: "white", fontStyle: "italic"}}>Projetinho</Text>
      <Text style={{color: "white"}}>{nome}</Text>
      <Text style={{color: "white"}}>{2 + 2}</Text>      
      
      <Button title='Aceite!' onPress={alerta}></Button>

      <Text style={{color: "white"}}>Jesus da Marvel!</Text>

      <Image
        source={{ uri:'https://i.pinimg.com/736x/8c/d6/2e/8cd62e95c4776e920553f0372334d9c0.jpg' }}  
        style={{
          height: 500,
          width: 300,
        }}    
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
