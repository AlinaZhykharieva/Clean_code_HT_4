const Airport = require('./airport');

class ExperimentalAirport extends Airport {
    constructor(planes) {
        super(planes);
    }
}
module.exports = ExperimentalAirport;
