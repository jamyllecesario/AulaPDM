import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, ActivityIndicator, Subheading, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { idProduto } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [idProduto]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} size="large" color="#333" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Title style={styles.errorTitle}>Produto não encontrado</Title>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: product.thumbnail }} />
        <Card.Content>
          <Title style={styles.title}>{product.title}</Title>
          <Subheading style={styles.price}>{`R$ ${product.price.toFixed(2)}`}</Subheading>
          <Paragraph style={styles.description}>{product.description}</Paragraph>
          <Paragraph style={styles.info}>{`Marca: ${product.brand}`}</Paragraph>
          <Paragraph style={styles.info}>{`Categoria: ${product.category}`}</Paragraph>
          <Paragraph style={styles.info}>{`Avaliação: ${product.rating}/5`}</Paragraph>
          <Paragraph style={styles.info}>{`Estoque: ${product.stock} unidades`}</Paragraph>
          <Button
            mode="contained"
            style={styles.buyButton}
            onPress={() => alert('Funcionalidade de compra não implementada')}
            icon={() => <Icon name="shopping-cart" size={20} color="#FFF" />}
          >
            Comprar
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5DC', // Beige background
  },
  card: {
    elevation: 3,
    backgroundColor: '#FFF8DC', // Lighter beige for cards
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333',
  },
  price: {
    color: '#333',
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
    color: '#333',
  },
  info: {
    color: '#333',
    marginBottom: 5,
  },
  buyButton: {
    marginTop: 15,
    backgroundColor: '#8B7D6B', // Darker beige tone for button
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC', // Beige background
  },
  errorTitle: {
    color: '#333',
  },
});