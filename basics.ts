export class People {
    constructor(private first_name: string, private last_name: string) {
    }

    get_name() {
        return this.first_name + " " + this.last_name;
    }
}