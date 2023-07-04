import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-calculadora';
  resultado:number=0;
  OP:number=0;
  valorA:number=0;
  valorB:number=0;


  clickUno(){
    this.valorA = 1;
  }

  clickDos(){
    this.valorA = 2;
  }
  
  clickTres(){
    this.valorA = 3;
  }

  clickCuatro(){
    this.valorA = 4;
  }
  
  clickCinco(){
    this.valorA = 5;
  }

  clickSeis(){
    this.valorA = 6;
  }
  
  clickSiete(){
    this.valorA = 7;
  }

  clickOcho(){
    this.valorA = 8;
  }
  
  clickNueve(){
    this.valorA = 9;
  }

  clickCero(){
    this.valorA = 0;
  }
  
  clickCeroDoble(){
    this.valorA = 0;
    let duplicador = this.valorA.toString().padStart(2, '0');
  }

}
