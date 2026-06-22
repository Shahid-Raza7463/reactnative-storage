import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {backgroundColor: '#6200ee'},
          headerTintColor: '#fff',
          tabBarStyle: {backgroundColor: '#6200ee'},
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ddd',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="account-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Resume"
          component={Resume}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="file-document" color={color} size={size} />
            ),
          }}
        />
        {/* <Tab.Screen name="Portfolio" component={Portfolio} /> */}
        <Tab.Screen
          name="Portfolio"
          component={PortfolioStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="folder-multiple-image" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="email" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
