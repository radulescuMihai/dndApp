const path:string = 'C:/Documents/';

export class Dice {
    title:string;
    image:string;



    constructor( name:string){
        this.title = name;
        this.image = path + name;
    }
}