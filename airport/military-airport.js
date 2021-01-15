const Airport = require('./airport');
const MilitaryPlane = require('../planes/military-plane');
const MilitaryType = require('../types/military-type');

class MilitaryAirport extends Airport {
    constructor(planes) {
        super(planes);
    }

    get MilitaryPlanes() {
        const militaryPlanes = [];
        this.planes.forEach((plane) => {
            if (plane instanceof MilitaryPlane) {
                militaryPlanes.push(plane);
            }
        });
        return militaryPlanes;
    }

    get TransportMilitaryPlanes() {
        const transportMilitaryPlanes = [];
        const militaryPlanes = this.planes;
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (this.planes.MilitaryType() === MilitaryType.TRANSPORT) {
                transportMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return transportMilitaryPlanes;
    }

    get BomberMilitaryPlanes() {
        const bomberMilitaryPlanes = [];
        const militaryPlanes = this.MilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].MilitaryType() === MilitaryType.BOMBER) {
                bomberMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return bomberMilitaryPlanes;
    }
}

module.exports = MilitaryAirport;
