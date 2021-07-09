import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const Home = ({navigation})=>{
    return(
        <View>
            <Text>Home Screen</Text>
            <Button title="Pindah" onPress={()=>navigation.navigate('ProfileScreen')}/>
        </View>
    )
}
const Profile =({navigation})=>{
    return(
        <View>
            <Text>
                Profie Screen
            </Text>
        </View>
    )
}
const Test = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={Home}/>
                <Stack.Screen name="ProfileScreen" component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const style = StyleSheet.create({
    
})

export default Test;