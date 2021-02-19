const Plane = require('./plane');

class ExperimentalPlane extends Plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, classificationLevel) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.classificationLevel = classificationLevel;
    }

    get classificationLevel() {
        return this.classificationLevel;
    }
}

module.exports = ExperimentalPlane;
