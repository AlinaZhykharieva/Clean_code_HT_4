const { expect } = require('chai');
const MilitaryType = require('../types/military-type');

class militaryPlanesValidator {
    validateThatMilitaryPlanesHaveTransportType(airport) {
        airport.TransportMilitaryPlanes.forEach((plane) => {
            expect(plane.MilitaryType).to.deep.equal(MilitaryType.TRANSPORT);
        });
    }

    validateThatBomberTypeExist(airport) {
        airport.BomberMilitaryPlanes.forEach((plane) => {
            expect(plane.MilitaryType).to.deep.equal(MilitaryType.BOMBER);
        });
    }
}

module.exports = militaryPlanesValidator;
