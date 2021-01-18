const MilitaryAirport = require('./airport/military-airport');
const PassengerAirport = require('./airport/passenger-airport');
const PassengerPlanes = require('./initData/init-passenger-planes');
const MilitaryPlanes = require('./initData/init-military-planes');

(function run() {
    const militaryAirport = new MilitaryAirport(PassengerPlanes);
    const passengerAirport = new PassengerAirport(MilitaryPlanes);
    console.log(`Military airport sorted by max distance: ${MilitaryAirport.print(militaryAirport.sortByMaxProperty('maxFlightDistance'))}`);
    console.log(`Passenger airport sorted by max speed: ${PassengerAirport.print(passengerAirport.sortByMaxProperty('maxSpeed'))}`);
    console.log(`Plane with max passenger capacity: 
    ${PassengerAirport.print(passengerAirport.PassengerPlaneWithMaxPassengersCapacity)}`);
}());
