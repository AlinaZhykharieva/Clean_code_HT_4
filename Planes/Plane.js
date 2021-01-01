class Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }

    getMS() {
        return this.maxSpeed;
    }

    Get_Max_Flight_Distance() {
        return this.maxFlightDistance;
    }

    getMinLoadCapacity() {
        return this.maxLoadCapacity;
    }
}

module.exports = Plane;
