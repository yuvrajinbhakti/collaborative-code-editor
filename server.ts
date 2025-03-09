import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import ACTIONS from './src/Actions';


const app=express();
const server=http.createServer(app);
const io = new Server(server);
const userSocketMap = {};   //currently, if server restart then it gets deleted automatically     //todo : in production, we can store it in database 
function getAllConnectedClients(roomId){
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId)=>{
        return {
            socketId,
            userName: userSocketMap[socketId]
        };
    });
}

io.on('connection',(socket)=>{
    socket.on(ACTIONS.JOIN,({roomId,userName})=>{
        userSocketMap[socket.id] = userName;
        socket.join(roomId);
        const clients=getAllConnectedClients(roomId);
        clients.forEach(({socketId})=>{
            io.to(socketId).emit(ACTIONS.JOINED,{
                clients,
                userName,
                socketId: socket.id,
            });
        })
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>console.log(`Listening on port ${PORT}`));