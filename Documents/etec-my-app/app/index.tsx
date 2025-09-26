import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home(){
    const [name, setName] = useState('');
    const [idade, setIdade] = useState('');
    let [peso, setPeso] = useState(parseFloat(''))
    let [altura, setAltura] = useState(parseFloat(''))
    let imc = peso / (altura*altura)

    return(
        <View style={styles.body}>
            <TextInput 
            placeholder="Digite seu nome"
            onChangeText={setName}
            />
            <TextInput
            placeholder="Digite sua idade"
            onChangeText={setIdade}
            />
            <TextInput
            placeholder="Digite seu peso"
            onChangeText={setPeso}
            />
            <TextInput
            placeholder="Digite sua altura"
            onChangeText={setAltura}
            />
            <Text style={styles.title}>
                Olá, meu nome é {name},
                minha idade é {idade},
                meu peso é {peso},
                minha altura é {altura},
                o imc é {imc}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "green",
        padding: "auto"
    },
    title: {
        fontSize: 19
    }
});