import React, { useState } from 'react';
import AppButtonWhite from '../../componentes/AppButtonWhite';
import styles from '../../../styles';
import { Text, View, Image, TextInput } from 'react-native';
import AppWhite from '../../componentes/AppWhite';

const Dados = ({ navigation }) => {
  return (

    <View>
      <Image
        source={require('../../../assets/imagens/home.png')}
        style={{ height: '100%', width: '100%' }}
      />

      <View style={styles.container}>
        <View style={styles.b1}>
          <View style={{ backgroundColor: '#4A5C6A', width: 450, height: 750, marginHorizontal: 25, borderRadius: 10, marginTop: -950 }}>

            <View>
              <Image
                source={require('../../../assets/imagens/ifg.png')}
                style={{ height: 100, width: 130, marginLeft: 155, marginTop: 30, margin: 30 }}
              />
            </View>

            <View style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Projeto:</Text>
              <Text style={{ marginLeft: 55, marginTop: -18 }}>IF-GECOMP</Text>
            </View>

            <View style={{ backgroundColor: 'white', marginHorizontal: 250, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Vagas:</Text>
              <Text style={{ marginLeft: 50, marginTop: -18 }}>2 vagas</Text>
            </View>

            <View style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 240, borderRadius: 10, marginTop: -40 }}>
              <Text style={{ fontWeight: 'bold' }}>Etapas:</Text>
              <Text style={{ marginLeft: 55, marginTop: -18 }}>3</Text>
            </View>

            <View style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10, height: 70 }}>
              <Text style={{ fontWeight: 'bold' }}>Criterios:</Text>
              <Text style={{ marginLeft: 60, marginTop: -20 }}>Trabalhor em equipe</Text>
            </View>

            <View style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10, height: 80 }}>
              <Text style={{ fontWeight: 'bold' }}>Descrição:</Text>
            </View>

            <View>
              <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 20 }}>Seus Dados</Text>
            </View>

            <TextInput
              style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10 }}
              placeholder='Nome'
              placeholderTextColor={'#c1c1c1'}
            />

            <TextInput
              style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10 }}
              placeholder='Email'
              placeholderTextColor={'#c1c1c1'}
            />

            <TextInput
              style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10 }}
              placeholder='Contato'
              placeholderTextColor={'#c1c1c1'}
            />

            <AppButtonWhite
              title="Inscrever-se"
              style={{ margin: 10 }}
              onPress={() => navigation.navigate('Home', { isRegistered: true })}
            />

          </View>
        </View>
      </View>
    </View>
  );
};

export default Dados;