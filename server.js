import express from 'express';
import http from 'http';
import {Server} from 'socket.io';


const app=express();
const server=http.createServer(app);
const io = new Server(server);
const userSocketMap = {};   //currently, if server restart then it gets deleted automatically     //todo : in production, we can store it in database 

io.on('connection',(socket)=>{
    console.log('socket connected',socket.io);
    socket.on(ACTION.JOIN,({roomId,userName})=>{
        userSocketMap[socket.id] = userName;
        socket.join(roomId);
        const clients=getAllConnectedClients(roomId);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>console.log(`Listening on port ${PORT}`));