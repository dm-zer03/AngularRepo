import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-use-effect',
  standalone: true,
  templateUrl: './use-effect.html',
  styleUrl: './use-effect.css',
})
export class UseEffect {

  userName = signal('java');
  count = signal(0);

  // MUST be a signal
  displayHeading = signal(false);

  private timeoutId: any;

  constructor() {
    effect(() => {
      if (this.count() === 2) {
        this.displayHeading.set(true);

        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => {
          this.displayHeading.set(false);
        }, 2000);
      } else {
        this.displayHeading.set(false);
        clearTimeout(this.timeoutId);
      }
    });
  }

  toggleVal() {
    this.count.update(v => v + 1);
  }
}
