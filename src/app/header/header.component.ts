import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  date: string = new Date().toLocaleDateString();
  isActive:boolean=false; 
  cvar:string='green'

  counter: number = 1; // Initialize the counter

  Increament(): void {
    this.counter++; // Increment the counter
  }

  Decreament(): void {
    this.counter--; // Decrement the counter
  }
}
