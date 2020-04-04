const path: string = 'C:/Documents/';

export class Dice {
    title: string;
    image: string;
    number: number;

    constructor(nr: number) {
        this.number = nr;
        this.title = "d" + nr;
        this.image = path + nr;
    }

    roll(): number {
        return 1 + Math.floor(Math.random() * Math.floor(this.number));
    }
}