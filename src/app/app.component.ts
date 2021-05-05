import { Component,Input } from '@angular/core';
import {Pipe} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @Pipe({
//   name: "@gmail.com",
//   pure: false,  
// })

export class AppComponent {
  number: number = 248;
  code = 'ILS';
  date = new Date(2021,5,6);
  email="Leah21222@gmail.com";
  word="heLlO";
  constructor() { 
  }
  title = 'Pipe';
  
 
 
   
}
