/**
 * KYIV MEDIA 22.11.2019
 */

import React, { Fragment } from 'react';
import Home from './components/Home';
import Chat from './components/Chat';
import { Platform, StyleSheet } from 'react-native';

import {
  Router,
  Scene
} from 'react-native-router-flux';



const App = () => {
  return (
    <Router>
      <Scene key='root' style={{ paddingTop: Platform.OS === ios ? 64 : 32 }} >
        <Scene key='home' component={Home} title={home} />
        <Scene key='chat' component={Chat} title={chat} />
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({

});

export default App;
