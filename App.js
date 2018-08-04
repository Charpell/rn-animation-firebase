import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Supertext from './src/widgets/supertext';
import DsPlatform from './src/ds_platform/ds_platform'
import AnimOne from './src/Animations/anim_one';
import AnimTwo from './src/Animations/anim_two';
import Articles from './src/Articles';
import InputData from './src/inputData/inputdata';
import Login from './src/Login'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
