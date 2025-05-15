import React, { useState } from 'react';
import { View, FlatList, ImageBackground, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const jogo = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 60) + 1
    ).sort((a, b) => a - b);

    setJogosMegaSena([jogo, ...jogosMegaSena]);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/w1XwWYz.jpg' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Button
          mode="contained"
          onPress={gerarJogo}
          style={styles.botao}
          labelStyle={{ fontSize: 16 }}
        >
          Gerar Jogo
        </Button>

        <FlatList
          data={jogosMegaSena}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <MotiView
              from={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: 'timing', duration: 300 }}
            >
              <Card style={styles.card}>
                <Card.Content>
                  <Text>{item.join(' - ')}</Text>
                </Card.Content>
              </Card>
            </MotiView>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.85)', // leve fundo branco translúcido para contraste
  },
  botao: {
    marginBottom: 16,
    borderRadius: 8,
  },
  card: {
    marginBottom: 12,
    backgroundColor: '#ffffff',
  },
});
