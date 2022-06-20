/*
 * Title: uptime Monitoring Application
 * Description: A RestFul API to Monitor up or down time of user defined links
 * Author: Md Mahbub Alom
 * Date: 07/12/2021
 *
 */

// dependencies
const http = require('http');
const express = require('express')

const { handleReqRes } = require('./hepers/handleReqRes');
const data = require('./lib/data');
const environments = require('./hepers/Env');
// app object - module scaffolding
const app = {};

// testing file system
// @TODO: pore muche dibo
data.create(
    'test',
    'newFile',
    {
        name: 'Bangladesh',
        language: 'Bangla',
    },
    (err) => {
        console.log(`error was`, err);
    }
);

// creat server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environments.port, () => {
        console.log(`listening to port ${environments.port}`);
    });
};
// handle Requenst Response
app.handleReqRes = handleReqRes;

// start server
app.createServer();

app.use(express.static(`${__dirname}/index/`));
app.get('/', (req, res) => {
    res.send('this is home page');
    console.log(req.body.toString().split(' '));
});
app.post('/', (req, res) => {
    res.send('this is home page with post method');
});
app.listen(3000, () => {
    console.log('listening to port 3000');
});


const req = require('express/lib/request');
const router = require('./module');

// const app = express();
// app.use('/user', router, (req, res) => {
//     res.send('hello user');
// });
// app.listen(3000, () => {
//     console.log('listening to port 3000');
// });
