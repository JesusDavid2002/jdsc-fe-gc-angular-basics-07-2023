import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-calculadora';
  
  operation = '';
  operacionGlobal = ''; 
  primerValor = '0'; 
  segundoValor = ''; 
  result = '0'; 

  updateResultado(valor: string) {
    this.result = valor;
  }

  updateOperacionGlobal(valor: string) {
    this.operacionGlobal = valor;
  }

  operations(newValorA: number, newValorB: number, newOperation: string): number {
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
        return newValorB;
    }
  }

  insertNumber(numero: string) {
    if (numero === '.') {
      if (this.segundoValor === '') {
        this.segundoValor = '0';
      }
      if (!this.segundoValor.includes('.')) {
        this.segundoValor += numero;
        this.operacionGlobal += numero;
      }
    } else {
      if (this.primerValor === '0' && this.segundoValor === '') {
        this.primerValor = numero;
        this.operacionGlobal = numero;
      } else {
        this.segundoValor += numero;
        this.operacionGlobal += numero;
      }
    }
  }

  insertOperation(newOperation: string) {
    if (
      newOperation === '+' || newOperation === '-' || newOperation === '*' || newOperation === '/') {
      if (this.primerValor !== '') {
        this.operation = newOperation;
        this.operacionGlobal += newOperation;
        this.primerValor = this.operacionGlobal;
        this.segundoValor = '';
      }
    } else {
      this.updateResultado('0');
    }
  }

  calculate() {
    if (this.primerValor !== '' && this.segundoValor !== '') {
      let primerValorFloat = parseFloat(this.primerValor);
      let segundoValorFloat = parseFloat(this.segundoValor);

      let resultFinal = this.operations(primerValorFloat, segundoValorFloat, this.operation);

      this.updateOperacionGlobal('');
      this.operacionGlobal = '';
      this.primerValor = '0';
      this.segundoValor = '';
      this.updateResultado(resultFinal.toString());
    } else {
      this.result = '0';
    }
  }

  clean() {
    this.operacionGlobal = '';
    this.primerValor = '0';
    this.segundoValor = '';
    this.result = '0';
  }
}


