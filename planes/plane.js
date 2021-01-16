class plane {
    constructor({model, maxSpeed, maxFlightDistance, maxLoadCapacity}) {
        this._model = model;
        this._maxSpeed = maxSpeed;
        this._maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }

    get MaxSpeed() {
        return this._maxSpeed;
    }

    get MaxFlightDistance() {
        return this._maxFlightDistance;
    }

    get MaxLoadCapacity() {
        return this._maxLoadCapacity;
    }
}

module.exports = plane;
