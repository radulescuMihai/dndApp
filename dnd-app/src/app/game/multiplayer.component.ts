import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './User.model';
import { DataSource } from '@angular/cdk/table';
import { Observable, of } from 'rxjs';
import { Sesion } from './sesion.model';
import { SesionService } from './sesion.service';
import { Character } from './Character.model';
import { MatDialog } from '@angular/material/dialog';
import { CreateHostDialogComponent } from './create-host-dialog.component';
import { CharacterService } from './character.service';
import { FormControl } from '@angular/forms';
import { CreateCharacterDialogComponent } from './create-character-dialog.component';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.css']
})
export class MultiplayerComponent implements OnInit {

  @Input() loggedUser: User;

  displayedColumns: string[] = ['player', 'campaign', 'join'];
  dataSource: GameDataSource;

  sesionList: Sesion[];
  selectedHost: Sesion;
  selectedChar: Character;
  characterList: Character[];
  playerList: Character[];
  formCharControl: FormControl = new FormControl();

  isGM:boolean = false;

  constructor(private sesionService: SesionService,
    private charService: CharacterService,
    public newHostDialog: MatDialog,
    public newCharDialog: MatDialog) { }

  ngOnInit(): void {
    this.charService.getAllCharacters(this.loggedUser)
      .subscribe(characters => this.characterList = characters);
    this.refreshHostList();

  }

  refresh() {
    this.dataSource = new GameDataSource(this.sesionList);
  }

  reLoad(){
    this.sesionService.getParticipants(this.selectedHost.hostName)
    .subscribe(participants => this.playerList = participants);
  }

  refreshHostList(): void {
    this.sesionService.getAllHosts().subscribe(hostList => {
      this.sesionList = hostList;
      this.refresh();
    });
  }

  createHost() {

    const dialogRef = this.newHostDialog.open(CreateHostDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(campName => {

      this.sesionService.createHost(this.loggedUser.name, campName)
        .subscribe(result => {
          this.selectedHost = new Sesion(this.loggedUser.name, campName);
          this.isGM = true;
        })
    });
  }

  newChar(): void {
    let newCaracter = new Character();
    newCaracter.user = this.loggedUser.name;
    const dialogRef = this.newCharDialog.open(CreateCharacterDialogComponent, {
      width: '550px',
      data: { caracter: newCaracter }
    });

    dialogRef.afterClosed().subscribe(newChar => {
      this.charService.create(newChar).subscribe(createdChar => {
        this.selectedChar = createdChar;
      }
      )
    });
  }

  onCharSelect(caracter: Character): void {
    this.selectedChar = caracter;
  }

  join(sesion: Sesion) {
    if (this.selectedChar == null) {
      alert("Please select a character first")
      return;
    }
    this.selectedHost = sesion;
    this.sesionService.joinHost(sesion, this.selectedChar)
      .subscribe(participants => {
        this.playerList = participants;
        this.selectedHost.players = participants;
      });
  }

  leaveGame():void{
    this.sesionService.leaveHost(this.selectedHost,this.selectedChar)
      .subscribe(result => {
        this.selectedHost = null;
        this.selectedChar = null;
      })
  }
  showDet(player:Character){
    console.log(player);
  }
}

export class GameDataSource extends DataSource<any>{

  constructor(public actions: Sesion[]) {
    super();
  }

  connect(): Observable<any[]> {
    return of(this.actions);
  }

  disconnect() { }
}
