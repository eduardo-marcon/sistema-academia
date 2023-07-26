import { Address } from "../models/Address.js";
export class AddressController {
    constructor() {
        this.inputRoad = document.querySelector(".road");
        this.inputDistrict = document.querySelector(".district");
        this.inputNumber = document.querySelector(".number");
    }
    createAddress() {
        const road = this.inputRoad.value;
        const district = this.inputDistrict.value;
        const number = parseInt(this.inputNumber.value);
        return new Address(road, district, number);
    }
    clearFields() {
        this.inputRoad.value = '';
        this.inputDistrict.value = '';
        this.inputNumber.value = '';
    }
}
