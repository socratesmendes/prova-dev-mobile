import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === '' && password === '') {
      navigation.navigate('main');
    } else {
      alert('E-mail ou senha inválidos!');
    }
  };

  const handleNavigateToCadastro = () => {
    navigation.navigate('cadastrarUsuario');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.btnEntrar} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btncadastrarUsuario} onPress={handleNavigateToCadastro}>
        <Text style={styles.buttonText}>Cadastrar Usuário</Text>
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
  btnEntrar: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    margin: 5
  },
  btncadastrarUsuario: {
    backgroundColor: '#00A635',
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

export default Login;
