const express = require('express');
const http = require('http');
const path = require('path');
const riders = require('./Riders');
const drivers = require('./Drivers');
const matches = require('./Matches');


const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//API Routes
app.use('/request', require('./routes/api/request'));

function linearDistance(x, y, x0, y0) {
  return Math.sqrt((x -= x0) * x + (y -= y0) * y);
}

function runningFunction() 
{
  var matcher = setInterval(function() {
    riders.forEach(rider => {
      var matchedDriverIndex;
      
      var distance = Number.MAX_VALUE;
  
      for (i in drivers)
      {
        var newDistance = linearDistance(parseFloat(rider.startingX), parseFloat(rider.startingY), parseFloat(drivers[i].startingX), parseFloat(drivers[i].startingY));
  
        if (newDistance<distance)
        {
          distance = newDistance;
          matchedDriverIndex = i;
        }
      };

  
      var cost = distance*2;
  
      var match = {
        "riderName" : rider.name,
        "driverName" : drivers[matchedDriverIndex].name,
        "carNumber" : drivers[matchedDriverIndex].carNumber,
        "cost" : cost
      };
  
      matches.push(match);
  
      drivers.splice(matchedDriverIndex, 1);
  
    });
  
    if (matches.length!=0)
    {
      for (i in matches)
      {
        //console.log(matches[i]);
        const data = JSON.stringify({
          riderName : matches[i].riderName,
          driverName : matches[i].driverName,
          carNumber : matches[i].carNumber,
          cost : matches[i].cost
        });

        console.log(data);
        sendMatches(data);
      }
    }

    //console.log(matches);
    console.log("Data sent to com service");
  
    //console.log(matches.length);
    matches.length = 0;
    riders.length = 0;
    drivers.length = 0;
  
    /*Rating.find()
      .then((result) => {
        console.log(result);  
      });*/

  }, 5000);
}

function sendMatches(data)
{
    const http = require('http');

    const options = {
        hostname: 'localhost',
        port: '7700',
        path: '/sendMatch',
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

runningFunction();

const PORT = process.env.PORT || 7600;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
