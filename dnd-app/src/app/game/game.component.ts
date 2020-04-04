import { Component, OnInit } from '@angular/core';
import { Action } from './actiune.model'
import { Dice } from './dice.model'
import {  DataSource } from "@angular/cdk/collections";
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  displayedColumns: string[] = ['player', 'result', 'action', 'comment'];
  dataSource: GameDataSource;

  resultsList: Action[] = [];

  dices: Dice[] = [];
  selectedDices: Dice[] = [];

  actionList: string[] = ['Attack', 'Cast Spell', 'Dodge', 'Saving Throw', 'Ability Check'];

  formNameControl = new FormControl ();
  formActionControl = new FormControl ();
  formCommentControl = new FormControl ();

  constructor() { }

  ngOnInit(): void {
  }

  refresh(){
    console.log(this.resultsList)
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
    let result:string = "";
    let roll: number = 0;
    let total: number = 0;
    for (let d of this.selectedDices){
      console.log(d);

      roll = d.roll();
      total += roll;
      result += d.title +": "+ roll +"\n";
    }
    result += "Total: " + total;
    let action = new Action();
    action.user = this.formNameControl.value
    action.rollResults = result;
    action.action = this.formActionControl.value;
    action.comment = this.formCommentControl.value

    console.log(result);

    this.resultsList.push(action);
    this.refresh();
  }

}

export class GameDataSource extends DataSource<any>{

  constructor(public actions: Action[]){
    super();
  }

  connect(): Observable<any[]> {
    return of(this.actions);
  }



  disconnect() { }
}
