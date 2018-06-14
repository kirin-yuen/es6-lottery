const yargs = require('yargs');

const args = yargs.option('production', {
    boolean: true,
    default: false,
    describe: ''
}).option('watch', {
    boolean: true,
    default: false,
    describe: ''
}).option('verbose', {
    boolean: true,
    default: false,
    describe: ''
}).option('sourcemaps', {
    describe: ''
}).option('ports', {
    string: true,
    default: 8080,
    describe: ''
}).argv;

module.exports = args;