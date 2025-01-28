import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TelaLogin from './src/telas/TelaLogin';
import TelaCriarConta from './src/telas/TelaCriarConta';
import TelaHome from './src/telas/TelaHome';
import TelaPerfil from './src/telas/TelaPerfil';
import TelaDados from './src/telas/TelaDados';

const YourApp = () => {
  const Stack = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Acessar conta" component={TelaLogin} />
        <Stack.Screen name="Criar conta" component={TelaCriarConta} />
        <Stack.Screen name="Home"  component={TelaHome} />
        <Stack.Screen name="Perfil"  component={TelaPerfil} />
        <Stack.Screen name="Dados"  component={TelaDados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
};

export default YourApp;