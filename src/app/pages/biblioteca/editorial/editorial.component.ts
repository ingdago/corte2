import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {
  public editorialform : FormGroup;// paso 1 formulario reactivo//definir la variable o la propiedad de tipo FormGropup

  constructor(protected fb: FormBuilder) { } //Inyeccion de dependencias paso 2

  ngOnInit() {
  }
  CreateForm(){//paso 3 crear formulario 
    this.editorialform=this.fb.group
    ({
      code: ['', Validators.required],
      descripcion: ['', Validators.required],
      country:['', Validators.required],
     
      
    });
      

  }
}
