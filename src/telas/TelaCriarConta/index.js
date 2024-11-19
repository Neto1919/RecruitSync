import React, { useState } from 'react';
import { Checkbox } from 'react-native-ui-lib';
import AppButton from '../../componentes/AppButton';
import styles from '../../../styles';
import { Text, View, TextInput } from 'react-native';
import AppLink from '../../componentes/AppLink';

const CriaConta = ({ navigation }) => {
  const [save, setSave] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.b1}>
        <Text style={[styles.title, { marginBottom: 3 }]}>Create an account</Text>

        <View style={{ flexDirection: 'row', }}>
          <Text style={{ color: 'white', marginTop: 10, marginLeft: 70, marginVertical: 50 }}>Already have an account ?</Text>
          <AppLink title="Log in" style={{ margin: 10 }} onPress={() => navigation.navigate("Acessar conta")} />
        </View>

        <TextInput
          style={{ marginLeft: 10, borderWidth: 2, borderColor: 'white', color: 'white', fontWeight: 'bold', marginHorizontal: 270, borderRadius: 10, padding: 10, margin: 10 }}
          placeholder='Fletcher'
          placeholderTextColor={'#c1c1c1'}
        />

        <TextInput
          style={{ marginLeft: 250, borderWidth: 2, borderColor: 'white', color: 'white', fontWeight: 'bold', marginHorizontal: 10, marginTop: -63, borderRadius: 10, padding: 10, margin: 10 }}
          placeholder='Last name'
          placeholderTextColor={'#c1c1c1'}
        />

        <TextInput
          style={styles.input}
          placeholder='Email:'
          placeholderTextColor={'#c1c1c1'}
        />

        <TextInput
          style={styles.input}
          placeholder='Enter your password:'
          placeholderTextColor={'#c1c1c1'}
          secureTextEntry
        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox style={{ marginLeft: 10, marginTop: 10 }} color="white" value={save} onValueChange={() => setSave(!save)} />
          <Text style={{ flex: 1, color: 'white', marginTop: 10, marginLeft: 10 }} >I agree to the</Text>
          <Text style={{ color: 'blue', marginTop: 10, marginLeft: 10, marginHorizontal: 230 }}>Terms e Conditions</Text>

        </View>

        <AppButton title="Create account" style={{ margin: 10 }} onPress={() => navigation.navigate("Acessar conta")} />

      </View>
    </View>
  );
}

export default CriaConta; 