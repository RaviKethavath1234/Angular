import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 city="HYD";
 UpdateCity(){
  this.city="Pune"
 };

 headings=["ID","ENAME","SAL"];
 Evalues=["01","Ravi K","10000","button"];

data=false;
num=["1","2","3","4","5"];

num1:number=10;
num2:number=12;

operation:string="-";



dataValue="Input decorator example";






}
