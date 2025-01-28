import React, { useState } from 'react';
import { Checkbox } from 'react-native-ui-lib';
import { View, Text, TextInput, Image } from 'react-native';
import AppButton from '../../componentes/AppButton';
import styles from '../../../styles';
import AppLink from '../../componentes/AppLink';

const Acessarconta = ({ navigation }) => {
  const [save, setSave] = useState(false);

  return (

    <View style={styles.container}>
      <View style={[styles.b1, { marginTop: -50 }]}>
        <Text style={[styles.title, { marginBottom: 50}]}>Access your account</Text>

        <Text style={{ color: 'white', marginLeft: 50, marginRight: 200, marginTop: -40, fontSize: 15 }}>Do you want to create an account ?</Text>

        <View style={{marginTop: -30, left: 60}}>
          <AppLink title="Click here" style={{ marginHorizontal: 150, marginLeft: 250, marginTop: 10, margin: 10 }} onPress={() => navigation.navigate("Criar conta")} />
        </View>

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
          <Text style={{ flex: 1, color: 'white', marginTop: 8, marginLeft: 10 }} >Save password</Text>
          <Text style={{ color: 'white', marginTop: 8, marginLeft: 10 }}>Forgot password?</Text>
          <AppLink title="Click here" style={{ marginHorizontal: 20, marginLeft: 10, marginTop: 8 }} onPress={() => navigation.navigate("Recuperar Senha")} />
        </View>

        <AppButton title="Access Account" style={{ margin: 10 }} onPress={() => navigation.navigate("Home")} />

      </View>
    </View>
  );
};

export default Acessarconta;