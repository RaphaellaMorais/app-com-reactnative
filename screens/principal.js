import * as React from 'react';
import { Text, View } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Feed() {
  const [isSelected1, setSelected1] = React.useState(false)
  const [isSelected2, setSelected2] = React.useState(false)
  const [isSelected3, setSelected3] = React.useState(false)
  const [isSelected4, setSelected4] = React.useState(false)
  const [isSelected5, setSelected5] = React.useState(false)

  const [isSelected6, setSelected6] = React.useState(false)
  const [isSelected7, setSelected7] = React.useState(false)
  const [isSelected8, setSelected8] = React.useState(false)
  const [isSelected9, setSelected9] = React.useState(false)
  const [isSelected10, setSelected10] = React.useState(false)

  
  return (
    <>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Titulo da Pergunta</Text>
        <CheckBox 
                title="*Seus dados estão protegidos e são totalmente sigilosos."
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="green"
                uncheckedColor="red"
                checked={isSelected1}
                onPress={() => setSelected1(!isSelected1)}
            />
            <CheckBox 
                title="*Seus dados estão protegidos e são totalmente sigilosos."
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="green"
                uncheckedColor="red"
                checked={isSelected2}
                onPress={() => setSelected2(!isSelected2)}
            />
            <CheckBox 
                title="*Seus dados estão protegidos e são totalmente sigilosos."
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="green"
                uncheckedColor="red"
                checked={isSelected3}
                onPress={() => setSelected3(!isSelected3)}
            />
            <CheckBox 
                title="*Seus dados estão protegidos e são totalmente sigilosos."
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="green"
                uncheckedColor="red"
                checked={isSelected4}
                onPress={() => setSelected4(!isSelected4)}
            />
            <CheckBox 
                title="*Seus dados estão protegidos e são totalmente sigilosos."
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="green"
                uncheckedColor="red"
                checked={isSelected5}
                onPress={() => setSelected5(!isSelected5)}
            />
    </View>


    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Titulo da Pergunta</Text>
            <CheckBox 
                    title="*Seus dados estão protegidos e são totalmente sigilosos."
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    uncheckedColor="red"
                    checked={isSelected6}
                    onPress={() => setSelected6(!isSelected6)}
                />
                <CheckBox 
                    title="*Seus dados estão protegidos e são totalmente sigilosos."
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    uncheckedColor="red"
                    checked={isSelected7}
                    onPress={() => setSelected7(!isSelected7)}
                />
                <CheckBox 
                    title="*Seus dados estão protegidos e são totalmente sigilosos."
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    uncheckedColor="red"
                    checked={isSelected8}
                    onPress={() => setSelected8(!isSelected8)}
                />
                <CheckBox 
                    title="*Seus dados estão protegidos e são totalmente sigilosos."
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    uncheckedColor="red"
                    checked={isSelected9}
                    onPress={() => setSelected9(!isSelected9)}
                />
                <CheckBox 
                    title="*Seus dados estão protegidos e são totalmente sigilosos."
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    uncheckedColor="red"
                    checked={isSelected10}
                    onPress={() => setSelected10(!isSelected10)}
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

export default function Principal() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
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
