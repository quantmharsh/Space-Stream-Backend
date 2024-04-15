import  {Server} from "socket.io"
import http from "http"
import express from "express"

const app = express();
// create http server binding it with express
const server= http.createServer(app);
// create socket server and binding it with http server
const io= new Server(server ,{
    cors:{
        origin:"http://localhost:3000",
        methods:["POST" , "GET"]
    }
})

// method to getReciepent id to whom we are sending message
// this method helps in sending message to [articular user in real time]
export const getReciepentSocketId =(recepientId)=>{
    return  userSocketMap[recepientId];
}
const userSocketMap={}


io.on('connection', (socket)=>{
    console.log("used connected successfully " , socket.id);
    const userId= socket.handshake.query.userId;
    if(userId!="undefined")
    {
        // in hashmap taking userId as a key and socket.id as its value 
        userSocketMap[userId]=socket.id;
    }
    // sending our hashmap to client side  . converting hashmap to array 
    io.emit("getOnlineUsers" ,Object.keys(userSocketMap));
    
    // disconnecting socket
    socket.on("disconnect" ,()=>{
        //on disconnection remove user id from socketmap
        delete userSocketMap[userId];
        io.emit("getOnlineUsers" , Object.keys(userSocketMap));
        console.log("user disconnected successfully")
    })

})
export{ app , io , server}