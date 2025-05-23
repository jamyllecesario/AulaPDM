import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category-list')
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const renderCategory = ({ item }) => (
    <Card 
      style={styles.card} 
      onPress={() => navigation.navigate('ListaProdutos', { categoria: item })}
    >
      <Card.Content>
        <Title style={styles.title}>{item}</Title>
      </Card.Content>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} size="large" color="#333" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5DC', // Beige background
  },
  card: {
    marginVertical: 5,
    elevation: 3,
    backgroundColor: '#FFF8DC', // Lighter beige for cards
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#333',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC', // Beige background
  },
});