class Airport {
    constructor(planes) {
        this.planes = planes;
    }

    get Planes() {
        return this.planes;
    }

    sortByMaxProperty(property) {
        return this.planes.sort((a, b) => (a[property] > b[property] ? 1 : -1));
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
