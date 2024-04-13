import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CadastrarUsuario = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');
  
  const navigation = useNavigation();

  const handleSalvar = () => {

    alert(`
      Usuário cadastrado com sucesso!\n\n
      Nome: ${nome}
      Telefone: ${telefone}
      CPF: ${cpf}
      E-mail: ${email}
      Curso: ${curso}
    `);

    setNome('');
    setTelefone('');
    setCpf('');
    setEmail('');
    setCurso('');
  };

  const handleVoltar = () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Curso"
        value={curso}
        onChangeText={setCurso}
      />
      <TouchableOpacity style={styles.btnSalvar} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnVoltar} onPress={handleVoltar}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      width: '80%',
    },
    btnSalvar: {
      backgroundColor: '#00A635',
      borderRadius: 5,
      padding: 10,
      width: '80%',
      alignItems: 'center',
      margin: 5
    },
    btnVoltar: {
        backgroundColor: '#DAA520',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        margin: 5
      },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    },
  });

export default CadastrarUsuario;
