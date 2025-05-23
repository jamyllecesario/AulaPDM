import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Avatar, Card, IconButton, ActivityIndicator, Text } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(res => {
        setCategorias(res.data);
      })
      .catch(() => setErro(true))
      .finally(() => setCarregando(false));
  }, []);

  const getImageByCategory = (category) => {
    const imagens = {
      smartphones: 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
      laptops: 'https://cdn-icons-png.flaticon.com/512/841/841364.png',
      furniture: 'https://cdn-icons-png.flaticon.com/512/2390/2390189.png',
      groceries: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
      'home-decoration': 'https://cdn-icons-png.flaticon.com/512/679/679720.png',
      'kitchen-accessories': 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      'mens-shirts': 'https://cdn-icons-png.flaticon.com/512/892/892458.png',
      'mens-shoes': 'https://cdn-icons-png.flaticon.com/512/944/944728.png',
      'mens-watches': 'https://cdn-icons-png.flaticon.com/512/1148/1148433.png',
      'womens-watches': 'https://cdn-icons-png.flaticon.com/512/1148/1148433.png',
      'womens-bags': 'https://cdn-icons-png.flaticon.com/512/3075/3075858.png',
      'womens-dresses': 'https://cdn-icons-png.flaticon.com/512/892/892458.png',
      'womens-shoes': 'https://cdn-icons-png.flaticon.com/512/899/899631.png',
      'womens-jewellery': 'https://cdn-icons-png.flaticon.com/512/149/149852.png',
      'mobile-accessories': 'https://cdn-icons-png.flaticon.com/512/3021/3021812.png',
      motorcycle: 'https://cdn-icons-png.flaticon.com/512/1483/1483336.png',
      beauty: 'https://cdn-icons-png.flaticon.com/512/3595/3595455.png',
      fragrances: 'https://cdn-icons-png.flaticon.com/512/3075/3075863.png',
      'skin-care': 'https://cdn-icons-png.flaticon.com/512/3075/3075855.png',
      tablets: 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
      sunglasses: 'https://cdn-icons-png.flaticon.com/512/2983/2983974.png',
      'sports-accessories': 'https://cdn-icons-png.flaticon.com/512/2042/2042755.png',
      tops: 'https://cdn-icons-png.flaticon.com/512/892/892458.png',
      vehicle: 'https://cdn-icons-png.flaticon.com/512/633/633759.png',
    };
    return imagens[category] || 'https://cdn-icons-png.flaticon.com/512/2989/2989988.png';
  };

  if (carregando) {
    return <ActivityIndicator animating={true} size="large" style={styles.loading} />;
  }

  if (erro) {
    return (
      <View style={styles.loading}>
        <Text>Erro ao carregar categorias.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card} onPress={() => navigation.navigate('ListaProdutosScreen', { categoria: item })}>
            <Card.Title
              title={item.toUpperCase()}
              left={(props) => <Avatar.Image {...props} size={40} source={{ uri: getImageByCategory(item) }} />}
              right={(props) => <IconButton {...props} icon="chevron-right" />}
            />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { margin: 8 },
});
