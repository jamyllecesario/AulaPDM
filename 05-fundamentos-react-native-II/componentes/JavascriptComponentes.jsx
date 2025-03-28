
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavascriptComponentes () {
 // Logica do componente
const nome= "jamylle"
const idade= 21

function checarMaiorIdade(){
    if (idade>= 21) {
        return "Maior de Idade"
    }else {
        
        return "Menor de Idade"
    }
}

function alert(){
    console.log("clicou no botão!!!")
    alert('clicou no botão')

}
}

// retorno do jsx
    return (
      <View style={styles.container} >
        <Text style= {styles.texto}> Javascript Componentes</Text>
        <Text style= {styles.texto}>NOME: {nome}</Text>
        <Text style= {styles.texto}> IDADE: {idade}</Text>
        <Text style= {styles.texto}> IDADE+40: {idade + 40}</Text>
        <Text style= {styles.texto}> 18+: {checarMaiorIdade}</Text>

        <button title='enviar' onpress={alert}/>
      </View>
    )
