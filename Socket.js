export const initiateSocket = (room) => {
	socket = io('http://localhost:3000')
	console.log('connecting socket...')
	if(socket && room ) socket.emit('join', 'room')
}

export const disconnectSocket = () => {
	console.log('disconnecting socket..')
	if (socket) socket.disconnect()
}

export const subscribeToChat = (cb) => {
	if (!socket) return true;
	socket.on('chat', msg => {
		console.log('websocket event recieved!')
		return cb(null, msg);
	})
}

export const sendMessage = (room, message) => {
	if (socket) socket.emit('chat,', {message, room})
}
