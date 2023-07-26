export class Address {

    private _road: string;
    private _district: string;
    private _number: number;

    constructor(road: string, district: string, number: number){
        this._road = road;
        this._district = district;
        this._number = number;
    }

    get road(): string {
        return this._road;
    }

    get district(): string {
        return this._district;
    }

    get number(): number {
        return this._number;
    }
}