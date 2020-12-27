import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { initiateSocket, disconnectSocket,
	subscribeToChat, sendMessage } from '../Socket'

export const PinPage = () => {

	const [id, setId] = useState('')

	const generateId = () => {
		var S4 = function() {
			 return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		};
		setId(S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	}
	useEffect(() => {
		//when coming to the pin-page as a creator a pin should
		//be generated and displayed in the creen
		//at the same time a private room is generated
		generateId()
		//create a room

	}, [])
	

	
	return <View><Text>PINPAGE</Text></View>;
};

export default PinPage;


/* const [id, setId] = useState('')
	const [room, setRoom] = useState(id)

	const generateId = () => {
		var S4 = function() {
			 return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		};
		setId(S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	}

	useEffect(() => {
		console.log("room", room)
		if (room) initiateSocket(room);
	}) */