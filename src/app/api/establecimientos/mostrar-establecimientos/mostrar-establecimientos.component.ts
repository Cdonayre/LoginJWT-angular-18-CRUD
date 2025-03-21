import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Esablecimientos, EstablecimientosService } from '../../../services/establecimientos.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-mostrar-establecimientos',
  standalone: true,
  imports: [ CommonModule, MatSlideToggleModule,MatTableModule,MatPaginatorModule ],
  templateUrl: './mostrar-establecimientos.component.html',
  styleUrl: './mostrar-establecimientos.component.css',
})
export default class MostrarEstablecimientosComponent implements OnInit{




  establecimientoService = inject(EstablecimientosService);
  establecimientos: Esablecimientos[] = [];
  //Datatable
  displayedColumns: string []=['codigo','nombre'];
  establecimientoDataSource = new MatTableDataSource<Esablecimientos>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  router = inject(Router);
  establecimientoCreado: any;
  constructor( ) {

   this.establecimientoService.getEstablecimientos().subscribe({
    next: (datos:any) => {
    this.establecimientos = datos;
    this.establecimientoDataSource = new MatTableDataSource<Esablecimientos>(datos);
    this.establecimientoDataSource.paginator = this.paginator;
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
