import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './components/HomeScreen';
import About from './components/AboutScreen';
import Resume from './components/ResumeScreen';
import PortfolioStack from './components/PortfolioScreen';
import Contact from './components/ContactScreen';
import Settings from './components/SettingsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Resume" component={Resume} />
        <Stack.Screen name="Portfolio" component={PortfolioStack} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
