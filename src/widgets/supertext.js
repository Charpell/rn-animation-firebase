import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SuperText = (props) => {
    return (
        <Text 
            style={[ styles.superText, props.style ]}
        >
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
  superText:{
    backgroundColor:'blue',
    fontSize: 20,
    color:'white',
    padding:10,
    width: 300 
  }
});


export default SuperText;
