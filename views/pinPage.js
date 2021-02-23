import React, { useEffect, useState } from 'react';
import { backgroundStyles } from './content';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';




export const PinPage = ({navigation}) => {

	const [id, setId] = useState('')
	const [msg, setMsg] = useState('')

	
	useEffect(() => {
	
	}, [])



	
	const generateId = () => {
		var S4 = function() {
			 return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		};
		setId(S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	}
	return (
		<View style={backgroundStyles.container}>	
			<View style={backgroundStyles.wrapper}>
				<Image style={backgroundStyles.logo} source={require('../assets/whodidit_firstdraft_turquoise.png')} />
			</View>
			<View style={styles.flexBox}>
			<Text style={styles.buttonText}> Game pin: xxxx </Text>
			</View>
			<TouchableOpacity
				onPress={() => {
					console.log("clicked")
					navigation.navigate('DescribeWrite');

				}}
				style={styles.button}
			>
				<Text style={styles.buttonText}> Start </Text>
			</TouchableOpacity>
		</View>
	)
};

export default PinPage;

const styles = StyleSheet.create({
	buttonText: {
		fontSize: 30,
		color: 'white'
	},
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
	flexBox: {
		marginTop: 300,
		marginBottom: 30,
		display: 'flex',
		alignItems: 'center'
	}
})
