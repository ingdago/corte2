import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {
  public Formarea : FormGroup;// paso 1 formulario reactivo//definir la variable o la propiedad de tipo FormGropup
  
  constructor(protected fb: FormBuilder) { } //Inyeccion de dependencias paso 2
  ngOnInit() {
  }
  CreateForm(){//paso 3 crear formulario 
    this.Formarea=this.fb.group
    ({
      code: ['', Validators.required],
      name: ['', Validators.required],
      
    });
    

}
}
