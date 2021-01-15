const Airport = require('./airport');
const PassengerPlane = require('../planes/passenger-plane');

class PassengerAirport extends Airport {
    constructor(planes) {
        super(planes);
    }

    get PassengerPlanes() {
        const passengerPlanes = [];
        for (const plane of this.planes) {
            if (plane instanceof PassengerPlane) {
                passengerPlanes.push(plane);
            }
        }
        return passengerPlanes;
    }

    get PassengerPlaneWithMaxPassengersCapacity() {
        const passengerPlanes = this.PassengerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];
        for (let i = 0; i < passengerPlanes.length; i++) {
            if (passengerPlanes[i].PassengersCapacity() > planeWithMaxCapacity.PassengersCapacity()) {
                planeWithMaxCapacity = passengerPlanes[i];
            }
        }
        return planeWithMaxCapacity;
    }
}

module.exports = PassengerAirport;
