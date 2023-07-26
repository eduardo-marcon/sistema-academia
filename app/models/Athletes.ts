import { Athlete } from "./Athlete.js";

export class Athletes {
    private athletes: Array<Athlete> = [];

    list() : Array<Athlete>{
        return this.athletes;
    }

    add(athlete: Athlete): void{
        this.athletes.push(athlete);
        console.log(this.list());
    }
}