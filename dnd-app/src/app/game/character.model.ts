import { User } from './user.model';

export class Character{
    name:string;
    hp:number;
    currentHp:number;
    tempHp:number;
    ac:number;
    initiative:number;
    speed:number;
    prof:number;
    hpDiceNr:number;
    hpDicesLeft:number;

    user:User;
    race:string;
    class:string;
    lvl:number;
    aligment:string;
    experience:number;

}