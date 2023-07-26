import { Athlete } from "../models/Athlete.js";
import { Athletes } from "../models/Athletes.js";
import { AddressController } from "./address-controller.js";
export class AthleteController {
    constructor() {
        this.athletes = new Athletes();
        this.inputEmail = document.querySelector(".email");
        this.inputName = document.querySelector(".name");
        this.inputAge = document.querySelector(".age");
        this.inputSex = document.querySelector('input[type="radio"]');
        this.inputPayment = document.querySelector(".payment");
    }
    createAthlete() {
        const email = this.inputEmail.value;
        const name = this.inputName.value;
        const age = parseInt(this.inputAge.value);
        const sex = this.inputSex.value;
        const isPayment = this.inputPayment.checked;
        const address = new AddressController();
        return new Athlete(email, name, age, address.createAddress(), sex, isPayment);
    }
    addAthlete() {
        const athleteAux = this.createAthlete();
        this.athletes.add(athleteAux);
        this.clearField();
    }
    clearField() {
        this.inputEmail.value = '';
        this.inputName.value = '';
        this.inputAge.value = '';
        this.inputSex.value = '';
        this.inputPayment.value = '';
        const address = new AddressController();
        address.clearFields();
        this.inputEmail.focus();
    }
}
