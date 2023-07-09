import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-calculadora';
  operation: string = '';
  valorDef: string = '0';
  resultado:string = '';

  updateResultado(valor: string){
    this.resultado = valor;
  }

  updateOperacion(valor: string){
    this.operation = valor;
  }

  operations(newValorA: number, newValorB: number, newOperation: string): number{      
    switch (newOperation) {
      case '+':
        return newValorA + newValorB;
      case '-':
        return newValorA - newValorB;
      case '*':
        return newValorA * newValorB;
      case '/':
        return newValorA / newValorB;
      default:
        return newValorA;
    }
  }

  insertNumber(numero: string){
    if (this.valorDef === '0') {
      this.valorDef = numero;
    }else if(this.valorDef === '.'){
      this.valorDef += '.' + numero;
    }else{
      this.valorDef += numero;
    }
    this.operation += numero;
  }

  insertOperation(newOperation: string){
    if (this.operation === '') {
      this.operation = this.valorDef + newOperation;
      this.updateResultado(this.valorDef);
    } else {
      this.calculate();      
      this.operation = this.valorDef + newOperation;
      this.updateResultado(this.resultado);
    }
    this.valorDef = '0';
  }

  calculate(){
      let valorA = parseFloat(this.valorDef);
      let valorB = parseFloat(this.resultado);
      let resultFinal = this.operations(valorA, valorB, this.operation);
      this.updateResultado(resultFinal.toString());
      this.updateOperacion(resultFinal.toString());
  }
  
  clean(){
    this.updateOperacion('');
    this.updateResultado('');
    this.valorDef = '';
  }
}


