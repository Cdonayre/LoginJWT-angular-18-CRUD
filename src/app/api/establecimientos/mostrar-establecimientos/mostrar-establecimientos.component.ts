import { Component, inject, OnInit } from '@angular/core';
import { Esablecimientos, EstablecimientosService } from '../../../services/establecimientos.service';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';



@Component({
  selector: 'app-mostrar-establecimientos',
  standalone: true,
  imports: [ CommonModule],
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



  }


  ngOnInit(): void {
      
}
}
