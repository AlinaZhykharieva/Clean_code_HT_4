const Airport = require('./airport');
const MilitaryType = require('../types/military-type');

class MilitaryAirport extends Airport {
    constructor(planes) {
        super(planes);
    }

    get TransportMilitaryPlanes() {
        return this.planes.filter((plane) => (plane.MilitaryType === MilitaryType.TRANSPORT));
    }

    get BomberMilitaryPlanes() {
        return this.planes.filter((plane) => (plane.MilitaryType === MilitaryType.BOMBER));
    }
}

module.exports = MilitaryAirport;
