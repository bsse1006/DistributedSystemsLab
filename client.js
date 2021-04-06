/*const express = require("express");
const http = require('http');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server);*/

const
    io = require("socket.io-client"),
    socket = io.connect("http://localhost:5000");

socket.on("matches", (matches) => {
    
    console.log("Matches sent drom the swerver:");
    /*
        drivers.forEach(driver => {
            var newDistance = linearDistance(parseFloat(rider.startingX), parseFloat(rider.startingY), parseFloat(driver.startingX), parseFloat(driver.startingY));
      
            if (newDistance<distance)
            {
              distance = newDistance;
              matchedDriver = driver;
              console.log("kut");
            }
          });
      
          var cost = distance*2;
      
          var match = {
            "riderName" : rider.name,
            "driverName" : matchedDriver.name,
            "carNumber" : matchedDriver.carNumber,
            "cost" : cost
          };*/
});

const http = require('http');

const data = JSON.stringify({
    name: 'John Doe',
    carNumber: '234',
    startingX: '56',
    startingY: "76"
});

const options = {
    hostname: 'localhost',
    port: '5000',
    path: '/request/driver',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};


const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on("error", (err) => {
    console.log("Error: ", err.message);
});

req.write(data);
req.end();