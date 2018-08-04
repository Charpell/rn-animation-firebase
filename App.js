import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Supertext from './src/widgets/supertext';
import DsPlatform from './src/ds_platform/ds_platform'
import AnimOne from './src/Animations/anim_one';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimOne />
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
