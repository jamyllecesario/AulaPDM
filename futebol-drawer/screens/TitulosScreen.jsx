import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { titulos } from '../time';

const TitulosScreen = () => (
  <FlatList
    data={titulos}
    keyExtractor={(item) => item.nome}
    renderItem={({ item }) => (
      <Card style={styles.card}>
        <Card.Title title={item.nome} />
        <Card.Content>
          <Text>Anos: {item.anos.join(', ')}</Text>
        </Card.Content>
      </Card>
    )}
  />
);

const styles = StyleSheet.create({
  card: {
    margin: 10
  }
});

export default TitulosScreen;
