import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { Profile } from './profile/profile';
import { CounterApp } from './counter-app/counter-app';
import { EventApp } from './event-app/event-app';
@Component({
  selector: 'app-root',
  imports: [Login, SignUp, Profile,CounterApp,EventApp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AngularDemo');
  //Inside class property can not use var,let,const
  name:string = 'CodingEnzineer';
  data:string|number = 'CodingEnzineer';
  all:any = 'CodingEnzineer';

  updateName(){
    //Inside function variable
    let name:string="hello";
    this.name="CodeForEthics";
    this.data=10;
  }
  onClick() {
    alert('button was clicked !!!');
    this.consoleFunc();
  }

  consoleFunc() {
    console.log('Hello');
  }

  sum(a:number,b:number){
    console.log(a+b);
  }
}
