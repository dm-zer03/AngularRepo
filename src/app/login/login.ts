import { Component } from '@angular/core';
import { SignUp } from '../sign-up/sign-up';

@Component({
  selector: 'app-login',
  //selector: 'login',
   imports: [SignUp],
  //standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
