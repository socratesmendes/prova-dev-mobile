import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../services/api';

const Main = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);

  const navigation = useNavigation();

  const searchCharacters = async () => {
    try {
      const response = await api.get(`/?name=${searchQuery}`);
      setCards(response.data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const renderCardItem = ({ item }) => (
    <View style={styles.container}>

      <Image 
        source={{ uri: item.image }} 
        style={{ width: 100, height: 100, borderRadius: 5, marginRight: 10 }} 
      />

      <View>
        <Text>{item.name}</Text>
        <Text>Status: {item.status}</Text>
        <Text>Última localização: {item.location.name}</Text>
        <Text>Primeiro episódio: {item.episode[0]}</Text>
      </View>

      <TouchableOpacity onPress={() => deleteCard(item.id)} style={styles.btnExcluir}>
        <Text style={styles.btnText}>Excluir</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToDetails(item)} style={styles.btnDetalhes}>
        <Text style={styles.btnText}>Ver Mais Detalhes</Text>
      </TouchableOpacity>

    </View>
  );

  const deleteCard = (id) => {
    const updatedCards = cards.filter(card => card.id !== id);
    setCards(updatedCards);
  };

  const navigateToDetails = (item) => {
    navigation.navigate('details', { character: item });
    console.log('Detalhes do personagem:', item);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Nome do Personagem"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="ADD" onPress={searchCharacters} />
      <FlatList
        data={cards}
        renderItem={renderCardItem}
        keyExtractor={item => item.id.toString()}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B2B2B2',
    margin: 5
  },
  btnExcluir: {
    backgroundColor: '#A93226',
    borderRadius: 5,
    padding: 10,
    width: '50%',
    alignItems: 'center',
    margin: 5
  },
  btnDetalhes: {
      backgroundColor: '#DAA520',
      borderRadius: 5,
      padding: 10,
      width: '50%',
      alignItems: 'center',
      margin: 5
    },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default Main;