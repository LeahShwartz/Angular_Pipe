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
  number: number = 30;
  code = 'ILS';
  date = new Date();
  email="Leah21222";
  num=5.2;
  //gmail:Pipe=createPipe("@gmail.com");
 // gmail=new Pipe(createPipe("@gmail.com"));
  constructor() { 
  }
  title = 'Pipe';
  
 
 
   
}
