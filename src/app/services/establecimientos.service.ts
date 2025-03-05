import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientosService {

  constructor() { }
    private http =  inject(HttpClient);
    private URLbase = environment.apiURL+'/establecimientos';
  
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
  
  
    public getEstablecimientos():Observable<any>{
      return this.http.get(this.URLbase, this.getHttpOptions());  
    }  
    
}


export interface Esablecimientos {
  departamento_id: number;
  provincia_id:    number;
  distrito_id:     number;
  ris_id:          number;
  categoria_id:    number;
  codigo:          string;
  nombre:          string;
  zona_utm:        string;
  este:            number;
  norte:           number;
  geometry:        string;
  latitud:         number;
  longitud:        number;
  zona_sanitaria:  string;
  poblacion:       number;
  estado:          boolean;
  created_at:      Date;
  updated_at:      Date;
}
