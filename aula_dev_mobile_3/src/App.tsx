import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';
import Login from './modules/login';

const App = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Login></Login>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 4,
    backgroundColor: 'lightgray',
  },
});

export default App;
