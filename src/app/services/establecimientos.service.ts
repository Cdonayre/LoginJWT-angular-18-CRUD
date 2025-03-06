import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

    public getEstablecimiento(id:number):Observable<any>{
      return this.http.get(this.URLbase+'/'+id, this.getHttpOptions());
    }

    public crearEstablecimiento(establecimiento: Esablecimientos):Observable<any>{
      return this.http.post(this.URLbase, establecimiento, this.getHttpOptions());
    }

    public updateEstablecimiento(establecimiento: Esablecimientos):Observable<any>{
      return this.http.put(this.URLbase+'/'+establecimiento.categoria_id, establecimiento, this.getHttpOptions());
    }
    public deleteEstablecimiento(id:number):Observable<any>{
      return this.http.delete(this.URLbase+'/'+id, this.getHttpOptions());
    }

    getEstablecimientosWithParams(userId: number): Observable<any> {
      let params = new HttpParams().set('userId', userId);
      return this.http.get(this.URLbase, { params });
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
