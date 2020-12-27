import React, { useEffect } from 'react';
import { StyleSheet, Image, Text, View, Button, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

import { setGameMode, setType } from '../redux/actions/gameModeActions';
import { setPage, setPrevPage } from '../redux/actions/gameSettingsActions';

import { useDispatch, useSelector } from 'react-redux';
import { backgroundStyles } from './content';
import CategoryMenu from '../components/categoryMenu';
import { RoundsMenu } from '../components/roundsMenu';
import { Footer } from '../components/footer';

export const GameMenu = ({ navigation }) => {
	const dispatch = useDispatch();
	/* 	const loadFont = async () => {
		await Font.loadAsync({
			// Load a font `Oswald-Bold` from a static resource
			'Oswald-Bold': require('../assets/fonts/Oswald-Bold.ttf')
		});
	}; */

	/* 	useEffect(() => {
		loadFont();
	}, []); */

	const name = useSelector((state) => state.gameSettings.name);
	const page = useSelector((state) => state.gameSettings.page);
	const pageStack = useSelector((state) => state.gameSettings.pageStack);

	const setMode = (mode) => {
		dispatch(setPage(mode));
		dispatch(setGameMode(mode));
	};

	console.log('name', name);
	return (
		<View style={backgroundStyles.container}>
			<View style={backgroundStyles.wrapper}>
				<Image style={backgroundStyles.logo} source={require('../assets/whodidit_firstdraft_turquoise.png')} />
			</View>

			<View style={styles.container}>
				{page === 'firstPage' && (
					<View>
						<TouchableOpacity
							onPress={() => {
								dispatch(setPage('join'));
								dispatch(setGameMode('join'));
							}}
							style={styles.joinGameButton}
						>
							<Text style={styles.buttonText}> Join Game </Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								dispatch(setPage('create'));
								dispatch(setGameMode('create'));
							}}
							style={styles.createGameButton}
						>
							<Text style={styles.buttonText}> Create Game </Text>
						</TouchableOpacity>
					</View>
				)}
				{page === 'create' && (
					<View>
						<TouchableOpacity
							onPress={() => {
								dispatch(setType('drinking'));
								dispatch(setPage('categories'));
							}}
							style={styles.joinGameButton}
						>
							<Text style={styles.buttonText}> Drinking </Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								dispatch(setType('chilling'));
								dispatch(setPage('categories'));
							}}
							style={styles.createGameButton}
						>
							<Text style={styles.buttonText}> Chilling </Text>
						</TouchableOpacity>
					</View>
				)}
				{page === 'categories' && <CategoryMenu />}
				{page === 'rounds' && <RoundsMenu navigation={navigation} />}
			</View>
			<Button
				title="Go back"
				onPress={() => {
					if (page === 'firstPage') {
						navigation.goBack();
					} else {
						dispatch(setPrevPage());
					}
				}}
			/>
			<View style={backgroundStyles.footer}>
				<Footer value={name} />
			</View>
		</View>
	);
};

/* {gameType === 'drinking' && (
	<View>
		<TouchableOpacity onPress={() => setType('drinking')} style={styles.joinGameButton}>
			<Text style={styles.buttonText}> Easy Start </Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={() => setType('chilling')} style={styles.createGameButton}>
			<Text style={styles.buttonText}> Friendly </Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={() => setType('drinking')} style={styles.joinGameButton}>
			<Text style={styles.buttonText}> Dirty </Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={() => setType('chilling')} style={styles.createGameButton}>
			<Text style={styles.buttonText}> Custom </Text>
		</TouchableOpacity>
	</View>
)} */
export default GameMenu;

const styles = StyleSheet.create({
	container: {
		marginTop: 300,
		//flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	createGameButton: {
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
	joinGameButton: {
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
	footer: {
		position: 'absolute',
		bottom: 30
	}
});

//		fontFamily: 'Oswald-Bold'
