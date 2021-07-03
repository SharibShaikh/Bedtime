import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';


import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';
import WelcomeScreen from './screens/welcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer style={styles.container} />
      
    );
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  BottomTab: { screen: AppTabNavigator },
})

//Creating AppContainer For Displaying The SwitchNavigator
const AppContainer = createAppContainer(switchNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
