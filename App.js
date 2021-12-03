import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocation';
import MeteorScreen from './screens/Meteors';
import SoreThroat from './Symptoms/soreThroat';
import HeadAche from './Symptoms/HeadAche';
import StomachAche from './Symptoms/StomachAche';
import MigrainePain from './Symptoms/MigrainePain';
import BackPain from './Symptoms/BackPain';
import Cancer from './Symptoms/Cancer';
import Diabetes from './Symptoms/Diabetes';
import HeartDiseases from './Symptoms/HeartDiseases';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={IssLocationScreen} />
        <Stack.Screen name="Meteors" component={MeteorScreen} />
        <Stack.Screen name="soreThroat" component={SoreThroat} />
        <Stack.Screen name="HeadAche" component={HeadAche} />
        <Stack.Screen name="StomachAche" component={StomachAche} />
        <Stack.Screen name="MigrainePain" component={MigrainePain} />
        <Stack.Screen name="BackPain" component={BackPain} />
        <Stack.Screen name="Cancer" component={Cancer} />
        <Stack.Screen name="Diabetes" component={Diabetes} />
        <Stack.Screen name="HeartDiseases" component={HeartDiseases} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
