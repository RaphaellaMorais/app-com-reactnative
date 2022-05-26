import * as React from 'react';
import { View, Text, ActivityIndicator, Button, TextInput, StyleSheet } from 'react-native';


export interface LoginScreenProps {
}

export function LoginScreen (props: LoginScreenProps) {
    return (
        <View>
            <Text>LoginScreen</Text>
            <ActivityIndicator size={80} color="red"/>

            <View style={{padding:20}}>
                <TextInput
                        keyboardType='number-pad' 
                        placeholder="Digite aqui o seu nome" 
                        placeholderTextColor="white" style={styles.input}/>
                <Button
                    title="Clique-me"
                    onPress={function() {
                        console.log('Clicou!')
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: { backgroundColor: "gray" }
})

     