import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `<h1>Hi world</h1>
  <h3>La base es {{ base }}</h3>
  <button (click)="acumular(base)"> + {{ base }}</button>
  <span> {{numero}} </span>
  <button (click)="acumular(-base)"> - {{ base }}</button>
  `

})


export class ContadorComponent{
  numero: number = 10;
  base  : number = 5;
/*
  sumar():void {
    this.numero = this.numero + 1;
  }
  restar():void {
    this.numero = this.numero + 1;
  }
*/
  acumular(valor:number) {
    this.numero += valor;
  }
}
