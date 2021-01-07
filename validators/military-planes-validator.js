const { expect } = require('chai');
const MilitaryType = require('../models/military-type');

class militaryPlanesValidator {
    validateThatMilitaryPlanesHaveTransportType(airport) {
        airport.getTransportMilitaryPlanes().forEach((plane) => {
            expect(plane.getMilitaryType().to.deep.equal(MilitaryType.TRANSPORT));
        });
    }

    validateThatBomberTypeExist(airport) {
        airport.getBomberMilitaryPlanes().forEach((plane) => {
            expect(plane.getMilitaryType()).to.deep.equal(MilitaryType.BOMBER);
        });
    }
}

module.exports = militaryPlanesValidator;
