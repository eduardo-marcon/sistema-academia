export class Athlete {
    constructor(email, name, age, endereco, sex, payment) {
        this._email = email;
        this._name = name;
        this._age = age;
        this._address = endereco;
        this._sex = sex;
        this._payment = payment;
    }
    get email() {
        return this._email;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get address() {
        return this._address;
    }
    get sex() {
        return this._sex;
    }
    get payment() {
        return this._payment;
    }
}
