const uuid = require('uuid');
const
    io = require("socket.io-client"),
    socket = io.connect("http://localhost:5000/communication");

    /*
socket.on("connection", () => {
    
    console.log("connected");
    
});*/

socket.on("matches", (matches) => {
    
    console.log("Matches sent from the server:");
    console.log(matches);

    for(i=0; i<matches.length; i++)
    {
        const rating = JSON.stringify({
            id: uuid.v4(),
            rating: randomNumber(1)
        });

        sendRating(rating);
    }
    
});

const randomName = (length = 8) => {
    // Declare all characters
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    // Pick characers randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
};

const randomCoordinates = (length = 4) => {
    return Math.random().toString(10).substr(2, length);
};

const randomNumber = (length = 6) => {
    return Math.random().toString(10).substr(2, length);
};

var requestMaker = setInterval(function() {
  
    const driver = JSON.stringify({
        name: randomName(),
        carNumber: randomNumber(),
        startingX: randomCoordinates(),
        startingY: randomCoordinates()
    });

    const rider = JSON.stringify({
        name: randomName(),
        startingX: randomCoordinates(),
        startingY: randomCoordinates(),
        destinationX: randomCoordinates(),
        destinationY: randomCoordinates()
    });

    //console.log(rider);
    //console.log(driver);

    sendRiderRequest(rider);
    sendDriverRequest(driver);
  
  }, 1000);


function sendRiderRequest(data)
{
    const http = require('http');

    const options = {
        hostname: 'localhost',
        port: '5000',
        path: '/request/rider',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };


    const req = http.request(options, (res) => {
        /*let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log(JSON.parse(data));
        });*/

    }).on("error", (err) => {
        console.log("Error: ", err.message);
        });

    req.write(data);
    req.end();
}

function sendDriverRequest(data)
{
    const http = require('http');

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
        /*let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log(JSON.parse(data));
        });*/

    }).on("error", (err) => {
        console.log("Error: ", err.message);
        });

    req.write(data);
    req.end();
}

function sendRating(data)
{
    const http = require('http');

    const options = {
        hostname: 'localhost',
        port: '5000',
        path: '/rating',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };


    const req = http.request(options, (res) => {
        /*let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log(JSON.parse(data));
        });*/

    }).on("error", (err) => {
        console.log("Error: ", err.message);
        });

    req.write(data);
    req.end();
}