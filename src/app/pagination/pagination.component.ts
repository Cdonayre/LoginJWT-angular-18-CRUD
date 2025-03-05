import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {

  pages: number[]=[];
  currentPage:number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 100;
  ngOnInit():void{
    
  }

  calculatePages():void{
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = Array.from({length: totalPages}, (_, i)=> i+1);
  }

  previousPage():void{
    if(this.currentPage>1){
      this.currentPage--;
    }
  }
  
  nextPage():void{
    if(this.currentPage < this.pages.length){
      this.currentPage++;
  }
}

  changePage(page:number):void{
    this.currentPage = page;
  }
}
 