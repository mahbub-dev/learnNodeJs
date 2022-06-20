// dependecies
const fs = require('fs');
const path = require('path');

// module scaffolding
const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, './../data/');

// open file
lib.create = (dir, file, data, callback) => {
    // open file for writting
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert data to string
            const stringData = JSON.stringify(data);
            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if (!err3) {
                            callback(false);
                        }
                    });
                } else {
                    callback('Error writing to new file!');
                }
            });
        } else {
            callback(err);
        }
    });
};
module.exports = lib;
