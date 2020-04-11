import { Component, OnInit } from '@angular/core';
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
  // formCharControl = new FormControl();

  loggedUser: string;
  characterList: string[];
  selectedChar: string;

  constructor(private login: LoginService) { }

  ngOnInit(): void {
  }

  logIn(): void {
    this.loggedUser = this.formNewUserControl.value;
    this.login.authentificate(this.formNewUserControl.value)
      .subscribe(user => {
        if (user !== null) {
          this.login.setLoggedUser(user);
          this.loggedUser = user.name;
          document.getElementById("login").style.display = "none";
          document.getElementById("welcome").style.display = "block";
          document.getElementById("sesion").style.display = "block";
          return;
        }
        alert("Invalid Username!");
      });

  }

  signUp(): void {
    let user = new User(this.formNewUserControl.value);
    this.login.create(user).subscribe(resut => {
      console.log("Recived:");
      console.log(resut);
    });
  }

  signOut(): void {
    this.formNewUserControl.reset();
    document.getElementById("login").style.display = "block";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("sesion").style.display = "none";
  }

  newUser(): void {
    document.getElementById("newuser").style.display = "block";
  }


}
