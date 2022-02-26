#  Name API Server

A basic NodeJS Innova DNS Name Server API, serves requests with the public IDNS servers

## Install Setup
npm install
node app.js

or

npm install
npm install -g forever
forever start app.js

## API Usage

API Server Runs on port 6337 by default

/name?req=google.com
/name?req=satoshi.btc
/name?req=stats.i
