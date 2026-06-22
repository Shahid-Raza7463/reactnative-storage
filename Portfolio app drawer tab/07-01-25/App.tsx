import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './components/HomeScreen';
import About from './components/AboutScreen';
import Resume from './components/ResumeScreen';
// import Portfolio from './components/PortfolioScreen';
import PortfolioStack from './components/PortfolioScreen';
import Contact from './components/ContactScreen';
import Settings from './components/SettingsScreen';

// // Custom Drawer Content with Image
// function CustomDrawerContent(props) {
//   const defaultImage = require('./assets/images/FB_IMG_1545560289018.jpg'); // Update the path if needed
//   return (
//     <DrawerContentScrollView {...props}>
//       <View style={styles.header}>
//         <Image source={defaultImage} style={styles.image} />
//         <Text style={styles.title}>My App</Text>
//       </View>
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// }
const Drawer = createDrawerNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="About" component={About} />
//         <Drawer.Screen name="Resume" component={Resume} />
//         <Drawer.Screen name="Portfolio" component={PortfolioStack} />
//         <Drawer.Screen name="Contact" component={Contact} />
//         <Drawer.Screen name="Settings" component={Settings} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        // screenOptions={{
        //   drawerStyle: styles.drawerStyle,
        //   drawerLabelStyle: styles.drawerLabel,
        //   drawerActiveTintColor: '#fff',
        //   drawerInactiveTintColor: '#000',
        //   drawerActiveBackgroundColor: '#6200ea',
        //   drawerItemStyle: styles.drawerItem,
        // }}>
        screenOptions={{
          drawerStyle: styles.drawerStyle,
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            paddingLeft: 5,
            //yellow
            // backgroundColor: '#ffd700',
            marginLeft: -20,
          },
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#000',
          drawerActiveBackgroundColor: '#6200ea',
          drawerItemStyle: styles.drawerItem,
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name="account-circle" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Resume"
          component={Resume}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name="file-copy" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Portfolio"
          component={PortfolioStack}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name="photo-library" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name="email" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({color, size}) => (
              <Icon name="settings" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  //* drawer screen styling
  drawerStyle: {
    backgroundColor: '#f5f5f5',
    width: 240,
  },
  // drawerLabel: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   //yellow
  //   backgroundColor: '#ffd700',
  // },
  drawerItem: {
    marginVertical: 5,
    borderRadius: 5,
    // green
    // backgroundColor: '#adff2f',
  },

  //* drawer screen styling
});

export default App;
