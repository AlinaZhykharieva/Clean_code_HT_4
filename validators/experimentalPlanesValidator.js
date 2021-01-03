const expect = require('chai').expect;
const ClassificationLevel = require('../models/ClassificationLevel');

class experimentalPlanesValidator {
    validateThatAllExperimentalPlanesAreClassified (airport) {
        for (let experimentalPlane of airport.getExperimentalPlanes()) {
            expect(experimentalPlane.classificationLevel === ClassificationLevel.UNCLASSIFIED).to.be.false;
        }
    }
}

module.exports = experimentalPlanesValidator;