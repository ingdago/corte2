import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
  public titulo = "Autores"
  public autorForm : FormGroup;// paso 1 formulario reactivo//definir la variable o la propiedad de tipo FormGropup
  
  constructor(protected fb: FormBuilder) { } //Inyeccion de dependencias paso 2

  ngOnInit() {
  }

  CreateForm(){//paso 3 crear formulario 
    this.autorForm= this.fb.group
    ({
      Nombre: ' ',
      codigo: ' ',
      Fec_nac: ' '
    });

  }
}

