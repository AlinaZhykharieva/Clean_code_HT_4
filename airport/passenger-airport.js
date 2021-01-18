const Airport = require('./airport');
const PassengerPlanes = require('../initData/init-passenger-planes');

class PassengerAirport extends Airport {
    constructor(planes) {
        super(PassengerPlanes);
    }

    get PassengerPlaneWithMaxPassengersCapacity() {
        return this.planes.reduce((a, b) => (a.PassengersCapacity > b.PassengersCapacity ? a : b));
    }
}

module.exports = PassengerAirport;
