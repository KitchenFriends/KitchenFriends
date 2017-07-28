import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Start from './src/components/Start'
export default class App extends React.Component {
  render() {
    return (
      <Start/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
