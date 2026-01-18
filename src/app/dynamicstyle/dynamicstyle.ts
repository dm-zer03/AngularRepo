import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamicstyle',
  imports: [],
  templateUrl: './dynamicstyle.html',
  styleUrl: './dynamicstyle.css',
})
export class Dynamicstyle {
bgColor="green";
//fontSize="50px";
fontSize="20";


headingSizeBig="80px";
headingSizeSmall="30px";

zoom=false;
updateSize(){
  this.zoom=!this.zoom
;}

}
