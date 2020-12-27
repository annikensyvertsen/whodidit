import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Footer = ({ value }) => {
	return (
		<View>
			<Text style={styles.text}>{value}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		color: 'white'
	}
});
