import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';

// função principal do componentes e libs
export default function App() {
  // logica do meu componente 
  const nome = "mylle"

function alerta () {
  alert("SUCESSO AREA GOSPEL")
}



// retorno e um codigo JSX (template)
// renderizado na tela
  return (
 <ScrollView>

    <View style={styles.container}>
    <StatusBar style="auto" />

            <Text style={{fontSize:50}}>Valesca Mayssa</Text>
            <Text style={{fontSize:25}}>Cantora </Text>

            
            <Text style={styles.textogrande}>Valesca Mayssa </Text>
      <Text style={styles.textogrande}>Cantora gospel brasileira</Text>
      <Text style={styles.textogrande}> Nascida em 24 de novembro de 1997</Text>
      <Text style={styles.textogrande}> "Árvore Cortada", "Eis-me Aqui" </Text>
      
  

      <Image
      source={{
        uri: 'https://i.pinimg.com/236x/51/e9/6a/51e96a77c98ca633720d03bcd030bf17.jpg'
      }}
      style={{
        height: 350,
        width: 200,
        paddingTop: 10,
        marginVertical: 10,
        borderRadius: 10,
      }}
      />
      <Image
      source={{
        uri: 'https://i.pinimg.com/474x/03/c9/70/03c970780dfd79f1f53ee424767e7245.jpg'
      }}
      style={{
        height: 350,
        width: 200,
        paddingTop: 10,
        marginVertical: 10,
        borderRadius: 10,
      }}
      />
      <Image
      source={{
        uri: 'https://i.pinimg.com/236x/1a/82/df/1a82dfa67fdda94bb9d8d5daa6edd2e5.jpg'
      }}
      style={{
        height: 350,
        width: 200,
        paddingTop: 10,
        marginVertical: 10,
        borderRadius: 10,
      }}
      />
       <Image
      source={{
        uri: 'https://i.pinimg.com/236x/3b/8d/e9/3b8de9657cc1abd5dc51bbcfd18aa1d1.jpg'
      }}
      style={{
        height: 350,
        width: 200,
        paddingTop: 10,
        marginVertical: 10,
        borderRadius: 10,
      }}
      />
      <Image
      source={{
        uri: 'https://i.pinimg.com/236x/8e/92/9e/8e929ea92023f804cd7824e21b698956.jpg'
      }}
      style={{
        height: 350,
        width: 200,
        paddingTop: 10,
        marginVertical: 10,
        borderRadius: 10,
      }}
      />
<View style={styles.buttonContainer}>
     
<Button title='Valesca Mayssa' onPress={alerta}></Button>
</View>

    </View>
   </ScrollView>

  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 55,
  },
  textogrande:{
    fontSize: 20,
    fontWeight: 20,
    fontStyle:'italic',
    backgroundColor: "#8B4513",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  }, 
  buttonContainer: {
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#8B4513",
  },
});