'use client';
import { useState, useEffect } from 'react';
import AppWhite from '../../componentes/AppWhite';
import styles from '../../../styles';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Perfil = ({ navigation }) => {

  const [alunos, setAlunos] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const fetchAlunos = async () => {
      const response = await fetch('http://192.168.x.x:3000/api/alunos');
      const data = await response.json();
      setAlunos(data);
    }

    fetchAlunos();
  }, [toggle])

  return (

    <View>
      <Image
        source={require('../../../assets/imagens/home.png')}
        style={{ height: '100%', width: '100%' }}
      />

      <View style={styles.container}>
        <View style={styles.b1}>
          <View style={{ backgroundColor: '#4A5C6A', width: 400, height: 650, marginHorizontal: 45, borderRadius: 10, marginTop: -950 }}>

            <View>
              <Image
                source={require('../../../assets/imagens/perfil.jpg')}
                style={{ height: 100, width: 100, borderRadius: 100, marginLeft: 50, marginTop: 50 }}
              />
            </View>

            <View style={{ marginLeft: 250, marginTop: -90 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, padding: 10, marginHorizontal: -10 }}>CRE</Text>
              <View style={{ backgroundColor: 'white', width: 100, borderRadius: 10 }}>
                <Text style={{ margin: 5, marginHorizontal: 35, fontWeight: 'bold' }}>86,8</Text>
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, padding: 3, marginHorizontal: 20 }}>Nome</Text>
              <View style={{ backgroundColor: 'white', width: 360, borderRadius: 10, marginHorizontal: 20 }}>
                <Text style={{ margin: 5, marginHorizontal: 15, fontWeight: 'bold' }}>Neto Santos</Text>
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, padding: 3, marginHorizontal: 20 }}>Email</Text>
              <View style={{ backgroundColor: 'white', width: 360, borderRadius: 10, marginHorizontal: 20 }}>
                <Text style={{ margin: 5, marginHorizontal: 15, fontWeight: 'bold' }}>NetoSantos@gmail.com</Text>
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, padding: 3, marginHorizontal: 20 }}>Contato</Text>
              <View style={{ backgroundColor: 'white', width: 360, borderRadius: 10, marginHorizontal: 20 }}>
                <Text style={{ margin: 5, marginHorizontal: 15, fontWeight: 'bold' }}>(83) 98576-3483</Text>
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, padding: 3, marginHorizontal: 20 }}>Matricula</Text>
              <View style={{ backgroundColor: 'white', width: 360, borderRadius: 10, marginHorizontal: 20 }}>
                <Text style={{ margin: 5, marginHorizontal: 15, fontWeight: 'bold' }}>2024000001919</Text>
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, padding: 3, marginHorizontal: 20 }}>Historico</Text>
              <View style={{ backgroundColor: 'white', width: 360, height: 100, borderRadius: 10, marginHorizontal: 20 }}>
                <View style={{ backgroundColor: '#86f224', width: 120, borderRadius: 10, borderWidth: 3, borderColor: '#f4ff96', marginHorizontal: 20, marginTop: 10 }}>
                  <Text style={{ margin: 5, marginHorizontal: 15, fontWeight: 'bold', color: 'white' }}>IF-GECOMP</Text>
                </View>
              </View>
            </View>

            <AppWhite title="Log out" style={{ marginTop: 10, width: 70, marginLeft: 20 }} onPress={() => navigation.navigate("Acessar conta")} />

          </View>
        </View>
      </View>
    </View>
  );
};

export default Perfil;