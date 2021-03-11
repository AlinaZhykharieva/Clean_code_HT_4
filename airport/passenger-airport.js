const Airport = require('./airport');

class PassengerAirport extends Airport {
    constructor(planes) {
        super(planes);
    }

    get passengerPlaneWithMaxPassengersCapacity() {
        return this.planes.reduce((a, b) => (a.passengersCapacity > b.passengersCapacity ? a : b));
    }
}

module.exports = PassengerAirport;
