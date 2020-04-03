import { Component, OnInit } from '@angular/core';
import { Action } from './actiune.model'
import { Dice } from './dice.model'
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  displayedColumns: string[] = ['player', 'result', 'action', 'comment'];
  dataSource: GameDataSource;

  dices: Dice[] = [];
  selectedDices: Dice[] = [];

  actionList: string[] = ['Attack', 'Cast Spell', 'Dodge', 'Saving Throw', 'Ability Check'];

  constructor() { }

  ngOnInit(): void {
  }

  addDice(dice: string): void {
    let d = new Dice(dice);
    this.selectedDices.push(d)
    console.log(this.selectedDices);
  }

  deleteDice(nr: number) {
    this.selectedDices.splice(nr, 1);
  }

  roll(): void {

  }

}

class GameDataSource implements DataSource<Action>{
  connect(collectionViewer: CollectionViewer): Observable<Action[]> {
    throw new Error("Method not implemented.");
  }



  disconnect() { }
}
