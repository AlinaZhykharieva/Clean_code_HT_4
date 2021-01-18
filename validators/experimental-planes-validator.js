const { expect } = require('chai');
const ClassificationLevel = require('../types/classification-type');

class experimentalPlanesValidator {
    validateThatAllExperimentalPlanesAreClassified(airport) {
        airport.Planes.forEach((plane) => {
            expect(plane.ClassificationLevel).not.equal(ClassificationLevel.UNCLASSIFIED);
        });
    }
}

module.exports = experimentalPlanesValidator;
