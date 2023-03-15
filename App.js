import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView,bu, Button} from "react-native";
import stylesExterno from "./styles";
import React from "react";
import { Header } from "./itens/header";

export default class App extends React.Component {
  constructor(props) {
    //conveção para criar uma variavel que consegue acessar na classe inteira
    super(props);
    this.mostrarTexto = true;
    this.mostrarBotao = false;
  }
  render() {
    return (
      <ScrollView>
        <View style={stylesExterno.container}>
          {this.mostrarTexto ? <Text>Sou verdadeira</Text> : <View></View>}
          {this.mostrarBotao ? 
            <Button title='Sou um botão verdadeiro' color={'green'}>
             
            </Button>
           : 
           <Button title='Sou um botão falso' color={'red'}>
             
           </Button>
          }
        </View>
      </ScrollView>
    );
  }
}
