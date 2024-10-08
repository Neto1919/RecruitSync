import { View, Button, StyleSheet, Text, TextInput, StatusBar, Pressable, Image } from "react-native";

const Dados = ({ navigation }) => {
  return (


    <View style={styles.container}>
      <View style={styles.b1}>
        <View style={styles.b2}>


          <View style={styles.input}>
            <Text style={styles.fonte}>Projeto:</Text>
            <Text style={styles.text1}>IFGecomp</Text>
          </View>

          <View style={styles.input1}>
            <Text style={styles.fonte}>Vagas:</Text>
            <Text style={styles.text2}>2 vagas</Text>
          </View>

          <View style={styles.input2}>
            <Text style={styles.fonte}>Etapas:</Text>
            <Text style={styles.text3}>3</Text>
          </View>

          <View style={styles.input3}>
            <Text style={styles.fonte}>Criterios:</Text>
            <Text style={styles.text4}>Trabalhor em equipe</Text>
          </View>

          <View style={styles.input4}>
            <Text style={styles.fonte}>Descrição:</Text>
          </View>

          <View>
            <Image
              source={require('../../../assets/imagens/ifg.png')}
              style={styles.image}
            />
          </View>

          <View>
            <Text></Text>
          </View>

          <View>
            <Text></Text>
            <TextInput></TextInput>
          </View>


        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  b1: {
    width: 490,
    height: 1100,
    backgroundColor: 'black',
  },
  b2: {
    width: 400,
    height: 800,
    backgroundColor: '#4A5C6A',
    left: 50,
    top: 100,
    borderRadius: 20,
  },
  input: {
    width: 370,
    height: 45,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'white',
    borderColor: 'black',
    padding: 10,
    fontSize: 20,
    top: 200,
    left: 15,
  },
  input1: {
    width: 170,
    height: 45,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'white',
    borderColor: 'black',
    padding: 10,
    fontSize: 20,
    top: 220,
    left: 15,
  },
  input2: {
    width: 170,
    height: 45,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'white',
    borderColor: 'black',
    padding: 10,
    fontSize: 20,
    top: 175,
    left: 215,
  },
  input3: {
    width: 370,
    height: 45,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'white',
    borderColor: 'black',
    padding: 10,
    fontSize: 20,
    top: 200,
    left: 15,
  },
  input4: {
    width: 370,
    height: 80,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    color: 'white',
    borderColor: 'black',
    padding: 10,
    fontSize: 20,
    top: 220,
    left: 15,
  },
  button: {
    width: 370,
    height: 39,
    left: 15,
    top: 240,
    backgroundColor: '#4F4F4F',
    borderRadius: 10,
    borderWidth: 2,
  },
  text: {
    color: 'white',
    textAlign: "center",
    padding: 10,
  },
  text1: {
    left: 60,
    top: -16,
  },
  text2: {
    left: 50,
    top: -17,
  },
  text3: {
    left: 55,
    top: -17,
  },
  text4: {
    left: 65,
    top: -17,
    position: "relative"
  },
  fonte: {
    fontSize: 15,
    fontWeight: "bold",
  },
  image: {
    position: "relative",
    height: 150,
    width: 200,
    left: 95,
    top: -280,
  },

});

export default Dados;