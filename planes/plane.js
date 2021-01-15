class plane {
    constructor({model, maxSpeed, maxFlightDistance, maxLoadCapacity}) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }

    get MaxSpeed() {
        return this.maxSpeed;
    }

    get MaxFlightDistance() {
        return this.maxFlightDistance;
    }

    get MaxLoadCapacity() {
        return this.maxLoadCapacity;
    }
}

module.exports = plane;
