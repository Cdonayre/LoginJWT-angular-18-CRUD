import { Component, input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grid-component',
  standalone: true,
  imports: [],
  templateUrl: './grid-component.component.html',
  styleUrl: './grid-component.component.css'
})
export class GridComponentComponent<T> {
  displayColumns = input.required<string[]>();
  data= input.required<T[]>();

  dataSource = new MatTableDataSource<T>();
}
