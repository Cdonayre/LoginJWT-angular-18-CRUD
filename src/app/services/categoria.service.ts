import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }
  private http =  inject(HttpClient);
  private URLbase = environment.apiURL+'/categorias';

  getToken(){
    return localStorage.getItem('authUser');
  }


  private getHttpOptions() {
    const token = this.getToken();
    console.log(token);
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token? `Bearer ${token}`:''
      })
    };
  }


  public getCategorias():Observable<any>{
    return this.http.get(this.URLbase, this.getHttpOptions());  
  }  
}

export interface Categorias {
id:         number;
nombre:     string;
created_at: Date;
updated_at: Date;
}
