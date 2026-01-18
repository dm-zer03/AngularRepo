import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { Profile } from './profile/profile';
import { CounterApp } from './counter-app/counter-app';
import { EventApp } from './event-app/event-app';
import { IfElse } from './if-else/if-else';
import { ForLoop } from './for-loop/for-loop';
import { SignalC } from './signalc/signalc';
import { ComputedSignal } from './computed-signal/computed-signal';
import { CntVar } from './cnt-var/cnt-var';
import { UseEffect } from './use-effect/use-effect';
import { Todo } from './todo/todo';
@Component({
  selector: 'app-root',
  imports: [Login,
    SignUp, 
    Profile,
    CounterApp,
    EventApp,
    IfElse,
    ForLoop,
    SignalC,
    ComputedSignal,
    CntVar,
    UseEffect,
  Todo],
  templateUrl: './app.html',
  styleUrl: './app.css',
 // styleUrls:[] multiple css path in arrayform
})
export class App {
  protected readonly title = signal('AngularDemo');
  //Inside class property can not use var,let,const
 /* name:string = 'CodingEnzineer';
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
  }*/

    name="";
    displayName="";
    email="";
    getName(event:Event){
      const val=(event.target as HTMLInputElement).value;
      console.log(val);
      this.name=val
    }

    displayFunction(){
      this.displayName=this.name;
    }

    setName(){
      this.name="Sam"
    }

    getEmail(val:string){
      console.log(val);
      this.email=val;
    }

    
    setEmail(){
      this.email="OR@gmail.com";
    }
}
