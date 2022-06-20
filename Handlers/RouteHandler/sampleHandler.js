/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Md Mahbub Alom
 * Date: 07/12/2021
 *
 */
// module scaffholding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;

