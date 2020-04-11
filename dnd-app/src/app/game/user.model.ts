export class User{
    name: string;
    pass:string;

    constructor(username:string){
        this.name = username;
        this.pass = "";
    }
}