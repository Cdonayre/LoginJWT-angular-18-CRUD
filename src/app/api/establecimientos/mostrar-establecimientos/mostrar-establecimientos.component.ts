import { Component, inject, OnInit } from '@angular/core';
import { Esablecimientos, EstablecimientosService } from '../../../services/establecimientos.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-mostrar-establecimientos',
  standalone: true,
  imports: [ CommonModule, MatSlideToggleModule ],
  templateUrl: './mostrar-establecimientos.component.html',
  styleUrl: './mostrar-establecimientos.component.css',
  template: `
  <div>
    <ngx-datatable [rows]="rows" [columns]="columns"> </ngx-datatable>
  </div>
`
})
export default class MostrarEstablecimientosComponent implements OnInit{



  establecimientoService = inject(EstablecimientosService);
  establecimientos: Esablecimientos[] = [];
  router = inject(Router);
  establecimientoCreado: any;
  constructor( ) {

   this.establecimientoService.getEstablecimientos().subscribe({
    next: (datos:any) => {
    this.establecimientos = datos;
    }, 
    error:(err) =>{
      console.log(err);
    }
  });

  this.establecimientoService.crearEstablecimiento(this.establecimientoCreado).subscribe(
    establecimiento => this.establecimientos.push(establecimiento)
  );


  }


  ngOnInit(): void {
      
}
}
