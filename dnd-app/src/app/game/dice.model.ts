const path: string = 'C:/Documents/';

export class Dice {
    title: string;
    number: number;

    constructor(nr: number) {
        this.number = nr;
        this.title = "d" + nr;
    }

    roll(): number {
        return 1 + Math.floor(Math.random() * Math.floor(this.number));
    }
}