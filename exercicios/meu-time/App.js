import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, ScrollView, Alert, Dimensions, } from "react-native";

const { width } = Dimensions.get("window");

export default function App() {
  const handleGoal = () => {
    Alert.alert("Gol do Flamengo!");
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Flamengo</Text>
        <Text style={styles.info}>Fundação: 15 de novembro de 1895</Text>
        <Text style={styles.info}>Estádio: Maracanã</Text>
        <Text style={styles.info}>Títulos Brasileiros: 8</Text>
        <Text style={styles.info}>Libertadores: 3</Text>
        <Text style={styles.info}>O Flamengo é um dos maiores clubes do Brasil, conhecido por sua torcida apaixonada e conquistas históricas.</Text>

      <Image
        source={{ uri: "https://i.pinimg.com/736x/cb/2a/c0/cb2ac08ef69aa7ecacc2735d53e8cb66.jpg" }}
        style={styles.image}
      />
      <Image
        source={{ uri: "https://i.pinimg.com/736x/82/cd/4e/82cd4e1d92cfdd105b5b49586c057381.jpg" }}
        style={styles.image}
      />
      <Image
        source={{ uri: "https://i.pinimg.com/736x/a3/ac/48/a3ac48dc797daa986d3b4be812d077d0.jpg" }}
        style={styles.image}
      />
      <Image
        source={{ uri: "https://i.pinimg.com/736x/0e/7e/f4/0e7ef452ec80f4f8772a7c8d94c149f5.jpg" }}
        style={styles.image}
      />
      <Image
        source={{ uri: "https://i.pinimg.com/736x/b0/d9/a8/b0d9a803b9f95e134bfc8da030a5fcf5.jpg" }}
        style={styles.image}
      />

      <Button title="GOL" onPress={handleGoal} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    fontFamily: "Poppins",
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
    fontFamily: "Poppins",
  },
  image: {
    width: width * 0.9,
    height: width * 1.5,
    marginVertical: 10,
    borderRadius: 15,
  },
});
