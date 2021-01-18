const Airport = require('./airport');
const ExperimentalPlanes = require('../initData/init-experimental-plane');

class ExperimentalAirport extends Airport {
    constructor(planes) {
        super(ExperimentalPlanes);
    }
}

module.exports = ExperimentalAirport;
