import { Component, OnInit, Input } from '@angular/core';
import { Turn } from './actiune.model'
import { Dice } from './dice.model'
import { DataSource } from "@angular/cdk/collections";
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { GameService } from './game.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateCharacterDialogComponent } from './create-character-dialog.component';
import { User } from './User.model';
import { CharacterService } from './character.service';
import { Character } from './Character.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() loggedUser: User;

  displayedColumns: string[] = ['player', 'character', 'action', 'target', 'result', 'mod', 'comment'];
  dataSource: GameDataSource;

  resultsList: Turn[] = [];

  dices: Dice[] = [];
  selectedDices: Dice[] = [];

  actionList: string[] = ['Initiative', 'Attack', 'Cast Spell', 'Dodge', 'Saving Throw', 'Ability Check', 'Take Damege', 'Heal'];

  formCharNameControl = new FormControl();
  formTargetControl = new FormControl();
  formActionControl = new FormControl();
  formModControl = new FormControl();
  formCommentControl = new FormControl();
  formCharControl = new FormControl();

  characterList: Character[];
  selectedChar: Character;

  constructor(private gameService: GameService,
    private charService: CharacterService,
    public newCharDialog: MatDialog) { }

  ngOnInit(): void {
    this.charService.getAllCharacters(this.loggedUser)
      .subscribe(characters => this.characterList = characters);

    this.gameService.getAllTurns().subscribe(turnList => {
      this.resultsList = turnList;
      this.refresh();
    });

  }

  refresh() {
    this.dataSource = new GameDataSource(this.resultsList);
  }

  addDice(dice: number): void {
    let d = new Dice(dice);
    this.selectedDices.push(d)
  }

  deleteDice(nr: number) {
    this.selectedDices.splice(nr, 1);
  }

  newChar(): void {
    let newCaracter = new Character();
    newCaracter.user = this.loggedUser.name;
    const dialogRef = this.newCharDialog.open(CreateCharacterDialogComponent, {
      width: '550px',
      data: { caracter: newCaracter }
    });

    dialogRef.afterClosed().subscribe(newChar => {
      console.log("Sent:")
      console.log(newChar)
      this.charService.create(newChar).subscribe(createdChar => {
        console.log("Recived:")
        console.log(createdChar)
        this.selectedChar = createdChar;
        this.formCharNameControl.setValue(createdChar);
      }
      )
    });
  }

  onCharSelect(caracter: Character): void{
    this.selectedChar = caracter;
  }

  selectChar(): void {
    if(this.selectedChar){
      this.formCharNameControl.setValue(this.selectedChar.name)
      document.getElementById('controlTable').style.display = 'block';
    }
  }

  roll(): void {
    let rollResult: string = "";
    let roll: number = 0;
    let total: number = 0;
    for (let d of this.selectedDices) {
      roll = d.roll();
      total += roll;
      rollResult += d.title + ": " + roll + "\n";
    }
    total += this.formModControl.value;
    rollResult += "Total: " + total;
    let turnResult = new Turn();
    turnResult.character = this.formCharNameControl.value
    turnResult.target = this.formTargetControl.value
    turnResult.roll = rollResult;
    turnResult.mod = this.formModControl.value
    turnResult.action = this.formActionControl.value;
    turnResult.comment = this.formCommentControl.value
    turnResult.user = this.loggedUser.name;

    this.gameService.create(turnResult).subscribe(turn => {
      this.resultsList.unshift(turn);
      this.refresh();
    });
    // this.reLoad();
  }

  reLoad() {
    this.gameService.getAllTurns().subscribe(turnList => {
      this.resultsList = turnList;
      this.refresh();
    });
  }
}

export class GameDataSource extends DataSource<any>{

  constructor(public actions: Turn[]) {
    super();
  }

  connect(): Observable<any[]> {
    return of(this.actions);
  }

  disconnect() { }
}