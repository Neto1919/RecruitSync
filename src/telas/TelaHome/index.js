import React, { useState } from 'react';
import AppButtonWhite from '../../componentes/AppButtonWhite';
import styles from '../../../styles';
import { Text, View, Image } from 'react-native';
import AppButton from '../../componentes/AppWhite';

const Home = ({ navigation }) => {
  return (


    <View style={styles.container}>
      <View style={styles.b1}>

        <View>
          <Image
            source={require('../../../assets/imagens/rsy.png')}
            style={{ height: 50, width: 70, marginLeft: 5, marginTop: -200, margin: 30 }}
          />
        </View>

        <View>
          <Text style={{ color: 'white', marginTop: -190, marginLeft: 70, fontSize: 20, fontWeight: 'bold' }}>RecruitSync</Text>
        </View>

        <AppButton
          title="Perfil"
          style={{
            color: 'white', marginLeft: 380, marginHorizontal: 10, marginTop: -190, fontWeight: 'bold',
            borderWidth: 2, borderColor: 'white', borderRadius: 10, padding: 2
          }}
          onPress={() => navigation.navigate("Perfil")} />

        <View style={{ backgroundColor: '#4A5C6A', width: 450, height: 550, marginHorizontal: 25, borderRadius: 10 }}>

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

          <AppButtonWhite title="Inscreva-se" style={{ marginHorizontal: 20, marginLeft: 10 }} onPress={() => navigation.navigate("Dados")} />

        </View>

      </View>
    </View>
  );
};

export default Home; 
