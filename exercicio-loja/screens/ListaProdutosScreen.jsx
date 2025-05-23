import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, ActivityIndicator } from 'react-native-paper';

export default function ListaProdutosScreen({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(response => {
        setProdutos(response.data.products);
      })
      .catch(error => console.error(error))
      .finally(() => setCarregando(false));
  }, [categoria]);

  if (carregando) {
    return <ActivityIndicator animating={true} size="large" style={styles.loading} />;
  }

  return (
    <FlatList
      style={{ paddingBottom: 45 }}
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={styles.card} onPress={() => navigation.navigate('ProdutoScreen', { idProduto: item.id })}>
          <Card.Cover source={{ uri: item.thumbnail }} style={{ height: 200 }} />
          <Card.Content>
            <Title>{item.title}</Title>
            <Paragraph numberOfLines={2}>{item.description}</Paragraph>
          </Card.Content>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { margin: 10 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
