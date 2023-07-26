export class Athletes {
    constructor() {
        this.athletes = [];
    }
    list() {
        return this.athletes;
    }
    add(athlete) {
        this.athletes.push(athlete);
        console.log(this.list());
    }
}
