import React, { useState } from 'react';
import {Checkbox} from 'react-native-ui-lib';
import AppButton from '../../componentes/AppButton';
import styles from '../../../styles';
import { Text, View, TextInput} from 'react-native';
import AppLink from '../../componentes/AppLink';

const Home = ({ navigation }) => {
  return (


    <View style={styles.container}>
      <View style={styles.b1}>
        <View style={{backgroundColor: 'red', width: 500, height: 500}}>

          <View style={{backgroundColor: 'white', marginHorizontal: 20, margin: 10, padding: 5, marginLeft: 10, borderRadius: 10}}>
            <Text style={{fontWeight: 'bold'}}>Projeto:</Text>
            <Text>IF-GECOMP</Text>
          </View>

          <View>
            <Text>Vagas: </Text>
            <Text>2 vagas</Text>
          </View>
          
          <View>
            <Text>Etapas:</Text>
            <Text>3</Text>
          </View>

          <View>
            <Text>Criterios:</Text>
            <Text>Trabalhor em equipe</Text>
          </View>

          <View>
            <Text>Descrição:</Text>
          </View>
          
          <AppButton title="Inscreva-se" style={{ margin: 10 }} onPress={ () => navigation.navigate("Acessar conta")} />

        </View>

        </View>
      </View>
  );
};

export default Home; 
