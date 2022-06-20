// /* eslint-disable array-callback-return */
// /* eslint-disable no-undef */

// const http = require('http');
// const fs = require('fs');
// // const { resolve } = require('path');
// // const { rejects } = require('assert');

// const data = {
//     name: 'Md Mahbub Alom',
//     email: 'hsmahbub@gmail.com',
//     Address: {
//         city: 'rajshahi',
//         country: 'Bangladesh',
//         districs: 'chapainwabganj',
//         Upjela: 'gomostapur',
//         municipality: 'Rohanpur',
//     },
// };

// const datastr = JSON.stringify(data);

// fs.writeFile('./New folder/newfile.json', datastr, (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// fs.readFile('./New folder/newfile.json', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// // const server = http.createServer((req, res) => {
// //     fs.readFile('./index.html', 'utf8', (err, data) => {
// //         res.end(data);
// //     });
// // });

// // server.listen(1212, () => {
// //     console.log('running');
// // });

// // const html = '../Js Booklist Project/index.html';
// // const css = '../Js Booklist Project/style.css';

// const server = http.createServer((req, res) => {
//     fs.readFile('../Js Booklist Project/index.html', (err, data) => {
//         console.log(req.url);
//         res.write(data);
//     });
// });

// server.listen(4000, () => {
//     console.log('server is running on port 4000');
// });

// const myPromise = new Promise((myresolve, myreject) => {
//     const name = 'md mahbub alom';

//     setTimeout(() => {
//         myresolve(name);
//     }, 3000);
// });

// myPromise.then((nam) => {
//     console.log(`i am ${nam}`);
// });

// // eslint-disable-next-line no-undef
// // fetch('https://jsonplaceholder.typicode.com/users')
// //     .then((response) => response.json())
// //     .then((body) => {
// //         body.map((data) => {
// //             const li = document.createElement('li');
// //             const text = `Name: ${data.name} Email: ${data.email} Website:${data.website} Phone:${data.phone}`;
// //             const textnode = document.createTextNode(text);
// //             li.appendChild(textnode);
// //             document.getElementById('myList').appendChild(li);
// //         });
// //     })

// // .catch((err) => {
// //     console.log(err);
// // });

// const express = require('express');

// const router = express.Router();

// router.get('/login', (req, res) => {
//     res.send(`this is login page`);
// });
// router.get('/logout', (req, res) => {
//     res.send('this is logout page');
// });
// router.get('/singUp', (req, res) => {
//     res.send('this is signUp page');
// });

// module.exports = router;
