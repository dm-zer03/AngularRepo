import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  standalone: true,
  templateUrl: './if-else.html',
  styleUrl: './if-else.css',
})
export class IfElse {
  // show / hide
  isVisible = false;

  // toggle
  isToggled = true;

  status = 'loading';

  userRole = 'admin';

  changeStatus(newStatus: string) {
    this.status = newStatus;
  }

 
  changeRole(role: string) {
    this.userRole = role;
  }

  showDiv() {
    this.isVisible = true;
  }

  hideDiv() {
    this.isVisible = false;
  }

  toggleDiv() {
    this.isToggled = !this.isToggled;
  }
}
