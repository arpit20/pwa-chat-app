
const http = require('http');
const socketio =require('socket.io');

const server = http.createServer();

server.listen(8080,function(){
    console.log('Listening at: http://localhost:8080');
});


const io = socketio.listen(server);
const users=[];

io.sockets.on('connection',function(socket,user){
    
    console.log("connected");
    socket.on('getAllUsers',function(data){
     
        let filteredUsers = users.filter(function(user){
            return user!=data.user ;
        })
        io.sockets.in(data.user).emit('join',filteredUsers);
        
    })
   

    socket.on('join',function(data){
        socket.join(data.email);
        users.push(data.email);
        socket.broadcast.emit('join',[data.email]);
    })

    socket.on('message',function(data){
        console.log(data)
        socket.broadcast.emit('message',data);
        // io.sockets.in(data.to).emit('message',data);
    })

})

