import React, { useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { backgroundStyles } from './content';
import { useSelector } from 'react-redux'


 export const DescribeWrite = () => {
   //these hooks (useSelector) allows us to fetch state directly from store
  const totalRounds = useSelector(state => state.round.totalRounds)
  const currentRound = useSelector(state => state.round.currentRound)

  let value;
  return(
    <View style={backgroundStyles.container}>	
			<View style={backgroundStyles.wrapper}>
				<Image style={backgroundStyles.logo} source={require('../assets/whodidit_firstdraft_turquoise.png')} />
      </View>
      <View style={styles.flexBox}>
        <Text style={styles.buttonText}>Round: {currentRound} </Text>
        <Text> Describe your most -- </Text>
        <TextInput
          value={value}
          style={styles.textInput}
          onChangeText={(text) => {
            onChangeText(text);
          }}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
	buttonText: {
		fontSize: 30,
		color: 'white'
	},
	flexBox: {
		marginTop: 300,
		marginBottom: 30,
		display: 'flex',
		alignItems: 'center'
  },
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
});