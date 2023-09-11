import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';

const Button = styled.Button`
  color: red;
`;

const App = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textstyle}>LOGIN</Text>
      <TextInput
        // value="text"
        style={styles.formstyle}
        placeholder="Email"
        onChangeText={onChangeText}></TextInput>
      <TextInput
        // value="text"
        style={styles.formstyle}
        secureTextEntry={true}
        placeholder="Senha"
        onChangeText={onChangeText}></TextInput>
      <TouchableOpacity style={styles.buttonstyle}>
        <Text style={styles.buttontext}>CONFIRMAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 12,
    padding: 4,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'gray',
    gap: 12,
  },
  textstyle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonstyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 8,
    width: '90%',
  },
  buttontext: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  formstyle: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 4,
    width: '90%',
  },
});

export default App;
