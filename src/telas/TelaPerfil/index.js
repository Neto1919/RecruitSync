import { View, Button, StyleSheet, Text, TextInput, StatusBar, Pressable } from "react-native";


const Perfil = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.b1}>
          <View style={styles.b2}>

            <View style={styles.foto}></View>

            <Text style={styles.cre1}>CRE</Text>

            <View style={styles.cre}>
                <Text style={styles.text1}>85,8</Text>
            </View>

            <Text style={styles.texto}>Nome</Text>
            <View style={styles.vi}>
                <Text style={styles.te}>Neto Santos</Text>
            </View>

            <Text style={styles.texto1}>Email</Text>
            <View style={styles.vi1}>
                <Text style={styles.te1}>Neto@gmail.com</Text>
            </View>

            <Text style={styles.texto2}>Contato</Text>
            <View style={styles.vi2}>
                <Text style={styles.te2}>986308637</Text>
            </View>

            <Text style={styles.texto3}>Endereço</Text>
            <View style={styles.vi3}>
                <Text style={styles.te3}>Rua, Centro, Areial</Text>
            </View>

            <Text style={styles.texto4}>Matricula</Text>
            <View style={styles.vi4}>
                <Text style={styles.te4}>2030198000024</Text>
            </View>

            <Text style={styles.texto5}>Histórico</Text>
            <View style={styles.vi5}>
                <View style={styles.vii}>
                  <Text style={styles.te5}>IF-Gecomp</Text>
                </View>
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
        height: 700,
        backgroundColor: '#4A5C6A',
        left: 50,
        top: 100,
        borderRadius: 20,
    },
    foto: {
        backgroundColor: 'white',
        height: 100,
        width: 100,
        borderRadius: 100,
        left: 50,
        top: 15,
    },
    text1: {
        textAlign: "center",
        padding: 10,
        fontSize: 15,
    },
    cre: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 40,
        width: 100,
        left: 250,
        top: -80,
    },
    cre1: {
        left: 200,
        top: -50,
        fontSize: 20,
        color: 'white',
    },
    texto: {
        fontSize: 20,
        color: 'white',
        left: 35,
        top: -50,
    },
    vi: {
        backgroundColor: 'white',
        height: 30,
        width: 330,
        left: 30,
        top: -50,
        borderRadius: 10,
    },
    te: {
        padding: 5,
        fontSize: 15,
    },
    texto1: {
      fontSize: 20,
      color: 'white',
      left: 35,
      top: -40,
    },
    vi1: {
      backgroundColor: 'white',
      height: 30,
      width: 330,
      left: 30,
      top: -40,
      borderRadius: 10,
    },
    te1: {
      padding: 5,
      fontSize: 15,
    },
    texto2: {
      fontSize: 20,
      color: 'white',
      left: 35,
      top: -30,
    },
    vi2: {
      backgroundColor: 'white',
      height: 30,
      width: 330,
      left: 30,
      top: -30,
      borderRadius: 10,
    },
    te2: {
      padding: 5,
      fontSize: 15,
    },
    texto3: {
      fontSize: 20,
      color: 'white',
      left: 35,
      top: -20,
    },
    vi3: {
      backgroundColor: 'white',
      height: 30,
      width: 330,
      left: 30,
      top: -20,
      borderRadius: 10,
    },
    te3: {
      padding: 5,
      fontSize: 15,
    },
    texto4: {
      fontSize: 20,
      color: 'white',
      left: 35,
      top: -10,
    },
    vi4: {
      backgroundColor: 'white',
      height: 30,
      width: 330,
      left: 30,
      top: -10,
      borderRadius: 10,
    },
    te4: {
      padding: 5,
      fontSize: 15,
    },
    texto5: {
      fontSize: 20,
      color: 'white',
      left: 35,
      top: 0,
    },
    vi5: {
      backgroundColor: 'white',
      height: 80,
      width: 330,
      left: 30,
      top: 0,
      borderRadius: 10,
    },
    te5: {
      padding: 5,
      fontSize: 15,
      color: 'white',
      textAlign: "center",
    },
    vii: {
      backgroundColor: 'black',
      height: 30,
      width: 100,
      margin: 10,
      borderRadius: 10,
    },
  });

export default Perfil;
