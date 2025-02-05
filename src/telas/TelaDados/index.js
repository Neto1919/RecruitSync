import React, { useState } from 'react';
import AppButtonWhite from '../../componentes/AppButtonWhite';
import styles from '../../../styles';
import { Text, View, Image, TextInput, Linking } from 'react-native';
import AppWhite from '../../componentes/AppWhite';

const Dados = ({ navigation }) => {

  const [link, setLink] = useState('');

  const handleLinkPress = () => {
    if (link) {
      Linking.openURL(link);
    }
  };

  return (

    <View>
      <Image
        source={require('../../../assets/imagens/home.png')}
        style={{ height: '100%', width: '100%' }}
      />

      <View style={styles.container}>
        <View style={styles.b1}>
          <View style={{ backgroundColor: '#4A5C6A', width: 450, height: 800, marginHorizontal: 25, borderRadius: 10, marginTop: -950 }}>

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

            <View style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10, height: 30 }}>
              <Text style={{ fontWeight: 'bold' }}>Instituição:</Text>
              <Text style={{ marginLeft: 75, marginTop: -20 }}>IFPB Campus Esperança</Text>
            </View>

            <View style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Vagas:</Text>
              <Text style={{ marginLeft: 50, marginTop: -18 }}>2 vagas</Text>
            </View>

            <View style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10, marginTop: 10, height: 60 }}>
              <Text style={{ fontWeight: 'bold' }}>Criterios:</Text>
              <Text style={{ marginLeft: 65, marginTop: -18 }}>Trabalho em equipe</Text>
            </View>

            <View style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10, marginTop: 10, height: 40 }}>
              <Text style={{ fontWeight: 'bold' }}>Prova de conhecimeto:</Text>
              <Text style={{ marginLeft: 155, marginTop: -18 }}>https://docs.google.com/teste</Text>
            </View>

            <View style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10, marginTop: 10, height: 70 }}>
              <Text style={{ fontWeight: 'bold' }}>Dinâmica de grupo:</Text>
              <Text style={{ marginLeft: 10, marginTop: 2 }}>Estimular o trabalho em equipe e as relações profissionais</Text>
              <Text style={{ marginLeft: 10, marginTop: 1 }}>Encontrar soluções para desafios</Text>
            </View>

            <View style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10, marginTop: 10, height: 70 }}>
              <Text style={{ fontWeight: 'bold' }}>Entrevista de seleção:</Text>
              <Text style={{ marginLeft: 10, marginTop: 2 }}>As entrevista serão realizada entre o dia 19/04 e o dia 20/04</Text>
            </View>

            <View>
              <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 20 }}>Seus Dados</Text>
            </View>

            <TextInput
              style={{ backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10 }}
              placeholder='Adicione um link do seu curiculo lattes'
              placeholderTextColor={'#c1c1c1'}
              value={link}
              onChangeText={setLink}
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