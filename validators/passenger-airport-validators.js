const { expect } = require('chai');
const Airport = require('../airport/airport');
const Planes = require('../initData/init-passenger-planes');

const airport = new Airport(Planes);

class PassengerAirportValidators {
    validateSortingByMaxLoadCapacityFromLowToHeight() {
        const sortedAirport = Planes.sort((a, b) => (a.maxLoadCapacity - b.maxLoadCapacity));
        expect(Array.from(airport.sortByMaxProperty('maxLoadCapacity'))).to.deep.equal(sortedAirport);
    }
}

module.exports = PassengerAirportValidators;
