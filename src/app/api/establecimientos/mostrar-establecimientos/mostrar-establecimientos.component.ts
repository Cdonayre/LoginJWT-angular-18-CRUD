import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Esablecimientos, EstablecimientosService } from '../../../services/establecimientos.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, NgForm } from '@angular/forms';



@Component({
  selector: 'app-mostrar-establecimientos',
  standalone: true,
  imports: [ CommonModule, MatSlideToggleModule,MatTableModule,MatPaginatorModule,MatPaginator, FormsModule ],
  templateUrl: './mostrar-establecimientos.component.html',
  styleUrl: './mostrar-establecimientos.component.css',
})
export default class MostrarEstablecimientosComponent implements OnInit{

  establecimientos: Esablecimientos[] = [];
  nuevoEstablecimeinto:Partial<Esablecimientos>= {codigo:'', nombre:''}  //Datatable
  displayedColumns: string []=['codigo','nombre'];
  establecimientoDataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  router = inject(Router);
  establecimientoCreado: any;
  constructor( private establecimientoService:EstablecimientosService) {

   this.establecimientoService.getEstablecimientos().subscribe({
    next: (datos:any) => {
    this.establecimientos = datos;
    //muestra los datos en el datatable
    this.establecimientoDataSource = new MatTableDataSource<any>(datos);
    this.establecimientoDataSource.paginator = this.paginator;
    }, 
    error:(err) =>{
      console.log(err);
    }
  });


  }

  // AgregarPPDD(form:NgForm){
  //   if(form.valid)
  //     {
  //       this.establecimientoService.crearEstablecimiento(this.nuevoEstablecimeinto)
  //       .subscribe({
  //         next:(establecimiento)=>{
  //           this.establecimientos.push(establecimiento);
  //           form.reset();
  //         },
  //         error:(err)=>{
  //           console.error('error al agregar',err);
  //         }
  //       });
  //     }
  //   }


  ngOnInit(): void {
      
}

  }



