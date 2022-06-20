/*
 * Title: Not Found Handler
 * Description: Not Found Handler
 * Author: Md Mahbub Alom
 * Date: 07/12/2021
 *
 */
// module scaffholding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
