import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';
import Login from './pages/login';
import Details from './pages/details';
import CadastrarUsuario from './pages/cadastrarUsuario';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              title: 'LOGIN',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#3498db',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#fff',
              },
            }}
          />
        <Stack.Screen
          name="main"
          component={Main}
          options={{
            title: 'Ricky and Morty Cards',
            headerTitleAlign: 'center',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="cadastrarUsuario"
          component={CadastrarUsuario}
          options={{
            title: 'Cadastrar Usuário',
            headerTitleAlign: 'center',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{
            title: 'Detalhes do personagem',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
