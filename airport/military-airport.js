const Airport = require('./airport');
const MilitaryType = require('../types/military-type');

class MilitaryAirport extends Airport {
    constructor(planes) {
        super(planes);
    }

    get transportMilitaryPlanes() {
        return this.planes.filter((plane) => (plane.MilitaryType === MilitaryType.TRANSPORT));
    }

    get bomberMilitaryPlanes() {
        return this.planes.filter((plane) => (plane.MilitaryType === MilitaryType.BOMBER));
    }
}

module.exports = MilitaryAirport;
