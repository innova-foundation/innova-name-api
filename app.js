//
// Copyright (c) 2021 Carsen Klock
// Copyright (c) 2022 CircuitBreaker
//
var express = require("express");
var dns = require("dns");
const { Resolver } = require('dns');
var app = express();

app.listen(6337, () => {
 console.log("Innova Name API running on port 6337");
});

//Set the Innova Public DNS Servers
const resolver = new Resolver();
resolver.setServers(['140.82.28.21','140.82.36.129']);

// Innova Name API Serve
app.get('/name/', function(req, res) {
    var request = req.param('req');

    if (request)

    // This request will use the servers above
    resolver.resolve4(request, (err, addresses) => {
        console.log('address request: %j %j', addresses, request);
        if (typeof addresses != 'undefined') {
            reqip = addresses[0];
            res.send(reqip); //outputs requested IP from Innova DNS Servers
        }
        if (typeof addresses == 'undefined') {
            res.send('Invalid Request');
        }
    });
});
