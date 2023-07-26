import { Address } from "./Address.js";

export class Athlete {

    private _email: string;
    private _name: string;
    private _age: number;
    private _address: Address;
    private _sex: string;
    private _payment: boolean;

    constructor(email: string, name: string, age: number, endereco: Address, sex: string, payment: boolean){
        this._email = email;
        this._name = name;
        this._age = age;
        this._address = endereco;
        this._sex = sex;
        this._payment = payment;
    }

    get email(): string {
        return this._email;
    }

    get name(): string {
        return this._name;
    }

    get age(): number {
        return this._age;
    }

    get address(): Address {
        return this._address;
    }

    get sex(): string {
        return this._sex;
    }

    get payment(): boolean {
        return this._payment;
    }


}