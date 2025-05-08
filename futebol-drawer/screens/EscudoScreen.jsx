import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { time } from '../time';

const EscudoScreen = () => (
  <View style={styles.container}>
    <Image source={{ uri: time.escudo }} style={styles.escudo} />
    <Text variant="titleLarge">{time.nome}</Text>
    <Text>Fundado em: {time.fundacao}</Text>
    <Text>Estádio: {time.estadio}</Text>
    <Text>Mascote: {time.mascote}</Text>
    <Text>Cores: {time.cores.join(' e ')}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20
  },
  escudo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20
  }
});

export default EscudoScreen;