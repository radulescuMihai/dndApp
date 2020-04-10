import { Component, OnInit } from '@angular/core';
import { Turn } from './actiune.model'
import { Dice } from './dice.model'
import { DataSource } from "@angular/cdk/collections";
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  displayedColumns: string[] = ['player', 'result', 'action', 'comment'];
  dataSource: GameDataSource;

  resultsList: Turn[] = [];

  dices: Dice[] = [];
  selectedDices: Dice[] = [];

  actionList: string[] = ['Attack', 'Cast Spell', 'Dodge', 'Saving Throw', 'Ability Check', 'Take Damege', 'Heal'];

  formNameControl = new FormControl();
  formActionControl = new FormControl();
  formCommentControl = new FormControl();

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
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

  roll(): void {
    let rollResult: string = "";
    let roll: number = 0;
    let total: number = 0;
    for (let d of this.selectedDices) {
      roll = d.roll();
      total += roll;
      rollResult += d.title + ": " + roll + "\n";
    }
    rollResult += "Total: " + total;
    let turnResult = new Turn();
    turnResult.user = this.formNameControl.value
    turnResult.roll = rollResult;
    turnResult.action = this.formActionControl.value;
    turnResult.comment = this.formCommentControl.value

    console.log("Sending turn tu backend...")
    this.gameService.create(turnResult).subscribe( turn =>{
      console.log("Sent succesfully!")

      this.resultsList.unshift(turn);
      this.refresh();
    })
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
