import { Component, inject } from '@angular/core';
import { Esablecimientos, EstablecimientosService } from '../../../services/establecimientos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mostrar-establecimientos',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-establecimientos.component.html',
  styleUrl: './mostrar-establecimientos.component.css'
})
export default class MostrarEstablecimientosComponent {
  establecimientoService = inject(EstablecimientosService);
  establecimientos: Esablecimientos[] = [];
  router = inject(Router);
  constructor(){

   this.establecimientoService.getEstablecimientos().subscribe({
    next: (datos:any) => {
    this.establecimientos = datos;
    }, 
    error:(err) =>{
      console.log(err);
    }
  });

   this.establecimientoService.crearEstablecimiento(this.establecimientos).subscribe({
    next:(datos:any)=>{
      this.router.navigate(["establecimientos"]);
    }, 
    error:(err)=>{
      console.log(err);
    }
   });
  }
}
