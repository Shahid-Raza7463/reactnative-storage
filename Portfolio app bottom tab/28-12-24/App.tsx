import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/HomeScreen';
import About from './components/AboutScreen';
import Resume from './components/ResumeScreen';
// import Portfolio from './components/PortfolioScreen';
import PortfolioStack from './components/PortfolioScreen';
import Contact from './components/ContactScreen';
import Settings from './components/SettingsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Portfolio"
        screenOptions={{
          headerStyle: {backgroundColor: '#6200ee'},
          headerTintColor: '#fff',
          tabBarStyle: {backgroundColor: '#6200ee'},
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ddd',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Resume" component={Resume} />
        {/* <Tab.Screen name="Portfolio" component={Portfolio} /> */}
        <Tab.Screen name="Portfolio" component={PortfolioStack} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
