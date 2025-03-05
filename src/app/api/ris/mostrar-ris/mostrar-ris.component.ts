import { Component, inject } from '@angular/core';
import { Ris, RisService } from '../../../services/ris.service';

@Component({
  selector: 'app-mostrar-ris',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-ris.component.html',
  styleUrl: './mostrar-ris.component.css'
})
export class MostrarRisComponent {

  risService = inject(RisService);
  ris: Ris[]=[];

  constructor() {
    this.risService.getRis().subscribe((datos:any)=>{
      this.ris=datos
    });
  }
}
