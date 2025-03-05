import { Component, inject } from '@angular/core';
import { Distritos, DistritosService } from '../../../services/distritos.service';

@Component({
  selector: 'app-mostrar-distritos',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-distritos.component.html',
  styleUrl: './mostrar-distritos.component.css'
})
export class MostrarDistritosComponent {
 distritoService = inject(DistritosService);
 distritos: Distritos[] = [];

 constructor(){
  this.distritoService.getDistritos().subscribe((datos:any)=>{
    this.distritos=datos
  });
 }
}
