import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { setCategory } from '../redux/actions/gameModeActions';
import { setPage } from '../redux/actions/gameSettingsActions';
import { useDispatch } from 'react-redux';

export const CategoryMenu = () => {
	const categories = [ 'Easy start', 'Friendly', 'Groovy', 'Custom' ];

	const dispatch = useDispatch();
	return (
		<View style={styles.inputField}>
			{categories.map((category, index) => (
				<TouchableOpacity
					key={index}
					onPress={() => {
						dispatch(setCategory(category));
						dispatch(setPage('rounds'));
					}}
					style={index % 2 === 0 ? styles.categoryButtonRed : styles.categoryButtonYellow}
				>
					<Text style={styles.buttonText}>{category}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	categoryButtonRed: {
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
	categoryButtonYellow: {
		backgroundColor: '#F3BF58',
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
	}
});

export default CategoryMenu;
