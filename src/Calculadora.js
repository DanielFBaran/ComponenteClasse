import React,{useState} from 'react'
import {Text, View, TextInput, Button, StyleSheet, Alert} from 'react-native'
import { render } from 'react-dom'

export default class Calculadora extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        numero1:props.valor1,
        numero2:props.valor2,
        resultado:props.result
        }
    }

    alterarValor1(num){
        this.setState({numero1:num})
    }
    alterarValor2(num){
        this.setState({numero2:num})
    }

    somarNumero (valor1, valor2){
        let val1 = parseFloat(valor1);
        let val2 = parseFloat(valor2);
        let result = val1 + val2;
        this.setState({resultado:result})
        Alert.alert("Resultado: " + result)
    }

    subtrairNumero (valor1, valor2){
        let val1 = parseFloat(valor1);
        let val2 = parseFloat(valor2);
        let result = val1 - val2;
        this.setState({resultado:result})
        Alert.alert("Resultado: " + result)
    }

    multiplicarNumero (valor1, valor2){
        let val1 = parseFloat(valor1);
        let val2 = parseFloat(valor2);
        let result = val1 * val2;
        this.setState({resultado:result})
        Alert.alert("Resultado: " + result)
    }

    dividirNumero (valor1, valor2){
        let val1 = parseFloat(valor1);
        let val2 = parseFloat(valor2);
        if (val2 === 0){
            Alert.alert("Dividendo nulo!")
        }
        else{
            let result = val1 / val2;
            this.setState({resultado:result})
            Alert.alert("Resultado: " + result)
        }
    }
render(){
    return (
        <View>
            <Text style={styles.text}> Informe os seguintes dados:</Text>
            <TextInput
                placeholder="Digite o primeiro numero"
                value={this.state.numero1}
                onChangeText={(valor1) => this.alterarValor1(valor1)}
            />
            <TextInput
                placeholder="Digite o segundo numero"
                value={this.state.numero2}
                onChangeText={(valor2) => this.alterarValor2(valor2)}
            />
            <Button title="Somar" onPress={() => this.somarNumero(this.state.numero1, this.state.numero2)} />
            <Button title="Subtrair" onPress={() => this.subtrairNumero(this.state.numero1, this.state.numero2)}/>
            <Button title="Multiplicar" onPress={() => this.multiplicarNumero(this.state.numero1, this.state.numero2)}/>
            <Button title="Dividir" onPress={() => this.dividirNumero(this.state.numero1, this.state.numero2)}/>
        </View>
    );
}
}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        color:'blue',
        fontWeight:'bold'
    }
})