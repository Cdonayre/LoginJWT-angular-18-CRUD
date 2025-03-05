import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpClient = inject(HttpClient);
  baseURL='https://app.dirislimanorte.gob.pe:8080/api';
  
  login(data: any): Observable<any>{
    return new Observable(observer => {
      return this.httpClient.post(`${this.baseURL}/auth/login`, data).subscribe({
        next: (response: any) => {
          observer.next(response.token);
          console.log(response.token);
          observer.complete();
          localStorage.setItem('authUser',response.token);
        },
        error: (error: any) => {
          observer.error(error);
          observer.complete();
        }
      })
  
    })
  }
  
  logout(){
    localStorage.removeItem('authUser');
  }
  
  
  isLoggedIn(){
    return localStorage.getItem('authUser') !== null;
  }
  constructor() { }
}
