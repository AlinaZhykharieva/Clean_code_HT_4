class plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }

    get model() {
        return this.model;
    }

    set model(value) {
        this.model = value;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    // set maxSpeed(value) {
    //     this.maxSpeed = value;
    // }

    getMaxFlightDistance() {
        return this.maxFlightDistance;
    }

    set maxFlightDistance(value) {
        this.maxFlightDistance = value;
    }

    getMinLoadCapacity() {
        return this.maxLoadCapacity;
    }

    get maxLoadCapacity() {
        return this.maxLoadCapacity;
    }

    set maxLoadCapacity(value) {
        this.maxLoadCapacity = value;
    }
}

module.exports = plane;
