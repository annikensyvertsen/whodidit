import React, { useEffect } from 'react';
import { StyleSheet, Image, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { GetStarted } from './firstPage';

export const Content = ({ navigation }) => {
	const [ value, onChangeText ] = React.useState('');

	return (
		<View style={backgroundStyles.container}>
			<View style={backgroundStyles.wrapper}>
				<Image style={backgroundStyles.logo} source={require('../assets/whodidit_firstdraft_turquoise.png')} />
			</View>
			<GetStarted value={value} navigation={navigation} onChangeText={onChangeText} />
		</View>
	);
};

const width = Dimensions.get('window').width; //full width
export const backgroundStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#425D83',
		alignItems: 'center'
	},
	logo: {
		width: width - 40,
		height: 180
	},
	wrapper: {
		padding: 10,
		position: 'absolute',
		top: 40
	},
	footer: {
		position: 'absolute',
		bottom: 30
	}
});

export default Content;
