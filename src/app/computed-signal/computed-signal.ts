import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.html',
  styleUrl: './computed-signal.css',
})
export class ComputedSignal {
  // in normal way we cannot detect changes
  // We use computed Signal that gives the updated changes
  x = signal(10);
  y = signal(20);
  //z computed signal we cannot chnage them directly
  // they will get updated when their dependencies changes.
  z = computed(() => this.x() + this.y());

  showValue() {
    console.log(this.z());
    this.x.set(100);
    console.log(this.z());

   // this.z.set(); ERROR
   // this.z.update();ERROR
  }
}
