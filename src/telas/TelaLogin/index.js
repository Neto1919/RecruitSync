import React, { useState } from 'react';
import { Checkbox } from 'react-native-ui-lib';
import { View, Text, TextInput, Image, Dimensions } from 'react-native';
import AppButton from '../../componentes/AppButton';
import styles from '../../../styles';
import AppLink from '../../componentes/AppLink';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Acessarconta = ({ navigation }) => {
  const [save, setSave] = useState(false);
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={[styles.b1, { marginTop: -50 }]}>
        <Text style={[styles.title, { marginBottom: hp('10%'), fontSize: wp('9%') }]}>Access your account</Text>

        <Text style={{ color: 'white', marginLeft: wp('12%'), marginRight: wp('20%'), marginTop: -80, fontSize: wp('3%') }}>
          Do you want to create an account?
        </Text>

        <View style={{ marginTop: -30, left: 60 }}>
          <AppLink title="Click here" style={{ marginHorizontal: wp('20%'), marginLeft: wp('30%'), marginTop: hp('1%'), margin: 10 }} onPress={() => navigation.navigate("Criar conta")} />
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
          <Text style={{ flex: 1, color: 'white', marginTop: 8, marginLeft: 10, fontSize: wp('4%') }}>Save password</Text>
          <Text style={{ color: 'white', marginTop: 8, marginLeft: 10, fontSize: wp('4%') }}>Forgot password?</Text>
          <AppLink title="Click here" style={{ marginHorizontal: 20, marginLeft: 10, marginTop: 8 }} onPress={() => navigation.navigate("Recuperar Senha")} />
        </View>

        <AppButton title="Access Account" style={{ margin: 10 }} onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  );
};

export default Acessarconta;