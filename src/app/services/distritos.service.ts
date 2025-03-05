import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistritosService {

  constructor() { }
  private http = inject(HttpClient);
  private URLbase= environment.apiURL+'/distritos';

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

  public getDistritos():Observable<any>{
    return this.http.get(this.URLbase, this.getHttpOptions());
  }
}
export interface Distritos {
  id:         number;
  nombre:     string;
  created_at: Date;
  updated_at: Date;
}
