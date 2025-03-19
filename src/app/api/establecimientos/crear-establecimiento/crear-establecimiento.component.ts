import { Component, inject, Inject } from '@angular/core';
import { Esablecimientos, EstablecimientosService } from '../../../services/establecimientos.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-establecimiento',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './crear-establecimiento.component.html',
  styleUrl: './crear-establecimiento.component.css'
})
export class CrearEstablecimientoComponent {
establecimientoService = Inject(EstablecimientosService);
establecimientos: Esablecimientos[] = [];
form!: FormGroup;

private router = inject(Router);



constructor(){}

ngOnInit():void{
  this.form = new FormGroup({
    ipress: new FormControl('',[Validators.required]),
    nombre: new FormControl('',[Validators.required])
  });
}

get f(){
  return this.form.controls;
}

submit(){
  console.log(this.form.value); 
  this.establecimientoService.crearEstablecimiento(this.form.value).subscribe((res:any) => {
    console.log("Se ha creado nueva IPRESS");
    this.router.navigateByUrl('establecimientos/crear');
  })
}
}
