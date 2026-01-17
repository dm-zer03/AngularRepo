import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Login} from './login/login'
import { SignUp } from './sign-up/sign-up';
import { Profile } from './profile/profile';
@Component({
  selector: 'app-root',
  imports: [Login,SignUp,Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularDemo');

  onClick(){
    alert("button was clicked !!!");
    this.consoleFunc();
  }

  consoleFunc(){
    console.log("Hello");
  }
}
