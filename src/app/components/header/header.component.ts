import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class header {

  public titulo: string;
  public año: number;
  public comentario: string;


  constructor() {
    this.titulo = "Hola mundo soy el header";
    this.año = 2020;
    console.log("Hola mundo");
  }
}
