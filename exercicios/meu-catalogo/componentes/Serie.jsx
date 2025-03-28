// componentes/Serie.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Serie({ nome, ano, diretor, temporadas, capa }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: capa }} style={styles.image} />
      <Text style={styles.title}>{nome} ({ano})</Text>
      <Text>Diretor: {diretor}</Text>
      <Text>Temporadas: {temporadas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FFFFC5',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});