const Plane = require('./plane');

class PassengerPlane extends Plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.passengersCapacity = passengersCapacity;
    }

    get PassengersCapacity() {
        return this.passengersCapacity;
    }
}

module.exports = PassengerPlane;
