import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Details = ({ route }) => {
  const { character } = route.params;

  const navigation = useNavigation();

  const handleVoltar = () => {
    navigation.navigate('main');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: character.image }} 
        style={{ width: 200, height: 200, borderRadius: 5, marginBottom: 10 }} 
      />
      <Text style={styles.text}>Nome: {character.name}</Text>
      <Text style={styles.text}>Status: {character.status}</Text>
      <Text style={styles.text}>Espécie: {character.species}</Text>
      <Text style={styles.text}>Gênero: {character.gender}</Text>
      <Text style={styles.text}>Localização: {character.location.name}</Text>
      <Text style={styles.text}>Origem: {character.origin.name}</Text>

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
    backgroundColor: '#FFF',
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  btnVoltar: {
    backgroundColor: '#DAA520',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    margin: 5
  }
});

export default Details;