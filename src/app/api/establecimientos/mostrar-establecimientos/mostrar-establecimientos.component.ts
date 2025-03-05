import { Component, inject } from '@angular/core';
import { Esablecimientos, EstablecimientosService } from '../../../services/establecimientos.service';


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
 
  constructor(){

   this.establecimientoService.getEstablecimientos().subscribe((datos:any) =>{
     this.establecimientos = datos
   });
  }
}
