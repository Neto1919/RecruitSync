import React, { useState } from 'react';
import { Checkbox } from 'react-native-ui-lib';
import { View, Text, TextInput } from 'react-native';
import AppButton from '../../componentes/AppButton';
import styles from '../../../styles';
import AppLink from '../../componentes/AppLink';

const Acessarconta = ({ navigation }) => {
  const [save, setSave] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.b1}>
        <Text style={[styles.title, { marginBottom: 50 }]}>Access your account</Text>

        <Text style={{ color: 'white', marginLeft: 50, marginTop: -40, fontSize: 15 }}>Do you want to create an account ?</Text>

        <AppLink title="Click here" style={{ marginLeft: 190, marginTop: -18, margin: 40 }} onPress={() => navigation.navigate("Criar conta")} />

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