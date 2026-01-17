import { Component } from '@angular/core';

@Component({
  selector: 'app-event-app',
  imports: [],
  templateUrl: './event-app.html',
  styleUrl: './event-app.css',
})
export class EventApp {
  handleEvent(event: MouseEvent) {
    console.log('function called', event.type);
    console.log('function called', event.target);
    console.log('function called', (event.target as Element).className);
  }

  lastEventType = '';
  x = 0;
  y = 0;
  lastKey = '';
  inputValue = '';

  // Click event
  handleClick(event: MouseEvent) {
    this.lastEventType = event.type;
    console.log('Clicked element:', event.target);
  }

  // Mouse move event
  handleMouseMove(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  // Keyboard event
  handleKey(event: KeyboardEvent) {
    this.lastKey = event.key;
    console.log('Key pressed:', event.key);
  }

  // Input event
  handleInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
}
