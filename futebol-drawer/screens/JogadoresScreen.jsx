import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { jogadores } from '../time';

const JogadoresScreen = () => (
  <FlatList
    data={jogadores}
    keyExtractor={(item) => item.nome}
    renderItem={({ item }) => (
      <Card style={styles.card}>
        <View style={styles.row}>
          <Image source={{ uri: item.imagem }} style={styles.imagem} />
          <View style={styles.info}>
            <Text variant="titleMedium">{item.nome}</Text>
            <Text>Posição: {item.posicao}</Text>
            <Text>Idade: {item.idade}</Text>
            <Text>Número: {item.numero}</Text>
          </View>
        </View>
      </Card>
    )}
  />
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10
  },
  row: {
    flexDirection: 'row'
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15
  },
  info: {
    justifyContent: 'center'
  }
});

export default JogadoresScreen;
