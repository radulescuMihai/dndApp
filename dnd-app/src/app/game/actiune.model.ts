import { Character } from './Character.model';

export class Turn{
    id:number;
    user:string;
    character:string;
    roll:string;
    total:number;
    action:string;
    mod:number;
    target:string;
    targetChar:Character
    comment:string;

}