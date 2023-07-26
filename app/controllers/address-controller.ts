import { Address } from "../models/Address.js";

export class AddressController {

    private inputRoad: HTMLInputElement;
    private inputDistrict: HTMLInputElement;
    private inputNumber: HTMLInputElement;

    constructor(){
        this.inputRoad = document.querySelector(".road");
        this.inputDistrict = document.querySelector(".district");
        this.inputNumber = document.querySelector(".number");
    }

    createAddress(): Address{
        const road = this.inputRoad.value;
        const district = this.inputDistrict.value;
        const number = parseInt(this.inputNumber.value);

        return new Address(road, district, number);
    }


    clearFields(){
        this.inputRoad.value = '';
        this.inputDistrict.value = '';
        this.inputNumber.value = '';
    }
}