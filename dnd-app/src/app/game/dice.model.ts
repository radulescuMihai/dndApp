const path: string = 'C:/Documents/';

export class Dice {
    title: string;
    number: number;

    constructor(nr: number) {
        this.number = nr;
        this.title = "d" + nr;
    }

    roll(): number {
        // let seed = new Date().getTime() % 100;
        let seed =  (Date.now() % 100)/100.;
        return 1 + Math.floor(seed * Math.floor(this.number));
        // return 1 + Math.floor(Math.random() * Math.floor(this.number));
    }
}