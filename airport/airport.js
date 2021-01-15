class Airport {
    constructor(planes) {
        this.planes = planes;
    }

    getPlanes() {
        return this.planes;
    }

    getTypePlane(planes, type) {

        return planes.filter((plane) => (plane.instanceOf(type)));
    }

    static sortByMaxProperty(property) {
        return this.planes.sort((a, b) => (a[property] - b[property]));
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
