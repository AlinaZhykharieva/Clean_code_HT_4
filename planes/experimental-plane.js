const Plane = require('./plane');

class experimentalPlane extends Plane {
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.classificationLevel = classificationLevel;
    }

    get classificationLevel() {
        return this.classificationLevel;
    }

    set classificationLevel(value) {
        this.classificationLevel = value;
    }
}

module.exports = experimentalPlane;
