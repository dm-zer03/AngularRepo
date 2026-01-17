import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  count: number = 0;
  handleCounter(val: string) {
    if (val == 'minus') {
      if (this.count > 0) {
        this.count = this.count - 1;
      }
    } else if (val == 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }
}
