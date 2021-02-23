import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getCurrentRound, getTotalRounds } from '../redux/actions/roundActions';

export const DescribeWaiting = () => {
  let currentRound = getCurrentRound;
  return(
    <View>
    <Text style={styles.buttonText}>Round: {currentRound}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
	buttonText: {
		fontSize: 30,
		color: 'white'
	},
	flexBox: {
		marginTop: 30,
		marginBottom: 30,
		display: 'flex',
		alignItems: 'center'
	}
});
