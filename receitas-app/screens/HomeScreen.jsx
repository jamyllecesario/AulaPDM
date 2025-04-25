import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';

const receitas = [
  {
    id: 1,
    nome: "Feijoada",
    tempoPreparo: "2 horas",
    porcoes: 8,
    imagem: 'https://i.pinimg.com/236x/81/c5/cc/81c5cca10c44eb65f1251da5ea8825f4.jpg',
    ingredientes: [
      "1kg de feijão preto", "500g de carne seca", "300g de linguiça",
      "200g de costelinha", "2 laranjas", "Couve a gosto", "Arroz para acompanhar"
    ],
    modoPreparo: [
      "1. Deixe o feijão de molho por 12 horas", "2. Cozinhe o feijão na pressão",
      "3. Adicione as carnes", "4. Cozinhe até ficar macio",
      "5. Sirva com arroz, couve e laranja"
    ]
  },
  {
    id: 2,
    nome: "Strogonoff de Carne",
    tempoPreparo: "45 minutos",
    porcoes: 6,
    imagem: 'https://i.pinimg.com/236x/32/33/e6/3233e61c8fd87b33753156e6adf5a665.jpg',
    ingredientes: [
      "1kg de carne (alcatra ou contrafilé)", "1 cebola picada", "2 colheres de ketchup",
      "2 colheres de mostarda", "1 lata de creme de leite", "1 lata de champignon",
      "Sal, pimenta e alho a gosto", "Batata palha"
    ],
    modoPreparo: [
      "1. Tempere e doure a carne", "2. Adicione molhos e champignon",
      "3. Misture e cozinhe", "4. Acrescente o creme de leite", "5. Sirva com arroz"
    ]
  },
  {
    id: 3,
    nome: "Macarrão à Bolonhesa",
    tempoPreparo: "30 minutos",
    porcoes: 4,
    imagem: 'https://i.pinimg.com/236x/5e/f8/08/5ef8089b58a3e1683261dc1672378964.jpg',
    ingredientes: [
      "500g de macarrão", "300g de carne moída", "1 lata de molho de tomate",
      "1 cebola picada", "Alho, sal e pimenta a gosto", "Queijo ralado"
    ],
    modoPreparo: [
      "1. Cozinhe o macarrão", "2. Refogue carne com cebola e alho",
      "3. Adicione molho e temperos", "4. Misture ao macarrão", "5. Polvilhe queijo"
    ]
  },
  {
    id: 4,
    nome: "Fricassê de Frango",
    tempoPreparo: "50 minutos",
    porcoes: 6,
    imagem: 'https://i.pinimg.com/736x/b7/b7/85/b7b785137aada0bc533c9cea1c472ee2.jpg',
    ingredientes: [
      "500g de frango desfiado", "1 lata de milho", "1 caixa de creme de leite",
      "1 copo de requeijão", "100g de queijo ralado", "Batata palha"
    ],
    modoPreparo: [
      "1. Bata milho, creme de leite e requeijão", "2. Misture ao frango desfiado",
      "3. Coloque em um refratário", "4. Cubra com queijo ralado",
      "5. Leve ao forno e depois adicione batata palha"
    ]
  }
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={receitas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes da Receita', { receita: item })}>
            <Card style={styles.card}>
              <Card.Cover source={{ uri: item.imagem }} />
              <Card.Content>
                <Title style={styles.title}>{item.nome}</Title>
                <Paragraph style={styles.paragraph}>Tempo: {item.tempoPreparo} | Porções: {item.porcoes}</Paragraph>
              </Card.Content>
              <Card.Actions style={styles.actions}>
                <IconButton icon="food" size={24} style={styles.icon} />
                <IconButton icon="clock" size={24} style={styles.icon} />
              </Card.Actions>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: '#003366',
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  actions: {
    justifyContent: 'flex-end',
    backgroundColor: '#fafafa',
  },
  icon: {
    marginHorizontal: 10,
  },
});
