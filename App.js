import React, { Component } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends Component {
	constructor() {
	super();
}

render() {
  return (
    <View style={styles.container}>
      <Text>Button Colours</Text>
			<View style = { [styles.controlBtn, { backgroundColor: "blue"}] } />
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
	controlBtn: {
		width: 100,
		height: 100,
		margin: 10,
		padding: 20,
		borderRadius: 10,
	},
});
