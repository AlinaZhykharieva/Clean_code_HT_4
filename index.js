const MilitaryAirport = require('./airport/military-airport');
const PassengerAirport = require('./airport/passenger-airport');
const Planes = require('./initData/init-passenger-planes');

(function run() {
    const militaryAirport = new MilitaryAirport(Planes);
    const passengerAirport = new PassengerAirport(Planes);
    console.log(`Military airport sorted by max distance: ${MilitaryAirport.print(militaryAirport.sortByMaxDistance())}`);
    console.log(`Passenger airport sorted by max speed: ${PassengerAirport.print(passengerAirport.sortByMaxSpeed())}`);
    console.log(`Plane with max passenger capacity: 
    ${PassengerAirport.print(passengerAirport.getPassengerPlaneWithMaxPassengersCapacity())}`);
}());
