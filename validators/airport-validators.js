const { expect } = require('chai');
const Airport = require('../airport/airport');
const MilitaryPlane = require('../planes/military-plane');
const PassengerPlane = require('../planes/passenger-plane');
const MilitaryType = require('../models/military-type');
const ExperimentalPlane = require('../planes/experimental-plane');
const ExperimentalTypes = require('../models/experimental-type');
const ClassificationLevel = require('../models/classification-level');

const planes = [
    new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
    new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
    new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
    new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
    new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
    new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
    new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
    new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
    new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MilitaryType.BOMBER),
    new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MilitaryType.BOMBER),
    new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, MilitaryType.BOMBER),
    new MilitaryPlane('F-15', 1500, 12000, 10000, MilitaryType.FIGHTER),
    new MilitaryPlane('F-22', 1550, 13000, 11000, MilitaryType.FIGHTER),
    new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MilitaryType.TRANSPORT),
    new ExperimentalPlane('Bell X-14', 277, 482, 500, ExperimentalTypes.HIGH_ALTITUDE, ClassificationLevel.SECRET),
    new ExperimentalPlane('Ryan X-13 Vertijet', 560, 307, 500, ExperimentalTypes.VTOL, ClassificationLevel.TOP_SECRET),
];
const airport = new Airport(planes);

class airportValidators {
    validateSortingByMaxLoadCapacityFromLowToHeight() {
        const sortedAirport = new Airport(planes
            .sort((a, b) => a.getMaxLoadCapacity() - b.getMaxLoadCapacity()));
        expect(airport.sortByMaxLoadCapacity()).to.deep.equal(sortedAirport);
    }
}

module.exports = airportValidators;
