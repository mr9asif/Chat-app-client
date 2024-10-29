import io from 'socket.io-client';
const uri = 'http://localhost:5000';

const socket = io(uri);
socket.on('connect', () => {
    console.log(`Connected to server: ${socket.id}`);
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('connect_error', (error) => {
    console.error('Connection error:', error);
});


export default socket;