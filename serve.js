const express = require('express');
const fs = require('fs');
const https = require('https');
const socketIo = require('socket.io');
// const { v4: uuidv4 } = require('uuid');
const app = express();

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
}

const server = https.createServer(options, app);

const io = socketIo(server);
app.use(express.static('src/public'));

io.on('connection', (socket) => {
    socket.emit('connectedToServer', socket.id);

    socket.on('offer', (data) => {
        socket.broadcast.emit('offer', data)
    });

})

server.listen(3000, () => {
    console.log('server on line on https://localhost:3000')
})