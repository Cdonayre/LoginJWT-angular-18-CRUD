import { Component, inject } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  authservice = inject(AuthService);
  router = inject(Router);

  public menuItems = routes
  .map(route => route.children ?? [])
  .flat()
  .filter(route => route && route.path)
  .filter(route => !route.path?.includes(':'))
    constructor(){
  //  const dashboardRoutes = routes
  //  .map(route => route.children ?? [])
  //  .flat()
  //  .filter(route => route && route.path)
  //  .filter(route => !route.path?.includes(':'))

  }

  public logout(){
    this.authservice.logout();
    this.router.navigate(['login']);
  }
}
