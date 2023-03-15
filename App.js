import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import stylesExterno from "./styles";
import React from "react";
import { Header } from "./itens/header";

export default function App() {
  return (
    <ScrollView>
      <View style={stylesExterno.container}>
        <Header />
        <View style={stylesExterno.red}></View>
      </View>
    </ScrollView>
  );
}

