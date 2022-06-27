import * as React from 'react';
import { Text, View } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  FormField  from "../src/components/FormField";

export default function Formulario() {
  
  return (
    <>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        

        <FormField 
          title='Qual o seu curso?'
          placeholder='Digite aqui'
        
        />

        <FormField 
          title='Qual sua turma?'
          placeholder='Digite aqui'
        />

        <FormField 
          title='Qual o seu curso?'
          placeholder='Digite aqui'
        
        />

        <FormField 
          title='Qual ano/mês você iniciou o curso?'
          placeholder='Digite aqui'
        />

        <FormField 
          title='Indique a cidade e o polo presencial em que você estuda:'
          placeholder='Digite aqui'
        />

        <FormField 
          title='As opiniões de colegas e do(a) professor(a) contribuíram para o meu processo de aprendizagem?'
          placeholder='Digite aqui'
        />

        <FormField 
          title='As discussões e debates realizados no AVA foram importantes para minha tomada de posição frente aos temas?'
          placeholder='Digite aqui'
        />

        <FormField 
          title='Dentro das minhas condições práticas e de organização, os prazos para a realização das atividades foram suficientes?'
          placeholder='Digite aqui'
        />

        <FormField 
          title='Sinto-me motivado(a) a aplicar os conhecimentos obtidos nesta disciplina do curso?'
          placeholder='Digite aqui'
        />

        <FormField 
          title='O material disponibilizado foi suficiente para a aprendizagem do conteúdo?'
          placeholder='Digite aqui'
        />

        <FormField 
          title='As leituras complementares e dicas do(a) professor(a) enriqueceram seu aprendizado?'
          placeholder='Digite aqui'
        />

            
    </View>


    

        
    </>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export function Principal() {
  return (
    <Tab.Navigator
      initialRouteName="Formulario"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Formulario"
        component={Formulario}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
} 

/*export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
*/
