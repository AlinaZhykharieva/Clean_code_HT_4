// eslint-disable-next-line import/no-extraneous-dependencies
const { expect } = require('chai');
const ClassificationLevel = require('../models/classification-level');

class experimentalPlanesValidator {
    validateThatAllExperimentalPlanesAreClassified(airport) {
        airport.getExperimentalPlanes().forEach((plane) => {
            expect(plane.classificationLevel).to.not.equal(ClassificationLevel.UNCLASSIFIED);
        });
    }
}

module.exports = experimentalPlanesValidator;
