import React from 'react';
import 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import AuctionScreen from './src/screens/Auction';
import SettingsScreen from './src/screens/Settings';

MaterialIcons.loadFont();

const Tab = createBottomTabNavigator();

const icons: Record<string, string> = {
  Auction: 'store',
  Settings: 'settings',
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Auction"
            screenOptions={({route}) => ({
              tabBarIcon: ({color, size}) => {
                return (
                  <MaterialIcons
                    name={icons[route.name]}
                    color={color}
                    size={size}
                  />
                );
              },
            })}>
            <Tab.Screen name="Auction" component={AuctionScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;
