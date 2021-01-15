const Airport = require('./airport');
const ExperimentalPlane = require('../planes/experimental-plane');

class ExperimentalAirport extends Airport {
    constructor(planes) {
        super(planes);
    }

    getExperimentalPlanes() {
        const experimentalPlanes = [];
        this.planes.forEach((plane) => {
            if (plane instanceof ExperimentalPlane) {
                experimentalPlanes.push(plane);
            }
        });

        return experimentalPlanes;
    }
}

module.exports = ExperimentalAirport;
