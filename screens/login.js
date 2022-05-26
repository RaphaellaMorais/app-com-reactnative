import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import styles from '../style/mainStyle';


export default function Login({navigation}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }

  const cadastrar = () => {
      
  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h3>Entre no Formulário</Text>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address" autoCompleteType={undefined}        
        />
      <Input
        placeholder="Sua senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true} autoCompleteType={undefined}        />

        <Button
          icon={
            <Icon
              name="check"
              size={15}
              color="white"
          />
        }
        title="Entrar"
        buttonStyle={specificStyle.button}
        onPress={() => entrar()}
      />

        <Button
          icon={
            <Icon
              name="user"
              size={15}
              color="white"
          />
        } title="Cadastrar"
        buttonStyle={specificStyle.button}
        onPress={() => cadastrar()}
      />


    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor:"#BFDDF3"
  },
  button: {
    //width:"50%",
    //marginTop:10
    width: 150,
    marginHorizontal: 50,
    marginVertical: 10,
  }
})