class Airport {
    constructor(planes) {
        this._planes = planes;
    }

    get planes() {
        return this._planes;
    }

    sortByMaxProperty(property) {
        return this._planes.sort((a, b) => (a[property] - b[property]));
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
