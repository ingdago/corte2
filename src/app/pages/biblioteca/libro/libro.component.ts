import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
  public titulo = "Buscar libros"
  public idlibro : string;
  public nombre1 : string;
  public fecha_lanzamiento : Date;
  
  constructor() { }

  ngOnInit() {
  }

}
