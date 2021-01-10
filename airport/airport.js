const PassengerPlane = require('../planes/passenger-plane');
const MilitaryPlane = require('../planes/military-plane');
const MilitaryType = require('../models/military-type');
const experimentalPlane = require('../planes/experimental-plane');

class Airport {
    constructor(planes) {
        this.planes = planes;
    }

    getPassengerPlanes() {
        const passengerPlanes = [];
        for (const plane of this.planes) {
            if (plane instanceof PassengerPlane) {
                passengerPlanes.push(plane);
            }
        }
        return passengerPlanes;
    }

    getMilitaryPlanes() {
        const militaryPlanes = [];
        this.planes.forEach((plane) => {
            if (plane instanceof MilitaryPlane) {
                militaryPlanes.push(plane);
            }
        });
        return militaryPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        const passengerPlanes = this.getPassengerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];
        for (let i = 0; i < passengerPlanes.length; i++) {
            if (passengerPlanes[i].getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = passengerPlanes[i];
            }
        }
        return planeWithMaxCapacity;
    }

    getTransportMilitaryPlanes() {
        const transportMilitaryPlanes = [];
        const militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType() === MilitaryType.TRANSPORT) {
                transportMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return transportMilitaryPlanes;
    }

    getBomberMilitaryPlanes() {
        const bomberMilitaryPlanes = [];
        const militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType() === MilitaryType.BOMBER) {
                bomberMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return bomberMilitaryPlanes;
    }

    getExperimentalPlanes() {
        const experimentalPlanes = [];
        this.planes.forEach((plane) => {
            if (plane instanceof experimentalPlane) {
                experimentalPlanes.push(plane);
            }
        });

        return experimentalPlanes;
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) => ((a.getMaxFlightDistance() > b.getMaxFlightDistance()) ? 1 : -1));
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) => ((a.getMaxSpeed() > b.getMaxSpeed()) ? 1 : -1));
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => ((a.getMaxLoadCapacity() > b.getMaxLoadCapacity()) ? 1 : -1));
        return this;
    }

    getPlanes() {
        return this.planes;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
