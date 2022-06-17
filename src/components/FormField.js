import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function FormField({title, placeholder}) {
    return(
        <View>
            <Text>{title}</Text>
            <TextInput 
                placeholder={placeholder}
            />

        </View>    
    )
}