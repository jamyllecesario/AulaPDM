import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Filme from './componentes/Filme';
import Serie from './componentes/Serie';

const listaFilmes= [
  {
    nome: "Toy Story",
    ano: 1995,
    diretor: "John Lasseter",
    tipo: "Animação",
    capa: "https://i.pinimg.com/236x/c5/be/f9/c5bef9f08e43358675a5bcc40b52c25d.jpg"
  },
  {
    nome: "O Rei Leão",
    ano: 1994,
    diretor: "Roger Allers, Rob Minkoff",
    tipo: "Animação",
    capa: "https://i.pinimg.com/474x/3d/9b/84/3d9b844b8ac3ba0483cb2f20390ca194.jpg"
  },
  {
    nome: "Procurando Nemo",
    ano: 2003,
    diretor: "Andrew Stanton",
    tipo: "Animação",
    capa: "https://i.pinimg.com/236x/5e/58/76/5e58765b8ef3a69a69d7060d5d6503b0.jpg"
  },
  {
    nome: "Frozen",
    ano: 2013,
    diretor: "Chris Buck, Jennifer Lee",
    tipo: "Animação",
    capa: "https://i.pinimg.com/474x/83/8a/68/838a6884dcfedce14deaf6f1c1d0d5ed.jpg"
  }
];

const listaSeries = [
  {
    nome: "Patrulha Canina",
    ano: 2013,
    diretor: "Keith Chapman",
    temporadas: 10,
    capa: "https://i.pinimg.com/236x/4b/12/af/4b12af3dd96d9534621ee9479208b29f.jpg"
  },
  {
    nome: "Peppa Pig",
    ano: 2004,
    diretor: "Neville Astley, Mark Baker",
    temporadas: 8,
    capa: "https://i.pinimg.com/474x/e5/95/19/e59519799268dc3168f861cfd37c7c99.jpg"
  },
  {
    nome: "Galinha Pintadinha",
    ano: 2006,
    diretor: "Juliano Prado, Marcos Luporini",
    temporadas: 4,
    capa: "https://i.pinimg.com/236x/a8/52/04/a852042074f5c730d807ab335d5200d6.jpg"
  },
  {
    nome: "Masha e o Urso",
    ano: 2009,
    diretor: "Oleg Kuzovkov",
    temporadas: 5,
    capa: "https://i.pinimg.com/236x/34/92/dc/3492dcec45ff070d1d5dc6002dd4b815.jpg"
  }
];


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Filmes</Text>
      {listaFilmes.map((filme, index) => (
        <Filme key={index} {...filme} />
      ))}

      <Text style={styles.header}>Séries</Text>
      {listaSeries.map((serie, index) => (
        <Serie key={index} {...serie} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: 'orange'
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',
  },
});