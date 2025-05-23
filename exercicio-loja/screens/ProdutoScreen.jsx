import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { Card, Title, Paragraph, Text, ActivityIndicator } from 'react-native-paper';

export default function ProdutoScreen({ route }) {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(response => {
        setProduto(response.data);
      })
      .catch(error => console.error('Erro ao buscar produto:', error))
      .finally(() => setLoading(false));
  }, [idProduto]);

  if (loading) {
    return <ActivityIndicator animating={true} size="large" style={styles.loading} />;
  }

  if (!produto) {
    return (
      <View style={styles.loading}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <Card.Cover source={{ uri: produto.images[0] }} style={styles.image} />
        <Card.Content>
          <Title>{produto.title}</Title>
          <Paragraph>{produto.description}</Paragraph>
          <Text style={styles.price}>Preço: R$ {produto.price.toFixed(2)}</Text>
          <Text>Marca: {produto.brand}</Text>
          <Text>Categoria: {produto.category}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 12 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { height: 300, resizeMode: 'contain' },
  price: { marginTop: 12, fontSize: 18, fontWeight: 'bold', color: '#1e88e5' },
});
