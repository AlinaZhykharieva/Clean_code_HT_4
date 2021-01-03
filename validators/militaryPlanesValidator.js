const expect = require('chai').expect;
const MilitaryType = require('../models/MilitaryType');

class militaryPlanesValidator {
    validateThatMilitaryPlanesHaveTransportType(airport) {
        for (let militaryPlane of airport.getTransportMilitaryPlanes()) {
            expect(militaryPlane.getMilitaryType()).to.deep.equal(MilitaryType.TRANSPORT);
        }
    }

    validateThatBomberTypeExist(airport) {
        for (let militaryPlane of airport.getBomberMilitaryPlanes()) {
            expect(militaryPlane.getMilitaryType() === MilitaryType.BOMBER).to.be.true;
        }
    }
}

module.exports = militaryPlanesValidator;