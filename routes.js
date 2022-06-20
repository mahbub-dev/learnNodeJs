/*
 * Title: Routes
 * Description: Application Routes
 * Author: Md Mahbub Alom
 * Date: 07/12/2021
 *
 */

// devDep
const { sampleHandler } = require('./Handlers/RouteHandler/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
