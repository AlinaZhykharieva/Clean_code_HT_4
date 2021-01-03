const expect = require('chai').expect;

class airportValidators {
    validateSortingByMaxLoadCapacityFromLowToHeight(airport) {
        for (let i = 0; i < airport.getPlanes() - 1; i++) {
            expect(airport.getPlanes()[i] > airport.getPlanes()[i + 1]).to.be.false;
        }
    }
}

module.exports = airportValidators