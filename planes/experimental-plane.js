const Plane = require('./plane');

class experimentalPlane extends Plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._classificationLevel = classificationLevel;
    }

    get ClassificationLevel() {
        return this._classificationLevel;
    }
}

module.exports = experimentalPlane;
