import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Slider } from 'react-native';
import { useDispatch } from 'react-redux';
import { setRounds } from '../redux/actions/gameModeActions';
import { setPage } from '../redux/actions/gameSettingsActions';

export const RoundsMenu = ({ navigation }) => {
	const [ rounds, setLocalRounds ] = useState(5);
	const dispatch = useDispatch();
	return (
		<View>
			<Text style={styles.buttonText}>Rounds</Text>
			<View style={styles.flexBox}>
				<Text style={styles.buttonText}>{rounds}</Text>
				<Slider
					maximumTrackTintColor="#A9966A"
					minimumTrackTintColor="#F3BF58"
					style={styles.slider}
					step={1}
					maximumValue={15}
					onValueChange={(val) => setLocalRounds(val)}
					value={rounds}
				/>
			</View>

			<TouchableOpacity
				onPress={() => {
					setRounds(rounds);
					navigation.navigate('PinPage');
					dispatch(setPage('PinPage'));
				}}
				style={styles.button}
			>
				<Text style={styles.buttonText}> READY </Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#F67473',
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.55,
		shadowRadius: 3.84,
		borderRadius: 8,
		width: 200,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10
	},
	buttonText: {
		fontSize: 30,
		color: 'white'
	},
	slider: {
		width: 200,
		height: 100
	},
	flexBox: {
		marginTop: 30,
		marginBottom: 30,
		display: 'flex',
		alignItems: 'center'
	}
});
