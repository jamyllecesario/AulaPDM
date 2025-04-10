import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const EscudoScreen = () => {
  const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Image source={{ uri: time.escudo }} style={styles.escudo} />
          <Text style={styles.nome}>{time.nome}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    padding: 20,
    borderRadius: 20,
    elevation: 4,
  },
  content: {
    alignItems: 'center',
  },
  escudo: {
    width: 150,
    height: 150,
    borderRadius: 75, // 🔥 Isso faz a imagem ficar redonda
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default EscudoScreen;