import { Component,Signal, effect, signal,computed , WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signalc.html',
  styleUrl: './signalc.css',
})
export class SignalC {
  /*count = signal(10);
  x=20;

  constructor(){
    effect(()=>{
     // console.log(this.x);
     console.log(this.count());
    });
  }

  updateX(){
    //this.x=30;
    this.count.set(this.count()+1);
  }*/

  // data = signal<number | string>(10);
  data1: WritableSignal<number | string> = signal<number | string>(10);
  data: WritableSignal<number | string> = signal(10);

  count = signal(10);
  doubleCount = computed(() => this.count() * 2);
  readOnlyCount:Signal<number>=computed(()=>200);
  
  updateSignal() {
    this.data.set('Hello');
    //Inside Update callback and it work for only one date type single other wise use set()
   // this.data.update((val)=>val+1);
  }
}
