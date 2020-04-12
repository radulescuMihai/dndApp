import { Component } from '@angular/core';
import { User } from './game/User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedUser:User;

  onLogIn(user:User):void{
    this.loggedUser = user;
  }
}
