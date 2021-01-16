const MilitaryPlane = require('../planes/military-plane');
const MilitaryType = require('../types/military-type');

const militaryPlanes = [
    new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MilitaryType.BOMBER),
    new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MilitaryType.BOMBER),
    new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, MilitaryType.BOMBER),
    new MilitaryPlane('F-15', 1500, 12000, 10000, MilitaryType.FIGHTER),
    new MilitaryPlane('F-22', 1550, 13000, 11000, MilitaryType.FIGHTER),
    new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MilitaryType.TRANSPORT)
];

module.exports = militaryPlanes;
