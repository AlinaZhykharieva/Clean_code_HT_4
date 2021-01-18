const ExperimentalPlane = require('../planes/experimental-plane');
const ExperimentalTypes = require('../types/experimental-type');
const ClassificationType = require('../types/classification-type');

const experimentalPlanes = [
    new ExperimentalPlane('Bell X-14', 277, 482, 500, ExperimentalTypes.HIGH_ALTITUDE, ClassificationType.SECRET),
    new ExperimentalPlane('Ryan X-13 Vertijet', 560, 307, 500, ExperimentalTypes.VTOL, ClassificationType.TOP_SECRET),
];

module.exports = experimentalPlanes;
