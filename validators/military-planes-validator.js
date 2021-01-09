const { expect } = require('chai');
const MilitaryType = require('../models/military-type');

class militaryPlanesValidator {
    validateThatMilitaryPlanesHaveTransportType(airport) {
        airport.getTransportMilitaryPlanes().forEach((plane) => {
            expect(plane.getMilitaryType()).to.deepEqual(MilitaryType.TRANSPORT);
        });
    }

    validateThatBomberTypeExist(airport) {
        airport.getBomberMilitaryPlanes().forEach((plane) => {
            expect(plane.getMilitaryType()).to.deepEqual(MilitaryType.BOMBER);
        });
    }
}

module.exports = militaryPlanesValidator;
