import React, { useState } from 'react';
import { Checkbox } from 'react-native-ui-lib';
import AppButton from '../../componentes/AppButton';
import styles from '../../../styles';
import { Text, View, TextInput } from 'react-native';
import AppLink from '../../componentes/AppLink';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CriaConta = ({ navigation }) => {
  const [save, setSave] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.b1}>
        <Text style={[styles.title, { marginBottom: hp('2%'), fontSize: wp('10%') }]}>Create an account</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: hp('2%') }}>
          <Text style={{ color: 'white', marginTop: hp('-3%'), marginLeft: wp('13%'), fontSize: wp('4%') }}>Already have an account?</Text>
          <AppLink title="Log in" style={{ margin: 10, marginLeft: wp('5%'), marginTop: hp('-2%') }} onPress={() => navigation.navigate("Acessar conta")} />
        </View>

        <TextInput
          style={{
            marginLeft: wp('2%'),
            borderWidth: 2,
            borderColor: 'white',
            color: 'white',
            fontWeight: 'bold',
            marginHorizontal: wp('55%'),
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}
          placeholder='First name'
          placeholderTextColor={'#c1c1c1'}
        />

        <TextInput
          style={{
            marginLeft: wp('50%'),
            borderWidth: 2,
            borderColor: 'white',
            color: 'white',
            fontWeight: 'bold',
            marginHorizontal: wp('3.2%'),
            borderRadius: 10,
            padding: 10,
            margin: 10,
            marginTop: hp('-5.3%')
          }}
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

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('2%') }}>
          <Checkbox style={{ marginLeft: 10 }} color="white" value={save} onValueChange={() => setSave(!save)} />
          <Text style={{ color: 'white', marginLeft: 10 }}>I agree to the</Text>
          <Text style={{ color: 'blue', marginLeft: 10 }}>Terms and Conditions</Text>
        </View>

        <AppButton title="Create account" style={{ margin: 10 }} onPress={() => navigation.navigate("Acessar conta")} />
      </View>
    </View>
  );
}

export default CriaConta;