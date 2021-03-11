const { expect } = require('chai');
const MilitaryType = require('../types/military-type');

class MilitaryPlanesValidator {
    validateThatMilitaryPlanesHaveTransportType(airport) {
        airport.transportMilitaryPlanes.forEach((plane) => {
            expect(plane.militaryType).to.equal(MilitaryType.TRANSPORT);
        });
    }

    validateThatBomberTypeExist(airport) {
        airport.bomberMilitaryPlanes.forEach((plane) => {
            expect(plane.militaryType).to.equal(MilitaryType.BOMBER);
        });
    }
}

module.exports = MilitaryPlanesValidator;
