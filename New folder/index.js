const path = require('path');
const fs = require('fs');
const os = require('os');
const newArray = require('./index2');

setTimeout(() => {
    console.log('what are you doing');
}, 1000);
console.log(newArray.person);
fs.readFile('index.html', (err, data) => {
    console.log(data.toString());
});
console.log('hello programmer');

const eventEmitter = require('events');

const emitter = new eventEmitter();
// register a event
emitter.on('bellRing', (theWay) => {
    console.log(`We have ${theWay}`);
});
// raise an event
emitter.emit('bellRing', 'to learn programming');

create server
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello programmars');
        res.end();
    } else if (req.url === '/service') {
        res.write('This is the service page');
        res.end();
    } else {
        res.write('404 error');
        res.end();
    }
});
server.listen(5000);

Strean and buffer
 read stream

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <form action="/service" method="post">
                <input type="text" name="message">
            </form>
        </body>
        </html>`);
        res.end();
    } else if (req.url === '/service' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('the process is finished');

            const finalData = Buffer.concat(body).toString();
            const myFile = fs.createWriteStream(`${__dirname}'/text.txt'`);

            res.write('Thanks for submitting');
            res.end();
        });
    } else {
        res.write('not found');
        res.end();
    }
});
server.listen(2000);

const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/sawarText.txt`);
ourReadStream.on('data', (chunk) => {
    ourWriteStream.write(chunk);
});

const assert = require('assert');

console.log(assert.ok(50 < 70), 'this is the ex of assert');
const age = 50;
const age1 = '50';
const asserter = assert.not(age, age1, 'these value are not same')
console.log(asserter)
