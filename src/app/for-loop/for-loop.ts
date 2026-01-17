import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css',
})
export class ForLoop {
  users = ['Tony', 'Rony', 'Sony', 'Mony'];
  students=[
    {name:'tony',age:12,email:'tony@gmail.com'},
    {name:'rony',age:13,email:'rony@gmail.com'},
    {name:'sony',age:14,email:'sony@gmail.com'},
    {name:'mony',age:15,email:'mony@gmail.com'},
  ]
}
