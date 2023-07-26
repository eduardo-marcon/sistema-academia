import { AthleteController } from "./controllers/athlete-controller.js";

const athleteController = new AthleteController();

const form = document.querySelector(".form");
form.addEventListener('submit', event => {
    event.preventDefault();
    athleteController.addAthlete();
});


