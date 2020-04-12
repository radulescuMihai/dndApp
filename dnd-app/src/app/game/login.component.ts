import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from './User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formNewUserControl = new FormControl();

  @Output() loggedUser = new EventEmitter<User>();
  username: string;
  characterList: string[];
  selectedChar: string;

  constructor(private loginServ: LoginService) { }

  ngOnInit(): void {
  }

  logIn(): void {
    this.username = this.formNewUserControl.value;
    this.loginServ.authentificate(this.formNewUserControl.value)
      .subscribe(user => {
        if (user !== null) {
          this.username = user.name;
          document.getElementById("login").style.display = "none";
          document.getElementById("welcome").style.display = "block";
          // document.getElementById("sesion").style.display = "block";
          this.loggedUser.emit(user);
          return;
        }
        
        alert("Invalid Username!");
      });
  }

  signUp(): void {
    let user = new User(this.formNewUserControl.value);
    this.loginServ.create(user).subscribe(resut => {});
  }

  signOut(): void {
    this.formNewUserControl.reset();
    document.getElementById("login").style.display = "block";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("sesion").style.display = "none";
    
    this.loggedUser.emit(null);
  }

  newUser(): void {
    document.getElementById("newuser").style.display = "block";
  }


}
