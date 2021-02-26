const { expect } = require('chai');
const PassengerPlanes = require('../initData/init-passenger-planes');
const MilitaryPlanes = require('../initData/init-military-planes');
const ExperimentalPlanes = require('../initData/init-experimental-plane');
const PassengerPlane = require('../planes/passenger-plane');
const MilitaryAirport = require('../airport/military-airport');
const PassengerAirport = require('../airport/passenger-airport');
const ExperimentalAirport = require('../airport/experimental-airport');
const MilitaryPlanesValidator = require('../validators/military-planes-validator');
const AirportValidator = require('../validators/passenger-airport-validators');
const ExperimentalPlanesValidator = require('../validators/experimental-planes-validator');

describe('Test planes that located in airport', () => {
    const passengerPlanesValidator = new AirportValidator();
    const militaryPlanesValidator = new MilitaryPlanesValidator();
    const experimentalPlanesValidator = new ExperimentalPlanesValidator();
    const planeWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);

    it('Check that airport has military planes with transport type', () => {
        const airport = new MilitaryAirport(MilitaryPlanes);
        militaryPlanesValidator.validateThatMilitaryPlanesHaveTransportType(airport);
    });

    it('Check that passenger plane has max capacity', () => {
        const airport = new PassengerAirport(PassengerPlanes);
        expect(airport.passengerPlaneWithMaxPassengersCapacity).to.deep.equal(planeWithMaxPassengerCapacity);
    });

    it('Check that planes sorted by max load capacity from low to height', () => {
        const airport = new PassengerAirport(PassengerPlanes);
        airport.sortByMaxProperty('maxLoadCapacity');
        passengerPlanesValidator.validateSortingByMaxLoadCapacityByAscending(airport);
    });

    it('Check that military planes have at least one bomber in military planes', () => {
        const airport = new MilitaryAirport(MilitaryPlanes);
        militaryPlanesValidator.validateThatBomberTypeExist(airport);
    });

    it('Check that experimental planes has classification level higher than unclassified', () => {
        const airport = new ExperimentalAirport(ExperimentalPlanes);
        experimentalPlanesValidator.validateThatAllExperimentalPlanesAreClassified(airport);
    });
});
