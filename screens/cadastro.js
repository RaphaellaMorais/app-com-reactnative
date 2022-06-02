import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle';


export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [matricula, setMatricula] = useState(null)
  const [isSelected, setSelected] = useState(false)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorMatricula, setErrorMatricula] = useState(null)

  const validar = () => {
    let error = false
    setErrorEmail("")
    setErrorMatricula("")
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }
    if (matricula == null){
      setErrorMatricula("Preencha sua Matrícula")
      error = true
    }
    return !error
  }

  const salvar = () => {
    if (validar()){
      console.log("Salvou")  
    }
  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h3>Cadastre-se</Text>
    <Input
        placeholder="E-mail"
        onChangeText={value => {
          setEmail(value)
          setErrorEmail(null)
        }}
        keyboardType="email-address"
        errorMessage={errorEmail}        
        />

    <Input
        placeholder="Nome"
        onChangeText={value => setNome(value)}
        errorMessage={errorNome}       
        />

    <Input
        placeholder="Matrícula"
        onChangeText={value => {
          setMatricula(value)
          setErrorMatricula(null)
        }}
        keyboardType="numeric" 
        returnKeyType="done" 
        errorMessage={errorMatricula}       
      />


    <CheckBox 
        title="*Seus dados estão protegidos e são totalmente sigilosos."
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="green"
        uncheckedColor="red"
        checked={isSelected}
        onPress={() => setSelected(!isSelected)}
    />

      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
         />
        }
        title="Salvar"
        buttonStyle={specificStyle.button}
        onPress={() => salvar()}
      />
    <Text h5> </Text>
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor:"#BFDDF3"
  },
  button: {
    width: 150,
    marginHorizontal: 50,
    marginVertical: 10,
  }
})