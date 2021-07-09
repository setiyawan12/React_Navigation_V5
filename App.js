import React from 'react'
import { View,Text, Button } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Home =({navigation})=>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screens</Text>
      <Button title='Pindah' onPress={()=>navigation.navigate('ProfileScreen')}/>
    </View>
  );
}
const Profile =()=>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}
const Stack = createStackNavigator()

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='HomeScreen' component={Home}/>
        <Stack.Screen name='ProfileScreen' component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
)
}

export default App