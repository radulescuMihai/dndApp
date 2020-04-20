import { Character } from './Character.model';

export class Sesion{
    hostName: string;
    campaignName: string;
    players: Character[];

    constructor(hostName: string, campaignName: string){
        this.hostName = hostName;
        this.campaignName = campaignName;
        this.players = [];            
                }
}