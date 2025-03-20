import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';

  ngOnInit(): void {
    initFlowbite();
  }

  menuOption: string = ''

  onOption(onOption:string){
    this.menuOption =onOption
  }
  navBarShow ={basic:true, pinTab:false, cellTemplate:false, checkbox:false}

  onClickBasic(){
      this.navBarShow ={basic:true, pinTab:false, cellTemplate:false, checkbox:false}
  }

  onClickPinColumn(){
      this.navBarShow ={basic:false, pinTab:true, cellTemplate:false, checkbox:false}
  }

  onClickCellTemplate(){
      this.navBarShow ={basic:false, pinTab:false, cellTemplate:true, checkbox:false}
  }

  onClickCheckbox() { 
      this.navBarShow ={basic:false, pinTab:false, cellTemplate:false, checkbox:true}
  }

}
