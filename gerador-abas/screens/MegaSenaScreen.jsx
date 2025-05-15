import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

const gerarDezenas = () => {
  const dezenas = new Set();
  while (dezenas.size < 6) {
    dezenas.add(Math.floor(Math.random() * 60) + 1);
  }
  return Array.from(dezenas).sort((a, b) => a - b);
};

export default function MegaSenaScreen() {
  const [jogos, setJogos] = useState([]);

  const gerarJogo = () => {
    const novoJogo = gerarDezenas();
    setJogos([novoJogo, ...jogos]);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button mode="contained" onPress={gerarJogo} style={{ marginBottom: 16 }}>
        Gerar Jogo da Mega-Sena
      </Button>
      <FlatList
        data={jogos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card style={{ marginBottom: 8 }}>
            <Card.Content>
              <Text>Jogo #{jogos.length - index}</Text>
              <Text>{item.join(' - ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}
