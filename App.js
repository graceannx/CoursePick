import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome 2 My app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9bfd6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 32,

  }
  
});
