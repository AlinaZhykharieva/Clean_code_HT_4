const Plane = require('./plane');

class ExperimentalPlane extends Plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, classificationLevel) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._classificationLevel = classificationLevel;
    }

    get classificationLevel() {
        return this._classificationLevel;
    }
}

module.exports = ExperimentalPlane;
