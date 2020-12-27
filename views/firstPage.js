import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setPage, setName } from '../redux/actions/gameSettingsActions';
import { Keyboard } from 'react-native'; 


export const GetStarted = ({ value, onChangeText, navigation }) => {
	const dispatch = useDispatch();
	return (
		<View style={styles.inputField}>
			<Text style={styles.userText}>Username</Text>
			<TextInput
				value={value}
				style={styles.textInput}
				onChangeText={(text) => {
					onChangeText(text);
				}}
			/>
			<TouchableOpacity
				style={styles.getStartedButton}
				onPress={() => {
					navigation.navigate('GameMenu');
					dispatch(setPage('firstPage'));
					dispatch(setName(value));
					Keyboard.dismiss()
				}}
			>
				<Text style={styles.userText}> Get started </Text>
			</TouchableOpacity>
		</View>
	);
};

export default GetStarted;

const styles = StyleSheet.create({
	textInput: {
		borderStyle: 'solid',
		backgroundColor: 'white',
		borderRadius: 8,
		width: 320,
		height: 60,
		marginVertical: 6,
		fontSize: 18,
		paddingLeft: 5
	},
	userText: {
		color: 'white',
		fontSize: 18
	},
	inputField: {
		marginTop: 300,
		flexDirection: 'column'
	},
	getStartedButton: {
		backgroundColor: '#4CD8BC',
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.55,
		shadowRadius: 3.84,
		borderRadius: 8,
		width: 130,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
		//position: 'absolute',
		marginLeft: '46%'
	}
});
