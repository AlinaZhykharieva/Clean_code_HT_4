const Airport = require('./airport');
const PassengerPlane = require('../planes/passenger-plane');

class PassengerAirport extends Airport {
    constructor(planes) {
        super(planes);
    }

    get PassengerPlaneWithMaxPassengersCapacity() {

        return this.planes.reduce((a, b) => (a.PassengersCapacity > b.PassengersCapacity ? a : b));
    }
}

module.exports = PassengerAirport;
