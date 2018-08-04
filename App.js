import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Supertext from './src/widgets/supertext';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Supertext
          style={{
            backgroundColor: 'red'
          }}
        >
          React content
        </Supertext>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
