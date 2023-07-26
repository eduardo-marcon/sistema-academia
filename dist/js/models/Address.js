export class Address {
    constructor(road, district, number) {
        this._road = road;
        this._district = district;
        this._number = number;
    }
    get road() {
        return this._road;
    }
    get district() {
        return this._district;
    }
    get number() {
        return this._number;
    }
}
