import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import React from "react";
import { Header } from "./itens/header";


export default function App() {
    return (
      <ScrollView style = {{marginTop:30,flex:1}}>
        <Header />
        <Text>
          Olá texto
        </Text>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop:30,
    alignItems:'center'
  },
  header:{
    textAlign: 'center',
  }
});
