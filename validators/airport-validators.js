const { expect } = require('chai');
const Airport = require('../airport/airport');
const Planes = require('../initData/init-planes');

const airport = new Airport(Planes);

class airportValidators {
    validateSortingByMaxLoadCapacityFromLowToHeight() {
        console.log(airport.sortByMaxLoadCapacity());
        const sortedAirport = new Airport(Planes
            .sort((a, b) => a.MaxLoadCapacity() - b.MaxLoadCapacity()));
        expect(airport.sortByMaxLoadCapacity()).to.deep.equal(sortedAirport);
    }
}

module.exports = airportValidators;
