import React from 'react';
import { ScrollView, Text, Image, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: receita.imagem }} style={styles.image} />
      <Text style={styles.title}>{receita.nome}</Text>
      <Text style={styles.details}>Tempo de Preparo: {receita.tempoPreparo}</Text>
      <Text style={styles.details}>Porções: {receita.porcoes}</Text>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Ingredientes</Text>
        {receita.ingredientes.map((ingrediente, index) => (
          <Text key={index} style={styles.text}>{ingrediente}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Modo de Preparo</Text>
        {receita.modoPreparo.map((passo, index) => (
          <Text key={index} style={styles.text}>{passo}</Text>
        ))}
      </View>

      <IconButton
        icon="chevron-left"
        size={30}
        color="#003366"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    color: '#003366',
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    color: '#555',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 22,
    fontFamily: 'Roboto-Bold',
    color: '#003366',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: '#444',
    marginBottom: 8,
  },
  section: {
    marginBottom: 20,
  },
  backButton: {
    marginTop: 30,
    alignSelf: 'flex-start',
  },
});
