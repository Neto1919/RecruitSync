import React, { useState, useEffect } from 'react';
import AppButtonWhite from '../../componentes/AppButtonWhite';
import styles from '../../../styles';
import { Text, View, Image } from 'react-native';
import AppPerfil from '../../componentes/AppPerfil';



const Home = ({ navigation, route }) => {
  const { isRegistered } = route.params || {}; // Obtém o parâmetro isRegistered

  return (

    <View>
      <Image
        source={require('../../../assets/imagens/home.png')}
        style={{ height: '100%', width: '100%' }}
      />

      <View style={styles.container}>
        <View style={styles.b1}>

          <View style={{ backgroundColor: 'transparent', height: 70, marginTop: -1170, marginVertical: 350, zIndex: 1 }}>
            <Image
              source={require('../../../assets/imagens/rsy.png')}
              style={{ height: 50, width: 70, marginLeft: 5, margin: 30, marginTop: 15 }}
            />

            <Text style={{ color: 'white', marginHorizontal: 300, marginLeft: 70, marginTop: -65, fontSize: 20, fontWeight: 'bold' }}>RecruitSync</Text>

            <AppPerfil title="Perfil" style={{ marginHorizontal: 20, marginLeft: 350, marginTop: -35 }} onPress={() => navigation.navigate("Perfil")} />
          </View>

          <View style={{ backgroundColor: '#4A5C6A', width: 450, height: 550, marginHorizontal: 25, borderRadius: 10, marginTop: -230, zIndex: 0 }}>

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
              {isRegistered ? (
                <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', marginTop: 20, fontWeight: 'bold' }}>Você se inscreveu com sucesso!</Text>
              ) : (
                <AppButtonWhite title="Inscrever-se" style={{ marginHorizontal: 20, marginLeft: 10 }} onPress={() => navigation.navigate("Dados")} />
              )}
            </View>

          </View>

        </View>
      </View>
    </View>
  );
};

export default Home; 
