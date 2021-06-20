const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const matches = require('./Matches');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('', require('./routes/api/com'));

function runningFunction(socket) 
{
  var matcher = setInterval(function() {
    
    //console.log(matches);
    if (matches.length>=5)
    {
        const data = matches;
        socket.emit('matches', data);
        console.log("Data sent to client");
        matches.length = 0;
    }
    

  }, 3000);
}

// Run when client connects
io.of('communication').on('connection', socket => {

    console.log("connected");
  
    runningFunction(socket);
  
});

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));