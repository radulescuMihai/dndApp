import { Stats } from 'fs';
import { HpDice } from './hp-dice';

export class MonsterType {

    type:string;
    hp:number;
    currentHp:number;
    tempHp:number;
    hpdices:HpDice;
    ac:number;
    initiative:number;
    speed:number;

    stats:Stats;
    race:string;
    class:string;

}