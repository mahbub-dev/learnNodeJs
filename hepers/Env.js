/*
 * Title: Environment
 * Description:
 * Handle all environment related things
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */
// deopendecncies

// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    evnName: 'staging',
};

environments.production = {
    port: 5000,
    envName: 'production',
};
// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
