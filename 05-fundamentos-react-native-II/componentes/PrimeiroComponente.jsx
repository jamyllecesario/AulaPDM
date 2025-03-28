import { backgrundColor} from 'expo-status-bar'
import  { StyleSheet,padding  } from 'react'
import { Text, View } from 'react-native'

export default function PrimeiroComponente (){
  
    return (
      <View style={StyleSheet.containerVermelho}>
        <Text> sim, sou maravilhosa  </Text>
      </View>
    )
  
}

const style = StyleSheet.create({
    containerVermelho: {
   backgrundColor: 'red',
   padding: 20,
   borderwidth:10,

    },
    textoGrande: {
        fontSize: 20,
        fontWeight: 600
    }
})
