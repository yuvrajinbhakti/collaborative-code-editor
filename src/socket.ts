import { io } from 'socket.io-client';

export const initSocket = async () => {
    const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL || 'https://localhost:5000'; 

    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',  
        timeout: 10000,
        transports: ['websocket'],
    };

    return io(BACKEND_URL, options);
};
