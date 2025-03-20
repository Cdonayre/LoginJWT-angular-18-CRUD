import { Component, inject } from '@angular/core';
import { Categorias, CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-mostrar-categoria',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-categoria.component.html',
  styleUrl: './mostrar-categoria.component.css'
})
export default class MostrarCategoriaComponent {
  categoriaService = inject(CategoriaService);
  categorias: Categorias[] = [];
 
  constructor(){
   
   this.categoriaService.getCategorias().subscribe((datos:any) =>{
     this.categorias = datos
   });
  }
}
