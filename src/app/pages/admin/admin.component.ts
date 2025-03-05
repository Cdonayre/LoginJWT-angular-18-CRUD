import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  authservice = inject(AuthService);
  router = inject(Router);
  public logout(){
    this.authservice.logout();
    this.router.navigate(['login']);
  }
}
